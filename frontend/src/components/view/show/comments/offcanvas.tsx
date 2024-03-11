import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { PersonComponent } from "./person";
import { CommentCreateLoading } from "../../../../loading/commentLoading";
import { UserProps } from "../../../../definitions/models";


export const OffcanvasComponent = ({setDatas, id, loadingComment, show, handleClose, data, handleClick, disable, isLoggedIn }: 
    { setDatas: Function, id : number, loadingComment:boolean, show: Boolean, handleClose: Function, data: any, handleClick: (e: any, comment: string) => void, disable: boolean, isLoggedIn: UserProps }
    ) => {
    const [comment, setComment] = useState("")
    const [beingEdited, setBeingEdited] = useState<string | null>("");

    return(
        <Offcanvas show={show} onHide={handleClose} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><h2>Comments</h2></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="pb-5">
                <form onSubmit={(e) =>{ handleClick(e, comment ), setComment("")} } className="d-flex gap-2 justify-content-between align-items-center" >
                    <div className="">
                        <input disabled={disable} value={comment} onChange={(e) => setComment(e.target.value)} className="form-control border-3 " placeholder="write something...." />
                    </div>
                    <div className="">
                        <Button disabled={disable} type="submit" variant="dark">Send</Button>
                    </div>
                </form>
                
                {!data?.length && 
                    <p className="text-muted">There are no comments</p>
                }
                <div className="mt-4">
                    {loadingComment && <CommentCreateLoading />}
                    {data?.map((person : any) => {
                        return(
                            <>
                                <PersonComponent beingEdited={beingEdited} setBeingEdited={setBeingEdited} setDatas={setDatas} id={id} person={person} isLoggedIn={isLoggedIn} />
                            </>
                        )
                    })}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}