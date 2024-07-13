import { WatchListProps } from "../../../definitions/models";
import { useFetchBackend } from "../../../hooks/useFetch";
import { SpinnerLoading } from "../../../loading/spinner";
import { ListComponent } from "./list";
import { RefreshButton } from "../../../Refresh";

export const HeroComponent = () => {
    const { data, loading, error, refetch } = useFetchBackend("/api/getWatchList");
    if (loading) {
        return <SpinnerLoading />
    }

    if (error) {
        return <>
            <div style={{ minHeight: "90vh"}}>
                <RefreshButton refetch={refetch} />
            </div>
        </>
    }
    return(
        <>
            <h1 className="text-center">Watch List</h1>
            <div className="row mt-5 gx-0">
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