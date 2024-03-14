import { PersonProps } from "../../definitions/models"
import { viewPerson } from "../../utils/utils"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { CardSingleTrendingSkeleton } from "../../loading/skeletonTrendingSingle"
import { Card } from "react-bootstrap"

export const CardTrendingComponent = ({ person }: { person: PersonProps} ) => {
    const navigate = useNavigate();
    const imageUrl = import.meta.env.VITE_IMG_URL_POSTER + person.profile_path
    const [loaded, setLoaded] = useState(false);


    return(
        <>  
        {person.profile_path && 
            <>
                <img src={imageUrl} onLoad={() => setLoaded(true)}className="d-none" style={{ backgroundColor:"#eee"}} />
                {loaded && 
                    <div className="flex-shrink-0 col-6 col-sm-4 col-md-3 col-lg-2" onClick={() => viewPerson(person, navigate)}>
                        <Card className="bg-dark rounded-5 grow h-100" style={{backgroundColor: "#eee"}}>
                            <Card.Img className="rounded-5" src={imageUrl} alt="Card image" />
                            <Card.ImgOverlay className="px-0 align-items-center d-flex flex-column justify-content-end">
                                <Card.Text style={{ fontSize: "11px"}} className="w-100 rounded-5 bg-light text-dark px-0 text-center fw-bold text-capitalize">{person?.name}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                }
                {!loaded && 
                    <CardSingleTrendingSkeleton />
                } 
            </>

        }
        </>
    )
}