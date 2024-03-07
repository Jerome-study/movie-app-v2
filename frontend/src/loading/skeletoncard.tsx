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
                        <Card key={num.id} className="flex-shrink-0 shadow-sm rounded-3 p-1" aria-hidden="true">
                            <div className="card-loading-height border rounded-3" style={{ width: "12rem", backgroundColor:"#eee" }}>
                                        
                            </div>
                        </Card> 
                    )
                })}
            </div>
            
            

        </>
    )
}