import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col max-w-[200px] p-4 space-y-4 ">
      <Button className="">Default</Button>
      <Button className="">Primary</Button>
      <Button className="">Click Me</Button>
    </div>
  );
}
