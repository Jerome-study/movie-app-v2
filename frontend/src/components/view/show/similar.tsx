import { Fragment } from "react";
import { Props, ShowProps } from "../../../definitions/models"
import { viewShowReload } from "../../../utils/utils";
import { Card } from "react-bootstrap";
import { useState } from "react";

export const SimilarComponent = (props: Props) => {
    const { similar } = props;
    const [loaded, setLoaded] = useState(false)
    return(
        <>
           <div className="d-flex gap-2 overflow-auto pb-5">
                {similar?.map((movie: ShowProps) => {
                    return(
                        <Fragment key={movie.id}>
                            {movie.poster_path && 
                                <>
                                    <Card.Img onLoad={() => setLoaded(true)} className="d-none" src={import.meta.env.VITE_IMG_URL_POSTER + movie.poster_path }/>
                                    <div className="col-4 col-md-3 col-lg-1" onClick={() => viewShowReload(movie)}>
                                    {loaded && 
                                        <Card className="bg-dark text-white h-100 search-result-card " style={{backgroundColor: "#eee"}}>
                                            <Card.Img className="h-100" src={import.meta.env.VITE_IMG_URL_POSTER + movie.poster_path } alt={`${movie?.name || movie?.title}`} />
                                        </Card>
                                    }
                                    {!loaded && 
                                        <div className="show-onload bg-dark rounded-3">

                                        </div>
                                    }
                                </div>
                                </>
                            }
                        </Fragment>
                        

                    )
                })}
           </div>
        </>
    )
}