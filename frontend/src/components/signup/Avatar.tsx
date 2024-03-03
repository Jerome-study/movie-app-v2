import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

const Felix = createAvatar(adventurer, {
    seed: "Felix"
});

const Abby = createAvatar(adventurer, {
    seed: "Abby"
});

const Ginger = createAvatar(adventurer, {
    seed: "Ginger"
});

const Cuddles = createAvatar(adventurer, {
    seed: "Cuddles"
});

const Avatar1 = Felix.toDataUriSync();
const Avatar2 = Abby.toDataUriSync();
const Avatar3 = Ginger.toDataUriSync();
const Avatar4 = Cuddles.toDataUriSync();

export const AvatarComponent = ({ avatar, setAvatar }: any) => {
    return(
        <>
            <div>
                <h1 className='text-center'>Avatar</h1>
                <div className='p-2'>
                    <img src={avatar} alt="" />
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