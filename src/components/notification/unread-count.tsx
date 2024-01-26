export default function UnreadCount({ count }: { count: number }) {
  return (
    <div className="text-white bg-!bg-navy-800  dark:!text-navy-800 dark:bg-white font-extrabold px-[11px] pt-0.5 pb-[3px] rounded-md leading-tight">
      <span className="select-none">{count}</span>
    </div>
  );
}
