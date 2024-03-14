import { Spinner } from "react-bootstrap";

export const CardLoading = () => {    
    return(
        <div className="text-center pb-5">  
          <div className="my-5 py-3">
            <Spinner animation="grow" variant="danger" size="sm"  />
            <Spinner animation="grow" variant="danger"  size="sm" />
            <Spinner animation="grow" variant="danger"  size="sm" />
          </div>
        </div>
    )
}