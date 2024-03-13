import { Card } from "react-bootstrap"


export const CardSkeleton = () => {
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
            <div className="d-flex gap-2 overflow-auto py-4 border-top">
                {size.map((num: any) => {
                    return(
                        <Card key={num.id} className="col-5 col-md-3 flex-shrink-0 bg-dark rounded-4" aria-hidden="true">
                            <div className="card-loading-height rounded-3" style={{ width: "12rem"}}>
                                        
                            </div>
                        </Card> 

                    )
                })}
            </div>
            
            

        </>
    )
}