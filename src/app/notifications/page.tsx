import NotificationsScreen from "@/components/notifications/NotificationsScreen";
import { MOCK_NOTIFICATIONS } from "@/mocks/notifications";

export default function NotificationsPage() {
  return <NotificationsScreen notifications={MOCK_NOTIFICATIONS} />;
}
