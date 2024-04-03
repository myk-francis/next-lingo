import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col max-w-[200px] p-4 space-y-4 ">
      <Button className="">Default</Button>
      <Button className="" variant={"primary"}>
        Primary
      </Button>
      <Button className="" variant={"primaryOutline"}>
        Primary outline
      </Button>
      <Button className="" variant={"secondary"}>
        Secondary
      </Button>
      <Button className="" variant={"secondaryOutline"}>
        Secondary outline
      </Button>
      <Button className="" variant={"danger"}>
        Danger
      </Button>
      <Button className="" variant={"dangerOutline"}>
        Danger outline
      </Button>
      <Button className="" variant={"super"}>
        Super
      </Button>
      <Button className="" variant={"superOutline"}>
        Super outline
      </Button>
      <Button className="" variant={"ghost"}>
        Ghost
      </Button>
    </div>
  );
}
