import { Card } from "react-bootstrap"
import { viewPersonReload } from "../../../utils/utils"
import { Props } from "../../../definitions/models"
import { useState } from "react";

export const CastComponent = (props: Props) => {
    const { cast } = props;
    const [loaded, setLoaded] = useState(false)
    return(
        <>
            <h3>Cast</h3>
            <div className="d-flex gap-3 overflow-auto py-2">
                {cast?.map((person) => {
                    return(
                        <div key={person.id} className="col-3 col-lg-4 col-xl-3 flex-shrink-0 ">
                            <Card.Img onLoad={() => setLoaded(true)} className="d-none" src={person.profile_path &&  import.meta.env.VITE_IMG_URL_POSTER + person?.profile_path || "/corrupt.jpg"} />
                            {loaded &&
                                <Card className="border mb-2  border-1" onClick={() => viewPersonReload(person)}>
                                    <Card.Img className="h-100" variant="top" src={person.profile_path &&  import.meta.env.VITE_IMG_URL_POSTER + person?.profile_path || "/corrupt.jpg"} />
                                </Card>
                            }
                            {!loaded &&
                                <div className="person-onload bg-dark rounded-3 mb-2 me-5">

                                </div>
                            } 
                            <p className="text-center" style={{ fontSize: "8.5px"}}>{person.name}</p>
                        </div>
                    )
                })}
             </div>
        </>   
    )
}