import { Items } from "@/types";
import clsx from "clsx";

export default function Item({ item }: { item: Items }) {
  if (item.type !== "group" && item.type !== "post") return;

  return (
    <a
      href="#"
      className={clsx("font-extrabold hover:text-primary-blue", {
        "text-primary-blue": item.type === "group",
      })}
    >
      {item.body}
    </a>
  );
}
