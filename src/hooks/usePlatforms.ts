import platforms from "../data/platforms";

interface Platform {

    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => ({data:platforms, isLoading: false, isError: false});

export default usePlatforms;