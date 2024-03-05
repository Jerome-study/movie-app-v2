import { Card } from "react-bootstrap";
import { viewShowFromWatchList } from "../../../utils/utils";
import { ShowPropsWatchList } from "../../../definitions/models";
import { Button } from "react-bootstrap";
import { ButtonComponent } from "./button";
import { instance } from "../../../utils/utils";
import { useState } from "react";

export const ListComponent = ({ movie, refetch }: { movie: ShowPropsWatchList | undefined, refetch: Function }) => {
    
    const [gone, setGone] = useState(false);

    const removeShow = async () => {
        try {
            const response = await instance.delete(import.meta.env.VITE_API_REMOVEMOVIE + `/${movie?.id}`);
            setGone(true)
            if (response.data.message === 0) {
                refetch()
            }
        } catch(error) {
            
        }
    }

    return(
        <>
            {movie?.poster_path &&
            <>
                    <div className={gone ? "d-none":"col-6 col-sm-4 col-lg-3 col-xl-2"}>
                        <Card className="bg-dark text-white h-75 search-result-card" style={{backgroundColor: "#eee"}} onClick={() => viewShowFromWatchList(movie, movie?.category)}>
                            <Card.Img className="h-100" src={import.meta.env.VITE_IMG_URL_POSTER + (movie?.poster_path)} alt="Card image" />
                        </Card>
                        <div className="row gap-2 mt-1 align-items-center">
                            <div className="col-4">
                                <ButtonComponent id={movie?.id} />
                            </div>
                            <div className="col-4">
                                <Button onClick={removeShow} style={{ fontSize: "12px"}} variant="outline-danger">Remove</Button>
                            </div>
                        </div>
                    </div>
            </>   
            }
        </>
    )
}