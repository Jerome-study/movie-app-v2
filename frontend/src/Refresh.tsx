export const RefreshButton = ({ refetch } : { refetch: Function}) => {
    return(
        <>
            <div className="text-center">
                <h3 className="fw-bold">Something Went Wrong</h3>
                <p className=""> <span className="text-danger">Opps!</span>There is a disturbance</p>
                <button onClick={() => refetch()} className="btn btn-primary">Reload</button>
            </div>
        </>
    )
}