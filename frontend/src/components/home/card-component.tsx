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
           {movie.backdrop_path && 
                <>
                <Card.Img onLoad={() => setLoaded(true)}  className="d-none" src={imageUrl + movie.backdrop_path}/>
                <div className="col-8 col-sm-5 col-md-4 col-lg-3  col-xl-2 flex-shrink-0">
                    <Card className={`${loaded && "bg-dark"} grow rounded-4 border-0`} onClick={() => viewShow(movie, navigate )} >
                        {loaded &&
                        <Card.Img className="rounded-4 bg-dark border-none" style={{ backgroundColor:"#eee"}} src={movie.backdrop_path && imageUrl + movie.backdrop_path} alt="Card image"  /> 
                        }
                        {!loaded &&
                            <CardSingleSkeleton />
                        }
                    </Card> 
                    <p style={{ fontSize: "12px"}} className="mt-2 text-center fw-bold">{movie?.title || movie?.name}</p>
                </div>
                
                </>
            
           }
        </>
    )
    
}