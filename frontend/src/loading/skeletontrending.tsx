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
            <div className="d-flex overflow-auto gap-1 py-4 trending-wrap trending-card-wrapper justify-content-lg-around">
                {size.map((num: any) => {
                    return(
                        <Card key={num.id} className="bg-dark col-4 col-md-3 col-lg-4 mb-4 rounded-4" aria-hidden="true">
                            <div className="trending-card-loading">
                            </div>
                        </Card> 
                    )
                })}
            </div>
            
            

        </>
    )
}