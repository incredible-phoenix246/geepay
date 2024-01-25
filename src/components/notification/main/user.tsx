import { User2 } from "@/types";
import Link from "next/link";

export default function User({ user }: { user: User2 }) {
  return (
    <Link
      href="#"
      className="font-extrabold text-very-dark-blue hover:text-primary-blue"
    >
      {user.name}
    </Link>
  );
}
