import { useFetchPrivate } from "../../hooks/useFetchPrivate"
import { CardComponent } from "./card-component";
import { CardSkeleton } from "../../loading/skeletoncard";
import { ShowProps } from "../../definitions/models";

export const PopularComponent = () => {
    const { data, loading, error } = useFetchPrivate(`${import.meta.env.VITE_POPULAR_URL}?api_key=`);

    if (error) {
        return <h1>Something Went Wrong</h1>
    }

    return(
        <>
            <div className="mt-5">
                <div className="d-flex justify-content-between mb-2">
                    <div>
                        <h4>Popular Movies</h4>
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