import { Avatar1, Avatar2, Avatar3, Avatar4 } from "../../utils/Avatars"

export const AvatarComponent = ({ avatar, setAvatar }: any) => {
    return(
        <>
            <div>
                <h1 className='text-center'>Avatar</h1>
                <div className='p-2'>
                    <img src={avatar} alt="avatar" className='mb-5' />
                    <select className="form-select form-select-lg select-section bg-transparent" defaultValue={Avatar1} aria-label=".form-select-lg example" onChange={(e) => setAvatar(e.target.value) }>
                        <option value={Avatar1}>Avatar 1</option>
                        <option value={Avatar2}>Avatar 2</option>
                        <option value={Avatar3}>Avatar 3</option>
                        <option value={Avatar4}>Avatar 4</option>
                    </select>
                </div>
            </div>
        
        </>
    )
}