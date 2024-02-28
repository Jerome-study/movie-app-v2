import { SearchProps } from "../../definitions/models"
import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { viewPerson } from "../../utils/utils"


export const SearchResultComponent = ({ result, category }: { result: SearchProps, category: string }) => {
    const navigate = useNavigate();
    return(
        <>
            {(result?.poster_path  || result.profile_path) &&
                <div className="col-6 col-sm-4 col-lg-3 col-xl-2" onClick={() => category === "person"? viewPerson(result, navigate): console.log("view show")}>
                    <Card className="bg-dark text-white h-100 search-result-card " style={{backgroundColor: "#eee"}}>
                        <Card.Img className="h-100" src={import.meta.env.VITE_IMG_URL_POSTER + (result.poster_path || result.profile_path)} alt="Card image" />
                    </Card>
                </div>
            }
        </>
    )
}