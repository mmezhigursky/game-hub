import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";


import ApiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform:Platform}[];
    metacritic: number;
    rating_top: number;
  
  }

const apiClient = new ApiClient<Game>("/games");
  
const useGames = (gameQuery:GameQuery) => useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => apiClient
    .getAll({params: {genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText}}),
    staleTime:24*60 *60*1000,
  });




export default useGames;