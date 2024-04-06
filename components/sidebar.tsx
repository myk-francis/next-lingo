import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "  h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
        <Image src={"/mascot.svg"} width={40} height={40} alt={"Mascot"} />
        <h1 className="text-2xl font-extrabold to-green-600 trancking-wide">
          Lingo
        </h1>
      </div>
    </div>
  );
};
