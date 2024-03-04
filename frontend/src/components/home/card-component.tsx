import { Card } from "react-bootstrap"
import { ShowProps } from "../../definitions/models"
import { viewShow } from "../../utils/utils"
import { useNavigate } from "react-router-dom"

export const CardComponent = ({ movie }: { movie: ShowProps }) => {
    const navigate = useNavigate();
    const imageUrl = import.meta.env.VITE_IMG_URL_POSTER
    return(
        <>
           {(movie.poster_path || movie.backdrop_path) && 
                <Card className="flex-shrink-0 border shadow-sm p-1 card-width" onClick={() => viewShow(movie, navigate )} >
                    <Card.Img className="rounded-0 rounded-top shadow-sm h-75 bg-dark" src={movie.poster_path? imageUrl + (movie.poster_path || movie.backdrop_path): 'corrupt.jpg'} alt="Card image"  />
                    <Card.Body className="pt-2 ps-2">
                        <p className="" >{movie.title? movie.title : movie.name}</p>
                    </Card.Body>
                </Card>
           }
        </>
    )
    
}