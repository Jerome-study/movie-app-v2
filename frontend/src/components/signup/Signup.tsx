import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormComponent } from './Form';
import { AvatarComponent } from './Avatar';
import { useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

const Felix = createAvatar(adventurer, {
    seed: "Felix",
    backgroundColor: ["b6e3f4"],
    radius: 50
});

const Avatar1 = Felix.toDataUriSync();

export const SignUpComponent = () => {
    const [avatar, setAvatar] = useState<string>(Avatar1);
    return(
        <>
            <section className="d-flex position-relative justify-content-center align-items-center py-4 px-2" style={{ minHeight: "92vh", backgroundColor: "#f4f3f2"}}>
            <ToastContainer className="position-absolute" style={{ top: "0"}} />
                <div className='w-100 row g-0 shadow rounded' style={{ minHeight: "50vh", maxWidth: "50rem", fontSize: "12px"}}>
                    <div className='text-light col-12 col-md-4 gradient-custom py-5 d-flex justify-content-center align-items-cente border-0 rounded-left'>
                        <AvatarComponent avatar={avatar} setAvatar={setAvatar}/>
                    </div>
                    <div className='col-12 col-md-8'>
                        <FormComponent avatar={avatar} /> 
                    </div>
                </div>                    
            </section>
        </>
    )
}