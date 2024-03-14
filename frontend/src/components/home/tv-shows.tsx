
import { useFetchPrivate } from "../../hooks/useFetchPrivate"
import { useState } from "react";
import { TvButtonsComponent } from "./tv-buttons";
import { CardComponent } from "./card-component";
import { CardLoading } from "../../loading/skeletoncard";
import { ShowProps } from "../../definitions/models";
import { RefreshButton } from "../../Refresh";

export const TvShowComponents = () => {
    const [url, setUrl] = useState<string>("popular");
    const { data, loading, error, refetch } = useFetchPrivate(`${import.meta.env.VITE_TV_URL}${url}?api_key=`);
    const setMovie = (button: any) => {
        setUrl(button.value);
    }
    
    if (error) {
        return <RefreshButton refetch={refetch} />
    }

    return(
        <>
            <div className="mt-3">
                <div className="d-flex justify-content-between mb-2 gap-2">
                    <div>
                        <h4 className="fw-bold">TV Show</h4>
                    </div>
                    <TvButtonsComponent setMovie={setMovie}/>
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