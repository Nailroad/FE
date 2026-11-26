import type { NotificationItem } from "@/components/notifications/NotificationsScreen";

export const MOCK_NOTIFICATIONS: NotificationItem[] = ["reservation-1", "reservation-2", "reservation-3"].map(
  (id) => ({
    id,
    title: "예약이 확정되었어요!",
    serviceName: "손네일",
    reservationDateLabel: "10월 29일(수)",
    receivedAtLabel: "방금 전",
  }),
);
