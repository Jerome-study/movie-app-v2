import { useFetchPrivate } from "../../hooks/useFetchPrivate"
import { CardComponent } from "./card-component";
import { CardLoading } from "../../loading/loadingSpinner";
import { ShowProps } from "../../definitions/models";
import { RefreshButton } from "../../Refresh";

export const TopRatedComponent = () => {
    const { data, loading, error, refetch } = useFetchPrivate(`https://api.themoviedb.org/3/movie/top_rated?api_key=`);

    if (error) {
        return <RefreshButton refetch={refetch} />
    }
    
    return(
        <>
            <div className="mt-5">
                <div className="mb-2">
                    <div>
                        <h4 className="fw-bold">Top Rated Movies</h4>
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