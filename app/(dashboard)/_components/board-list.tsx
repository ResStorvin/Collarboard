"use client";
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
export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];
  if (!data?.length && query.search) {
    return (
      <div>
        <EmptySearch />
      </div>
    );
  }
  if (!data?.length && query.favorite) {
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
  return <div>{JSON.stringify(query)}</div>;
};
