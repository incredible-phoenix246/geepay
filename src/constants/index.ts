import {
  Category,
  Icon,
  ArrowCircleRight2,
  Setting2,
  DiscountShape,
  People,
  WalletMoney,
  Logout,
  InfoCircle,
  Notification,
  Box,
  Profile2User,
  TrendUp,
} from "iconsax-react";

type PagesProps = {
  id?: number;
  label: string;
  icon: Icon;
  link: string;
};

export const SIDEBAR_LINKS: PagesProps[] = [
  {
    id: 1,
    label: "Dashboard",
    icon: Category,
    link: "",
  },

  {
    id: 2,
    label: "TrendUp",
    icon: TrendUp,
    link: "home",
  },
  {
    id: 3,
    label: "Profile",
    icon: Profile2User,
    link: "admin-projects",
  },
  {
    id: 4,
    label: "Clients",
    icon: Box,
    link: "admin-clients",
  },
  {
    id: 5,
    label: "Discount",
    icon: DiscountShape,
    link: "admin-transactions",
  },
  {
    id: 6,
    label: "Information",
    icon: InfoCircle,
    link: "admin-messages",
  },

  {
    id: 7,
    label: "Notifications",
    icon: Notification,
    link: "admin-notifications",
  },
];

// ArrowCircleRight2;

export const Button_Link: PagesProps[] = [
  {
    id: 1,
    label: "Right",
    icon: ArrowCircleRight2,
    link: "Right",
  },
  {
    id: 2,
    label: "settings",
    icon: Setting2,
    link: "settings",
  },
  {
    id: 3,
    label: "Logout",
    icon: Logout,
    link: "",
  },
];
