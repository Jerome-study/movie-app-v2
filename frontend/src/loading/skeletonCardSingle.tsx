import { Card } from "react-bootstrap"


export const CardSingleSkeleton = () => {
    // Flex shrink added
    return(
        <Card className="flex-shrink-0 shadow-sm rounded-3 p-1" aria-hidden="true">
            <div className="card-loading-height border rounded-3 " style={{ width: "11.5rem", backgroundColor:"#eee" }}>
                
            </div>
        </Card> 
    )
}