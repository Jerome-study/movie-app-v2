import { useEffect, useState } from "react";
import { OffcanvasComponent } from "./offcanvas";
import { instance } from "../../../../utils/utils";
import { useContext } from "react";
import { ContextLikeAndComment } from "../interact";
import { PersonCommentProps } from "../../../../definitions/models";
import { FaComment } from "react-icons/fa";


export const CommentComponent = () => {
    const { data, isLoggedIn, id } = useContext(ContextLikeAndComment)
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

    useEffect(() => {
        setDatas(data?.comments)
    }, [data]);

    return(
        <>
            <div className="bg-dark px-2 py-1 rounded-3 " data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <FaComment color="white" size={"2rem"} />
            </div>
            {errorComment && errorComment}
            <OffcanvasComponent setDatas={setDatas} loadingComment={loadingComment} disable={disable} data={datas} handleClick={handleClick} />
        </>
    )    
};