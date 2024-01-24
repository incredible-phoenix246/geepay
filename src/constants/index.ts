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

export const barChartDataDailyTraffic = [
  {
    name: "Sales Trend",
    data: [
      3000, 1700, 2700, 2000, 3500, 4500, 3500, 4300, 2500, 3500, 1800, 2800,
    ],
  },
];

export const barChartOptionsDailyTraffic = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: [
      "jan",
      "feb",
      "mar",
      "april",
      "may",
      "jun",
      "jul",
      "aug",
      "sept",
      "oct",
      "nov",
      "dec",
    ],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    // categories: ["jan", "feb", "mar", "april", "may", "june", "jul"],
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: true,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#34CAA5",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#FFFFFF",
            opacity: 1,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 15,
      columnWidth: "30px",
    },
  },
};

export const barChartDataDailyTraffic2 = [
  {
    name: "Daily Traffic",
    data: [20, 30, 40, 20, 45, 50, 30],
  },
];

export const barChartOptionsDailyTraffic2 = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["jan", "feb", "march", "apr", "may", "jun"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    // categories: ["jan", "feb", "mar", "april", "may", "june", "jul"],
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: true,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#34CAA5",
            opacity: 1,
          },
          {
            offset: 100,
            color: "#FFFFFF",
            opacity: 1,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 15,
      columnWidth: "30px",
    },
  },
};
