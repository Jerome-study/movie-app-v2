import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { PersonComponent } from "./person";
import { CommentCreateLoading } from "../../../../loading/commentLoading";
import { UserProps } from "../../../../definitions/models";


export const OffcanvasComponent = ({loading, setDatas, id, loadingComment, data, handleClick, disable, isLoggedIn }: 
    {loading: boolean, setDatas: Function, id : number, loadingComment:boolean, data: any, handleClick: (e: any, comment: string) => void, disable: boolean, isLoggedIn: UserProps }
    ) => {
    const [comment, setComment] = useState("")
    const [beingEdited, setBeingEdited] = useState<string | null>("");

    return(
        <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Comments</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            <form onSubmit={(e) =>{ handleClick(e, comment ), setComment("")} } className="d-flex gap-2 justify-content-between align-items-center" >
                    <div className="">
                        <input disabled={disable} value={comment} onChange={(e) => setComment(e.target.value)} className="form-control border-3 " placeholder="write something...." />
                    </div>
                    <div className="">
                        <Button disabled={disable} type="submit" variant="dark">Send</Button>
                    </div>
                </form>
               {!loading && 
                <>
                    {!data?.length && 
                        <p className="text-muted mt-5 text-center">There are no comments</p>
                    }
                    <div className="mt-4">
                        {loadingComment && <CommentCreateLoading />}
                        {data?.map((person : any) => {
                            return(
                                <PersonComponent key={person._id} beingEdited={beingEdited} setBeingEdited={setBeingEdited} setDatas={setDatas} id={id} person={person} isLoggedIn={isLoggedIn} />
                            )
                        })}
                    </div>
                </>
               }
               {loading && 
                <div className="mt-5 text-center">
                    <Spinner animation="border" variant="danger" size="sm" />
                </div>
               }
                
            </div>
        </div>
    )
}


