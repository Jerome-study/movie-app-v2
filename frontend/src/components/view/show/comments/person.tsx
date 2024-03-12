import { useEffect, useState } from "react"
import { Button, Spinner } from "react-bootstrap";
import { instance } from "../../../../utils/utils";
import { useFetchBackend } from "../../../../hooks/useFetch";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { ContextLikeAndComment } from "../interact";
import { PersonInfoCommentProps } from "../../../../definitions/models";

export const PersonComponent = ({beingEdited, setBeingEdited, setDatas,  person }: PersonInfoCommentProps ) => {
    const { isLoggedIn, id } = useContext(ContextLikeAndComment)
    const url = isLoggedIn? import.meta.env.VITE_API_GETCOMMENTINFO + `/${person.id}` : import.meta.env.VITE_API_GETCOMMENTINFOPUBLIC + `/${person.id}`
    const { data: user, loading: userLoading } = useFetchBackend(url);
    const [editComment, setEditComment] = useState(person?.comment);
    const [loadingEdit, setLoadingEdit] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [errorEdit, setErrorEdit] = useState<any>()

    const handleClick = async (e : any) => {
        e.preventDefault();
        if (editComment === person.comment) {
           return handleCancel();
        }
        try {
            setLoadingEdit(true)
            const response = await instance.post(import.meta.env.VITE_API_EDITCOMMENT + `/${id}`, {
                editComment,
                comment_id: person?._id
            });
            setDatas(response.data?.comments);
            setBeingEdited("");
            setLoadingEdit(false)
        } catch(error : any) {
            setErrorEdit("Please refresh the page, Error")
        }
    };

    const deleteComment = async () => {
        try {
            setDeleteLoading(true);
            const response = await instance.post(import.meta.env.VITE_API_DELETECOMMENT, {
                comment_id : person._id,
                movie_id : id
            });
            if (response === null) {
                return console.log("no data")
            }
            setDatas(response.data?.comments);
            setDeleteLoading(false);
        } catch(error: any) {
            setErrorEdit("Please refresh the page, Error")
        }
    }

    const handleCancel = async () => {
        setEditComment(person?.comment);
        setBeingEdited("");
        
    }
    
    
    useEffect(() => {
        setEditComment(person.comment);
    }, [beingEdited]);

    
    return(
        <>
            <div className="card shadow-sm pt-2 px-2 mb-2">
                <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-2 align-items-center">
                            {!userLoading && 
                                <>
                                    <img width={50} src={user?.info?.avatar} alt="" />
                                    <p className="fw-bold">{user?.info?.username}</p>
                                </>
                            }
                            {userLoading && 
                                <>
                                    <div className="col-2 rounded-circle bg-dark mt-1 ps-2" style={{ width: "40px", height: "40px"}}>
                                        <span className="rounded-circle bg-dark pt-2" style={{ width: "40px", height: "40px"}}></span>
                                    </div>
                                    <p className="col-8 placeholder-glow">
                                        <span className="text-muted col-12 placeholder px-5"></span>
                                    </p>
                                </>
                                
                            }
                        </div>
                    <p className="text-muted" style={{ fontSize: "12px"}}>{person?.created_at?.split("T")[0]}</p>
                </div>
                <p>{errorEdit}</p>
                { (beingEdited === person._id)? 
                    <form onSubmit={(e) => handleClick(e)}>
                        <textarea onChange={(e) => setEditComment(e.target.value) } className="w-100 mt-2 rounded ps-4" value={editComment} rows={4}>
                        
                        </textarea>
                        <div className="my-2 d-flex gap-2">
                            <Button disabled={loadingEdit} type="submit" style={{ fontSize: "12px"}} variant="outline-success" className="ms-auto">{loadingEdit? <Spinner size="sm" /> : "Save"}</Button>
                            <Button disabled={loadingEdit} style={{ fontSize: "12px"}} variant="outline-danger" onClick={handleCancel}>Cancel</Button>
                        </div>
                    </form>
                   :

                    <p className="ms-4 mt-2">{person?.comment}</p>
                    
                }
                
                {isLoggedIn.id === person.id && 
            
                  (beingEdited !== person._id) && 
                  <div className="d-flex ms-auto gap-3" aria-disabled>
                    <p className={`${deleteLoading && "pe-none"}`} onClick={() => {setBeingEdited(person._id)}}>
                        <FaEdit size={"1.5rem"} />
                    </p> 
                    <p>
                        <MdDelete className={`${deleteLoading && "pe-none"}`} onClick={deleteComment} color="red" size={"1.8rem"} />
                    </p> 
                  </div>
                
                }                    
            </div>
            { deleteLoading && <div className="d-flex gap-2 align-items-center m-0 ">
            <Spinner size="sm"/>
            <p className="my-2">Deleting this comment...</p>
        </div>}
        </>
    )
}