import { Spinner } from "react-bootstrap";


export const SpinnerLoading = () => {
    return(
        <div className="text-center mt-5" style={{ minHeight: "90vh"}}>
            <Spinner />
        </div>
    )
}