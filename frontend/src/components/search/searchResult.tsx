import { SearchProps } from "../../definitions/models"
import { Card } from "react-bootstrap"
import { viewPersonReload, viewShowReload } from "../../utils/utils"
import { useState } from "react"
import { ViewSkeleton } from "../../loading/viewSkeleton"

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
                    <Card.Img onLoad={() => setLoaded(true) }  className="d-none" src={"https://image.tmdb.org/t/p/original" + (result.poster_path || result.profile_path)}/>
                    {loaded &&
                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2 rounded-0 like-hover" onClick={() => viewResult(result, category)}>
                            <Card className={`text-white h-100 rounded-0 ${loaded && "bg-dark"}`} style={{backgroundColor: "#eee"}}>
                                <Card.Img className="h-100 rounded-0" src={"https://image.tmdb.org/t/p/original" + (result.poster_path || result.profile_path)} alt="Card image" />
                                {category === "person" &&
                                    <Card.ImgOverlay className="px-0 d-flex flex-column justify-content-end">
                                        <Card.Text style={{ fontSize: "12px" }} className="bg-dark px-0 text-center fw-bold text-capitalize">{result?.name}</Card.Text>
                                    </Card.ImgOverlay>
                                }
                            </Card>
                        </div>
                    
                    }
                    {!loaded && 
                        <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                            <ViewSkeleton />
                        </div>
                    }
                </>
            }
        </>
    )
}