import Presence from '../models/presence.model.js';

export const registerPresence = async (name, email) => {

    const presence = new Presence({ name, email });
    await presence.save();

    return presence;
};

export const getAllPresences = async () => {
    return await Presence.find();
};
