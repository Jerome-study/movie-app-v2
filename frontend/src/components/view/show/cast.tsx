import { Card } from "react-bootstrap"
import { viewPerson } from "../../../utils/utils"
import { useNavigate } from "react-router-dom"
import { Props } from "../../../definitions/models"

export const CastComponent = (props: Props) => {
    const { cast } = props;
    const navigate = useNavigate();
    return(
        <>
            <h3>Cast</h3>
            <div className="d-flex gap-3 overflow-auto py-2">
                {cast?.map((person) => {
                    return(
                        <div key={person.id} className="col-3 col-lg-4 col-xl-3 flex-shrink-0 ">
                            <Card className="border mb-2  border-1" onClick={() => viewPerson(person, navigate)}>
                                <Card.Img className="h-100" variant="top" src={person.profile_path &&  import.meta.env.VITE_IMG_URL_POSTER + person?.profile_path || "/corrupt.jpg"} />
                            </Card>
                            <p className="text-center" style={{ fontSize: "8.5px"}}>{person.name}</p>
                        </div>
                    )
                })}
             </div>
        </>   
    )
}