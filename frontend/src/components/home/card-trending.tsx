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
                    <div onClick={() => viewPerson(person, navigate)} className="card bg-dark col-4 col-md-3 col-lg-4 mb-4 rounded-4">
                        <Card className="bg-dark text-white h-100 rounded-4" style={{backgroundColor: "#eee"}}>
                            <Card.Img className="h-100 rounded-4" src={imageUrl} alt="Card image" />
                            <Card.ImgOverlay className="px-0 d-flex flex-column justify-content-end">
                                <Card.Text style={{ fontSize: "10px" }} className="text-center bg-dark py-1 text-capitalize">{person?.name}</Card.Text>
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