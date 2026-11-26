"use client";

import { useRouter } from "next/navigation";

import TopBar from "@/components/common/TopBar";
import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import NavArrowBackIcon from "@/components/icons/NavArrowBackIcon";

export type NotificationItem = {
  id: string;
  title: string;
  serviceName: string;
  reservationDateLabel: string;
  receivedAtLabel: string;
};

type NotificationsScreenProps = {
  notifications: readonly NotificationItem[];
};

export default function NotificationsScreen({ notifications }: NotificationsScreenProps) {
  const router = useRouter();

  function handleBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.replace("/home");
    }
  }

  return (
    <main className="flex flex-1 flex-col bg-gray-0 pt-[env(safe-area-inset-top)]">
      <TopBar
        title="알림"
        left={
          <button
            type="button"
            aria-label="이전 화면"
            onClick={handleBack}
            className="flex size-6 cursor-pointer items-center justify-center"
          >
            <NavArrowBackIcon />
          </button>
        }
      />

      {notifications.length === 0 ? (
        <p className="typo-body2-medium mt-10 px-medium text-center text-gray-600">아직 받은 알림이 없어요.</p>
      ) : (
        <ul aria-label="받은 알림" className="mt-[13px] px-medium">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="grid grid-cols-[20px_minmax(0,1fr)_auto] items-start gap-x-3 border-b border-gray-200 py-medium"
            >
              <CheckCircleIcon size={20} className="text-black" />
              <div className="min-w-0">
                <h2 className="typo-body1-semibold text-black">{notification.title}</h2>
                <p className="typo-caption1-medium mt-0.5 flex flex-wrap gap-x-2 text-gray-600">
                  <span>{notification.serviceName}</span>
                  <span>{notification.reservationDateLabel}</span>
                </p>
              </div>
              <span className="typo-caption2-medium text-gray-600">{notification.receivedAtLabel}</span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
