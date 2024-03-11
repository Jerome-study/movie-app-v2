import { useState } from "react";
import { OffcanvasComponent } from "./offcanvas";
import { instance } from "../../../../utils/utils";
import { useContext } from "react";
import { ContextLikeAndComment } from "../interact";
import { PersonCommentProps } from "../../../../definitions/models";

export const CommentComponent = () => {
    const { data, isLoggedIn, id} = useContext(ContextLikeAndComment)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [datas, setDatas] = useState<[PersonCommentProps] | undefined>(data?.comments);
    const [disable, setDisable] = useState(false);
    const [loadingComment, setLoadingComment] = useState(false);
    const [errorComment, setErrorComment] = useState<any>()
    
    const handleClick = async (e: any, comment : string) => {
        e.preventDefault();
        
        if (!isLoggedIn) {
            return alert("you must be logged in first");
        }
        
        if (!comment) {
            return alert("Dont leave blank")
        }

        try {
            setDisable(true)
            setLoadingComment(true)
            const response = await instance.post(import.meta.env.VITE_API_POSTCOMMENT + `/${id}`, {
                comment
            });
            
            setDatas(response.data?.comments);
            setDisable(false);
            setLoadingComment(false)
            
        } catch(error: any) {
            setErrorComment("Something went wrong, please refresh")
            console.log(error.response.data);
        }
        
    }

    return(
        <>
            <div onClick={handleShow}>Comment</div>
            {errorComment && errorComment}
            <OffcanvasComponent setDatas={setDatas} id={id} loadingComment={loadingComment} disable={disable} data={datas} show={show} handleClose={handleClose} handleClick={handleClick} isLoggedIn={isLoggedIn}/>
        </>
    )    
};