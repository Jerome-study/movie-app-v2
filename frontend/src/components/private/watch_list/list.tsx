import { Card } from "react-bootstrap";
import { viewShowFromWatchList } from "../../../utils/utils";
import { ShowPropsWatchList } from "../../../definitions/models";
import { useState } from "react";
import { ButtonComponent } from "./button";

export const ListComponent = ({ movie, refetch }: { movie: ShowPropsWatchList | undefined, refetch: Function }) => {
    const [gone, setGone] = useState(false);
    return(
        <>
            {movie?.poster_path &&
            <>
                    <div className={gone ? "d-none":"col-6 col-sm-4 col-lg-3 col-xl-2"}>
                        <Card className="bg-dark text-white h-75 search-result-card" style={{backgroundColor: "#eee"}} onClick={() => viewShowFromWatchList(movie, movie?.category)}>
                            <Card.Img className="h-100" src={import.meta.env.VITE_IMG_URL_POSTER + (movie?.poster_path)} alt="Card image" />
                        </Card>
                        <ButtonComponent id={movie.id} refetch={refetch} setGone={setGone} />
                    </div>
            </>   
            }
        </>
    )
}