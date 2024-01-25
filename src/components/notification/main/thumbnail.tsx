import { Items } from "@/types";
import Image from "next/image";

export default function Thumbnail({ item }: { item: Items }) {
  return (
    <Image
      src={item.body}
      alt=""
      width={39}
      height={39}
      className="sm:w-[45px]"
    />
  );
}
