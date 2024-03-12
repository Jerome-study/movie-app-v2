import { Card } from "react-bootstrap"


export const TrendingCardSkeleton = () => {
    const size = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
    ];
    return(
        <>  
            <div className="d-flex gap-4 trending-wrap overflow-auto py-3 justify-content-lg-center trending-card-wrapper">
                {size.map((num: any) => {
                    return(
                        <Card key={num.id} className="flex-shrink-0 flex-lg-shrink-1 col-lg-5 bg-dark" aria-hidden="true">
                            <div className="trending-card-loading">
                            </div>
                        </Card> 
                    )
                })}
            </div>
            
            

        </>
    )
}