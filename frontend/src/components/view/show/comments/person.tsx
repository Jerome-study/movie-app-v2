import { useEffect, useState } from "react"
import { Button, Spinner } from "react-bootstrap";
import { instance } from "../../../../utils/utils";

export const PersonComponent = ({beingEdited, setBeingEdited, setDatas,  person, isLoggedIn, id }: {beingEdited : any, setBeingEdited: any, setDatas: any, person : any, isLoggedIn: any, id: number}) => {
    const [editComment, setEditComment] = useState(person?.comment);
    const [loadingEdit, setLoadingEdit] = useState(false);
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
            console.log(error.response.data)
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
            <div className="card shadow-sm pt-2 px-2 mb-4">
                <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-2 align-items-center">
                        <img width={50} src={person?.avatar} alt="" />
                        <p className="fw-bold">{person?.username}</p>
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
            
                  (beingEdited !== person._id) &&  <p onClick={() => {setBeingEdited(person._id)}} className="ms-auto">edit</p> 
                
                }
                                    
            </div>
        </>
    )
}