import { Card } from "react-bootstrap"


export const CardSingleSkeleton = () => {
    return(
        <Card className="col-5 col-md-3 flex-shrink-0 bg-dark rounded-4" aria-hidden="true">
            <div className="card-loading-height rounded-3" style={{ width: "12rem"}}>
                                        
            </div>
        </Card> 
    )
}