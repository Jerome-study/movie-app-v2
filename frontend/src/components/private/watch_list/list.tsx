import { Card } from "react-bootstrap";
import { viewShowFromWatchList } from "../../../utils/utils";
import { ShowPropsWatchList } from "../../../definitions/models";
import { useState } from "react";
import { ButtonComponent } from "./button";
import { ViewSkeleton } from "../../../loading/viewSkeleton";


export const ListComponent = ({ movie, refetch }: { movie: ShowPropsWatchList | undefined, refetch: Function }) => {
    const [gone, setGone] = useState(false);
    const [loaded, setLoaded] = useState(false);
    return(
        <>  
            {movie?.poster_path &&
            <>
                    <Card.Img onLoad={() => setLoaded(true)} className="d-none" src={import.meta.env.VITE_IMG_URL_POSTER + (movie?.poster_path)}/>
                    <div className={gone ? "d-none":"col-6 col-sm-4 col-lg-3 col-xl-2"}>
                    {loaded && 
                        <Card className="bg-dark text-white  search-result-card" style={{backgroundColor: "#eee"}} onClick={() => viewShowFromWatchList(movie, movie?.category)}>
                            <Card.Img className="h-100" src={import.meta.env.VITE_IMG_URL_POSTER + (movie?.poster_path)} alt="Card image" />
                            <Card.ImgOverlay className="px-0 d-flex flex-column justify-content-end">
                                <Card.Text className="bg-primary px-0 text-center fw-bold text-capitalize">{movie?.category}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    
                    }
                    {!loaded && 
                         <ViewSkeleton />
                    }
                    <ButtonComponent id={movie.id} refetch={refetch} setGone={setGone} />
                    </div>
            </>   
            }
        </>
    )
}