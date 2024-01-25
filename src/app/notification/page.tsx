import { Suspense } from "react";
import NotificationList from "@/components/notification/main/list";
import NotificationSkeleton from "@/components/notificationskel";
import NotificationActions from "@/components/notification/actions";

export default async function Page() {
  return (
    <section
      aria-labelledby="heading"
      className="px-4 py-8 sm:px-[31px] sm:py-[34px] bg-white dark:!bg-navy-800 dark:text-white w-full"
    >
      <div className="flex items-center gap-[9px] mb-6 sm:mb-[33px]">
        <h1 id="heading" className="font-extrabold text-xl sm:text-2xl">
          Notifications
        </h1>
        <NotificationActions />
      </div>
      <Suspense fallback={<NotificationSkeleton />}>
        <NotificationList />
      </Suspense>
    </section>
  );
}
