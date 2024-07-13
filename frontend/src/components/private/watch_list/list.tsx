import { Card } from "react-bootstrap";
import { viewShowFromWatchList } from "../../../utils/utils";
import { ShowPropsWatchList } from "../../../definitions/models";
import { useState } from "react";
import { ButtonComponent } from "./button";
import { ViewSkeleton } from "../../../loading/viewSkeleton";
import { FaClipboardList } from "react-icons/fa";

export const ListComponent = ({ movie, refetch }: { movie: ShowPropsWatchList | undefined, refetch: Function }) => {
    const [gone, setGone] = useState(false);
    const [loaded, setLoaded] = useState(false);
    return(
        <>  
            {movie?.poster_path &&
            <>
                    <Card.Img onLoad={() => setLoaded(true)} className="d-none" src={"https://image.tmdb.org/t/p/original" + (movie?.poster_path)}/>
                    <div className={gone ? "d-none":"col-6 col-sm-4 col-lg-3 col-xl-2"}>
                    {loaded && 
                        <Card className="bg-dark text-white search-result-card rounded-0 position-relative h-100" style={{backgroundColor: "#eee"}} >
                            <Card.Img onClick={() => viewShowFromWatchList(movie, movie?.category)} className="h-100 rounded-0" src={"https://image.tmdb.org/t/p/original" + (movie?.poster_path)} alt="Card image" />
                            <div className="position-absolute ms-2 my-2 p-1 rounded-circle bg-warning z-3 like-hover dropdown" style={{ top: "0", left: "0"}}>
                                <FaClipboardList size={"1.5rem"} color="black" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"/>
                                <div className="dropdown-menu mt-2 bg-dark text-light">
                                    <ButtonComponent id={movie.id} refetch={refetch} setGone={setGone} />
                                </div>
                            </div>
                            <Card.ImgOverlay className="px-0 d-flex flex-column justify-content-end pe-none">
                                <Card.Text className="bg-warning px-0 text-center fw-bold text-capitalize text-dark">{movie?.category}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    
                    }
                    {!loaded && 
                         <ViewSkeleton />
                    }
                    </div>
            </>   
            }
        </>
    )
}