import Image from "next/image";

export const EmptyFavorite = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center mt-12">
      <Image
        src="/empty-favorite.png"
        alt="Empty favorite"
        height={140}
        width={140}
      />
      <h2 className="text-2xl font-semibold mt-6">No favorite board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favoriting a board
      </p>
    </div>
  );
};
