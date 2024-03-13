import { Card } from "react-bootstrap"


export const CardSingleTrendingSkeleton = () => {
    return(
        <Card className="bg-dark col-4 col-md-3 col-lg-4 mb-4 rounded-4" aria-hidden="true">
            <div className="trending-card-loading">
            </div>
        </Card> 
    )
}