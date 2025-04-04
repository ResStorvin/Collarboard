"use client";
import { useSearchParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

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
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const favorite = searchParams.get("favorite");
  const data = useQuery(api.boards.get, { orgId });

  if (data === undefined) {
    return <div>Loading...</div>;
  }

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
  return (
    <div>
      <h2 className="text-3xl">
        {query.favorite ? "Favorite Boards" : "Team Boards"}
      </h2>
    </div>
  );
};
