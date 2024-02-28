import { Card } from "react-bootstrap"
import { PersonProps } from "../../definitions/models"
import { viewPerson } from "../../utils/utils"
import { useNavigate } from "react-router-dom"

export const CardTrendingComponent = ({ person }: { person: PersonProps} ) => {
    const navigate = useNavigate();
    return(
        <>  
        {person.profile_path && 
            <div onClick={() => viewPerson(person, navigate)} className="flex-shrink-0 flex-lg-shrink-1 col-lg-5">
                <Card className="trending-card bg-white">
                    <div className="d-flex gap-2 p-1">
                        <div className="col">
                            <Card.Img src={import.meta.env.VITE_IMG_URL_POSTER + person.profile_path} />
                        </div>
                        <div className="col">
                            <Card.Body className="p-0 pt-2">
                                <p className="trending-title">{person.name}</p>
                            </Card.Body>
                        </div>
                    </div>
                </Card>
            </div>
        }
        </>
    )
}