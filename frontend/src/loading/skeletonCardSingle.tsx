import { Card } from "react-bootstrap"


export const CardSingleSkeleton = () => {
    return(
        <Card className="flex-shrink-0 shadow-sm rounded-3" aria-hidden="true">
            <div className="card-loading-height border rounded-3 bg-dark" style={{ width: "12rem"}}>
                                        
            </div>
        </Card> 
    )
}