import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import axios from '../Services/api-client'

export interface FetchGamesResponse {
   count: number;
   results: Games[];
 }

 export interface Games {
   id: number;
   name: string;
   background_image: string;
   parent_platforms: { platform : Platform }[];
   metacritic: number;
 }

export interface Platform{
   id: number;
   name: string;
   slug: string;
}

function useGames() {
   const [games, setGames] = useState<Games[]>([]);
   const [error, setError] = useState("");
 
   useEffect(() => {
      const controller = new AbortController();

      axios.get<FetchGamesResponse>("/games", { signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
         if (err instanceof CanceledError) return;
         setError(err.message)
      });
          

      return () => controller.abort();
   },[])

   return {games, error}
}

export default useGames