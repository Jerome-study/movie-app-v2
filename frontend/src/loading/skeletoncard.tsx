import { Spinner } from "react-bootstrap";

export const CardLoading = () => {    
    return(
        <div className="text-center py-5">  
          <div>
            <Spinner animation="grow" variant="danger" size="sm" />
            <Spinner animation="grow" variant="danger" size="sm" />
            <Spinner animation="grow" variant="danger" size="sm" />
          </div>
        </div>
    )
}