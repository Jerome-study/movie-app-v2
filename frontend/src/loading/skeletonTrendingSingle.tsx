import { Card } from "react-bootstrap"


export const CardSingleTrendingSkeleton = () => {
    return(
        <Card className="flex-shrink-0 flex-lg-shrink-1 col-lg-5 bg-dark" aria-hidden="true">
            <div className="trending-card-loading">
                
            </div>
        </Card> 
    )
}