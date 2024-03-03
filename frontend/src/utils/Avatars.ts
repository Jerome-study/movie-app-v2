import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

const Felix = createAvatar(adventurer, {
    seed: "Felix",
    backgroundColor: ["b6e3f4"],
    radius: 50
});

const Abby = createAvatar(adventurer, {
    seed: "Abby",
    backgroundColor: ["d1d4f9"],
    radius: 50
});

const Ginger = createAvatar(adventurer, {
    seed: "Ginger",
    backgroundColor: ["c0aede"],
    radius: 50
});

const Cuddles = createAvatar(adventurer, {
    seed: "Cuddles",
    backgroundColor: ["ffdfbf"],
    radius: 50
});

export const Avatar1 = Felix.toDataUriSync();
export const Avatar2 = Abby.toDataUriSync();
export const Avatar3 = Ginger.toDataUriSync();
export const Avatar4 = Cuddles.toDataUriSync();