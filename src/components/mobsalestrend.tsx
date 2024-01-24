import BarChart from "./barChart";
import {
  barChartOptionsDailyTraffic2,
  barChartDataDailyTraffic2,
} from "@/constants";
import Card from "./Card";
import Menu from "./menu";
const SalesTrendMob = () => {
  return (
    <Card extra="pb-7 p-[20px] md:hidden sm:flex max-w-[806px]">
      <div className="flex flex-row justify-between">
        <div className="ml-1 pt-2">
          <p className="text-[34px] font-bold text-navy-700 dark:text-white">
            Sales Trends
          </p>
        </div>
        <div className="mt-2 flex items-start">
          <div className="flex items-center text-sm text-green-500">
            <Menu />
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full pt-10 pb-0">
        <BarChart
          chartData={barChartDataDailyTraffic2}
          chartOptions={barChartOptionsDailyTraffic2}
        />
      </div>
    </Card>
  );
};

export default SalesTrendMob;
