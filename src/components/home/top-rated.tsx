import { useFetchPrivate } from "../../hooks/useFetchPrivate"
import { CardComponent } from "./card-component";
import { CardSkeleton } from "../../loading/skeletoncard";
import { ShowProps } from "../../definitions/models";

export const TopRatedComponent = () => {
    const { data, loading, error } = useFetchPrivate(`${import.meta.env.VITE_TOP_RATED_URL}?api_key=`);
    if (error) {
        return <h1>Something Went Wrong</h1>
    }
    
    return(
        <>
            <div className="mt-5">
                <div className="d-flex justify-content-between mb-2">
                    <div className="">
                        <h4>Top Rated Movies</h4>
                    </div>
                </div>
                {loading && <CardSkeleton />}
                {!loading && 
                    <div className="d-flex overflow-auto gap-2 py-4 border-top">
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