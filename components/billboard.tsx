import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover ">
        <div className="absolute inset-0 bg-black opacity-10" />
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 absolute inset-0">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-6xl max-w-xs text-white">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
