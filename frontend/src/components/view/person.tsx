import { Card, Spinner } from "react-bootstrap";
import { ShowProps } from "../../definitions/models";
import {Container} from "react-bootstrap";
import { viewShowReload } from "../../utils/utils";
import { Fragment, useState } from "react";
import { useContext } from "react";
import { DetailsContext } from "./main";

export const PersonDesign = () => {
    const { data } = useContext(DetailsContext);
    const [loaded, setLoaded] = useState(false);
    const [loadedShow, setLoadedShow] = useState(false);
    return(
        <div className="py-5">
            <Container>
            <div className="row">
                <div className="col-12 col-md-5 col-lg-3 details">
                    <h4 className="text-center d-md-none mb-3">{data?.name}</h4>
                    <img onLoad={() => setTimeout(() => setLoaded(true), 3000)} className="d-none" src={import.meta.env.VITE_IMG_URL_POSTER + `/${data?.profile_path}`} />
                    <div className="d-flex justify-content-center justify-content-lg-start">
                        {loaded && 
                            <img className="rounded poster-width rounded-4" src={import.meta.env.VITE_IMG_URL_POSTER + `/${data?.profile_path}`} />
                        } 
                        {!loaded && 
                            <div className="poster-loading poster-width rounded-4 bg-dark">
                                
                            </div>
                        }

                    </div>
                </div>
                <div className="col-12 col-md-7 col-lg-9 d-flex flex-column gap-1">
                    <div className="details">
                        <h4 className="text-center text-md-start d-none d-md-block">{data?.name}</h4>
                        <div className="mt-4 row gap-1">
                            <h6>Birthday: <span>{data?.birthday}</span></h6>
                            <h6>Specialty: <span>{data?.known_for_department}</span></h6>
                            <h6>Biography: <span>{data?.biography}</span></h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h4>Shows</h4>
                {!data?.known_for &&"Not Available"}
                <div className="row gy-4">
                    {data?.known_for?.map((movie: ShowProps) => {
                        return(
                            <Fragment key={movie.id}>
                                <Card.Img onLoad={() => setTimeout(() => setLoadedShow(true), 3000)} className="d-none" src={import.meta.env.VITE_IMG_URL_POSTER + movie.poster_path } />
                                <div className="col-4 col-md-3 col-lg-2" onClick={() => viewShowReload(movie)}>
                                    {movie.poster_path && 
                                        <>
                                            {loadedShow &&
                                                <Card className="bg-dark text-white h-100 search-result-card " style={{backgroundColor: "#eee"}}>
                                                    <Card.Img className="h-100" src={import.meta.env.VITE_IMG_URL_POSTER + movie.poster_path } alt="Card image" />
                                                </Card>
                                            }
                                            {!loadedShow && 
                                                <div className="mb-5">
                                                    <Spinner className="mb-3" animation="border" variant="secondary" />
                                                </div>
                                                
                                            }
                                           
                                        </>
                                    }
                                </div>
                            </Fragment>
                        )
                    })}
                </div>
            </div>
            </Container>
        </div>
    )
}