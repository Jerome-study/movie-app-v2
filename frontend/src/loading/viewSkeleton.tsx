import { Card } from "react-bootstrap"

export const ViewSkeleton = () => {
    return(
        <Card className="rounded-0 placeholder-glow">
            <div className="view-loading placeholder col-12 bg-dark">

            </div>
        </Card>
    )
}