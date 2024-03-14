import { Card } from "react-bootstrap"


export const CardSingleTrendingSkeleton = () => {
    return(
        <Card className="flex-shrink-0 col-6 col-sm-4 col-md-3 col-lg-2 rounded-5 placeholder-glow" aria-hidden="true">
            <div className="trending-card-loading bg-dark col-12 placeholder rounded-5 h-100">
            </div>
        </Card> 
    )
}