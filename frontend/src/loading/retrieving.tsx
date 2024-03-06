import { Spinner } from "react-bootstrap"


export const RetrievingLoading = () => {
    return(
        <div className="text-center mt-5" style={{ minHeight: "90vh"}}>
            <Spinner />
            <p>Retrieving Data</p>
        </div>
    )

}