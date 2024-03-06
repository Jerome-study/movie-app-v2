import { Card } from "react-bootstrap"


export const CardSingleTrendingSkeleton = () => {
    return(
        <Card className="flex-shrink-0 flex-lg-shrink-1 col-lg-5 p-1 bg-white" aria-hidden="true">
            <div className="trending-card-loading" style={{ background: "#eee"}}>
                
            </div>
        </Card> 
    )
}