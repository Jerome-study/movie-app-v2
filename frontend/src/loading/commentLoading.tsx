import { Spinner } from "react-bootstrap";


export const CommentCreateLoading = () => {
    return(
        <div className="d-flex gap-2 align-items-center">
            <Spinner size="sm"/>
            <p className="my-2">Creating your comment...</p>
        </div>
    )
}