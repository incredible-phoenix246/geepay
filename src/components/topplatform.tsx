import Card from "./Card";
import Progress from "./progressbar";
import Link from "next/link"

const TopPlat = () => {
  return (
    <Card extra="max-w-[452px] hide-scroll hidden md:flex p-[20px] max-h-[448px] overflow-y-auto overflow-x-hidden items-center justify-center py-5 md:gap-4 gap-2">
        <div className="w-full flex items-center justify-between px-2 py-2">
          <h2 className="text-lg font-medium leading-[28.8px] text-black dark:text-white">
           Top Platform 
          </h2>

          <div>
            <Link href="/" className="text-[#34CAA5] ">
              See All
            </Link>
          </div>
        </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-semibold text-xl leading-6 text-black dark:text-[#34CAA5]">
          Book Bazaar
        </h2>
    <div className="lg:flex hidden">
        <Progress width="w-[350px]" value={80} />
  </div>

    <div className="flex lg:hidden">
        <Progress width="w-[250px]" value={80} />
</div>
        <div className="flex justify-between items-center">
          <p className="text-neutral-600 text-lg leading-6">$2,500,000</p>
          <p className="text-neutral-600 text-lg leading-6">+15%</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-semibold text-xl leading-6 text-black dark:text-[#34CAA5]">
          Artisan Aisle
        </h2> 
    <div className="lg:flex hidden">
        <Progress width="w-[350px]" value={60} color="blue" />
  </div>
 <div className="flex lg:hidden">
          <Progress width="w-[250px]" value={60} color="blue" />
</div>
        <div className="flex justify-between items-center">
          <p className="text-neutral-600 text-lg leading-6">$1,800,000</p>
          <p className="text-neutral-600 text-lg leading-6">+10%</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-semibold text-xl leading-6 text-black dark:text-[#34CAA5]">
          Toy Troop
        </h2> 
    <div className="lg:flex hidden">
        <Progress width="w-[350px]" value={40} color="yellow" />
  </div>
 <div className="flex lg:hidden">
          <Progress width="w-[250px]" value={40} color="yellow" />
</div>
        <div className="flex justify-between items-center">
          <p className="text-neutral-600 text-lg leading-6">$1,200,000</p>
          <p className="text-neutral-600 text-lg leading-6">+8%</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-semibold text-xl leading-6 text-black dark:text-[#34CAA5]">
          XStore
        </h2>
    <div className="lg:flex hidden">
        <Progress width="w-[350px]" value={20} color="red" />
  </div>
 <div className="flex lg:hidden">
           <Progress width="w-[250px]" value={20} color="red" />
</div>
        <div className="flex justify-between items-center">
          <p className="text-neutral-600 text-lg leading-6">$800,000</p>
          <p className="text-neutral-600 text-lg leading-6">+6%</p>
        </div>
      </div>
    </Card>
  );
};

export default TopPlat;
