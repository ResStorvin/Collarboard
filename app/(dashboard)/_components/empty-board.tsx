import Image from "next/image";
import { Button } from "@/components/ui/button";

export const EmptyBoard = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center mt-12">
      <Image src="/note.png" alt="Empty favorite" height={140} width={140} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start create your board
      </p>
      <div className="mt-3">
        <Button size="lg">Create Board</Button>
      </div>
    </div>
  );
};
