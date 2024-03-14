import { useFetchPrivate } from "../../hooks/useFetchPrivate"
import { CardComponent } from "./card-component";
import { CardLoading } from "../../loading/loadingSpinner";
import { ShowProps } from "../../definitions/models";
import { RefreshButton } from "../../Refresh";

export const PopularComponent = () => {
    const { data, loading, error, refetch } = useFetchPrivate(`${import.meta.env.VITE_POPULAR_URL}?api_key=`);

    if (error) {
        return <RefreshButton refetch={refetch} />
    }

    return(
        <>
            <div className="mt-3">
                <div className="mb-2">
                    <div>
                        <h4 className="fw-bold">Popular Movies</h4>
                    </div>
                </div>
                {loading && <CardLoading />}
                {!loading && 
                    <div className="d-flex overflow-auto gap-3 pt-2 px-2">
                        {data?.results?.map((movie: ShowProps) => {
                            return(
                                <CardComponent key={movie.id} movie={movie}/>  
                            )
                        })}
                    </div> 
                }
            </div>
        </>
    )
    
}