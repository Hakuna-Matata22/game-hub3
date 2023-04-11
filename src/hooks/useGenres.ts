import genres from '../data/genres';

export interface Genre{
   id: number;
   name: string; 
   image_background: string;
}

// const useGenres = (selectedGenre: genres | null) => useData<Genre>('/genres') ;
const useGenres = () => ({
   data: genres,
   isLoading: false,
   error: null
})


export default useGenres