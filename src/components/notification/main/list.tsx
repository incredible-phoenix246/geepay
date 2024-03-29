import { Notification } from "@/types";
import Card from "./card";
import data from "@/constants/db.json";

async function getNotifications(): Promise<Notification[]> {
  const { notifications } = data;

  // add a brief delay to emulate data fetching and show the loading UI
  return new Promise((resolve) => {
    setTimeout(() => resolve(notifications as Notification[]), 3000);
  });
}

export default async function NotificationList() {
  const notifications = await getNotifications();

  return (
    <ul className="space-y-[11px]">
      {notifications.map((notification) => (
        <li key={`${notification.from.name}${notification.time}`}>
          <Card notification={notification} />
        </li>
      ))}
    </ul>
  );
}
