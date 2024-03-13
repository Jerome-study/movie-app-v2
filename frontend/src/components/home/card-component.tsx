import { Card } from "react-bootstrap";
import { ShowProps } from "../../definitions/models";
import { viewShow } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CardSingleSkeleton } from "../../loading/skeletonCardSingle";

export const CardComponent = ({ movie }: { movie: ShowProps }) => {
    const navigate = useNavigate();
    const imageUrl = import.meta.env.VITE_IMG_URL_POSTER
    const [loaded, setLoaded] = useState(false)

    

    return(
        <>
           {(movie.poster_path || movie.backdrop_path) && 
                <>
                <Card.Img onLoad={() => setLoaded(true)} className="d-none" src={imageUrl + (movie.poster_path || movie.backdrop_path)}/>
               { loaded && 

                <div className="col-5 col-md-3">
                    <Card className="flex-shrink-0 shadow-sm bg-dark h-100 rounded-4" onClick={() => viewShow(movie, navigate )} >
                        <Card.Img className="shadow-sm img-fluid h-75 rounded-0 rounded-top-4 border-none" style={{ backgroundColor:"#eee"}} src={movie.poster_path? imageUrl + (movie.poster_path || movie.backdrop_path): 'corrupt.jpg'} alt="Card image"  />
                        <div className="px-2 pt-2">
                            <p style={{ fontSize: "12px"}} className="text-light text-md-center">{movie?.title || movie?.name}</p>
                        </div>
                    </Card>
                    
                </div>
                }
                {!loaded &&
                    <CardSingleSkeleton />
                }
                </>
            
           }
        </>
    )
    
}