import { WatchListProps } from "../../../definitions/models";
import { useFetchBackend } from "../../../hooks/useFetch";
import { SpinnerLoading } from "../../../loading/spinner";
import { ListComponent } from "./list";

export const HeroComponent = () => {
    const { data, loading, error, refetch } = useFetchBackend(import.meta.env.VITE_API_WATCH_LIST);
    if (loading) {
        return <SpinnerLoading />
    }

    if (error) {
        return <h1>Something Went Wrong</h1>
    }
    return(
        <>
            <h1>Watch List</h1>
            <div className="row gy-4 pt-4">
                {data?.map((movie: WatchListProps) => {
                    return(
                        <ListComponent key={movie?.data?.id} movie={movie?.data} refetch={refetch} />
                    )
                })}
            </div>
            {(!data.length && !loading) && 
                <p className="text-center text-muted">You do not have any watch list!</p>
            }
        </>
    )
}