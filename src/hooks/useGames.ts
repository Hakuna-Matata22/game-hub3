import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../Services/api-client'

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
   const [isLoading, setIsLoading] = useState(false);

  
   useEffect(() => {
      const controller = new AbortController();

      setIsLoading(true)
      apiClient.get<FetchGamesResponse>("/games", { signal: controller.signal})
      .then((res) => { 
         setGames(res.data.results)
         setIsLoading(false)
      })
      .catch((err) => {
         if (err instanceof CanceledError) return;
         setError(err.message)
         setIsLoading(false)
      })

      return () => controller.abort();
   },[])

   return {games, error, isLoading}
}

export default useGames