import { SearchProps } from "../../definitions/models"
import { Card, Spinner } from "react-bootstrap"
import { viewPersonReload, viewShowReload } from "../../utils/utils"
import { useState } from "react"


const viewResult = (result: SearchProps, category: string) => {
    if (category === "person") {
        viewPersonReload(result)
    } else {
        viewShowReload(result)
    }
}

export const SearchResultComponent = ({ result, category }: { result: SearchProps, category: string }) => {
    const [loaded, setLoaded] = useState(false)

    return(
        <>
            {(result?.poster_path  || result.profile_path) &&
                <>
                    <Card.Img onLoad={() => setLoaded(true)}  className="d-none" src={import.meta.env.VITE_IMG_URL_POSTER + (result.poster_path || result.profile_path)}/>
                    {loaded &&
                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2" onClick={() => viewResult(result, category)}>
                            <Card className="bg-dark text-white h-100 search-result-card " style={{backgroundColor: "#eee"}}>
                                <Card.Img className="h-100" src={import.meta.env.VITE_IMG_URL_POSTER + (result.poster_path || result.profile_path)} alt="Card image" />
                            </Card>
                        </div>
                    
                    }
                    {!loaded && 
                        <Spinner />
                        
                    }
                </>
            }
        </>
    )
}