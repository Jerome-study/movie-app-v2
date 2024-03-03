import { Props, ShowProps } from "../../../definitions/models"
import { viewShowReload } from "../../../utils/utils";
import { Card } from "react-bootstrap";

export const SimilarComponent = (props: Props) => {
    const { similar } = props;
    return(
        <>
           <div className="d-flex gap-2 overflow-auto pb-5">
                {similar?.map((movie: ShowProps) => {
                    return(
                        <div key={movie.id} className="col-4 col-md-3 col-lg-2" onClick={() => viewShowReload(movie)}>
                            {movie.poster_path && 
                                <Card className="bg-dark text-white h-100 search-result-card " style={{backgroundColor: "#eee"}}>
                                    <Card.Img className="h-100" src={import.meta.env.VITE_IMG_URL_POSTER + movie.poster_path } alt="Card image" />
                                </Card>
                            }
                        </div>
                    )
                })}
           </div>
        </>
    )
}