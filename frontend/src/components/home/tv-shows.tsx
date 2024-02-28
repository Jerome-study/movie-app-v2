
import { useFetchPrivate } from "../../hooks/useFetchPrivate"
import { useState } from "react";
import { TvButtonsComponent } from "./tv-buttons";
import { CardComponent } from "./card-component";
import { CardSkeleton } from "../../loading/skeletoncard";
import { ShowProps } from "../../definitions/models";

export const TvShowComponents = () => {
    const [url, setUrl] = useState<string>("popular");
    const { data, loading, error } = useFetchPrivate(`${import.meta.env.VITE_TV_URL}${url}?api_key=`);
    const setMovie = (button: any) => {
        setUrl(button.value);
    }
    
    if (error) {
        return <h1>Something Went Wrong</h1>
    }

    return(
        <>
            <div className="mt-5">
                <div className="d-flex justify-content-between mb-2">
                    <div className="">
                        <h4>TV Show</h4>
                    </div>
                     
                    <TvButtonsComponent setMovie={setMovie}/>
                    
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