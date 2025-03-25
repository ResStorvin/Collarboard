"use client";
import { useSearchParams } from "next/navigation";
import { EmptyBoard } from "./empty-board";
import { EmptyFavorite } from "./empty-favorite";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorite?: string;
  };
}
export const BoardList = ({ orgId }: BoardListProps) => {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const favorite = searchParams.get("favorite");
  const data = [];
  if (!data?.length && search) {
    return (
      <div>
        <EmptySearch />
      </div>
    );
  }
  if (!data?.length && favorite) {
    return (
      <div>
        <EmptyFavorite />
      </div>
    );
  }
  if (!data?.length) {
    return (
      <div>
        <EmptyBoard />
      </div>
    );
  }
  return <div>{JSON.stringify({ search, favorite })}</div>;
};
