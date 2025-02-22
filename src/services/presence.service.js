import Presence from '../models/presence.model.js';

export const registerPresence = async (name, email) => {
    try {
        if (/test|thread/i.test(name)) {
            throw new Error('Inválido.');
        }

        const presence = new Presence({ name, email });
        await presence.save();

        return presence;
    } catch (error) {
        console.error('Erro ao registrar presença:', error.message);
        throw error;
    }
};

export const getAllPresences = async () => {
    return await Presence.find();
};

export const deleteTestsPresence = async () => {
    try {
        const results = await Presence.find({ name: { $regex: /test|thread/i } });
console.log('Registros que serão deletados:', results.length);
        // Deleta todos os documentos que contenham "test" ou "thread" no campo 'name'
        await Presence.deleteMany({ 
            name: { $regex: /test|thread/i } // A regex é case-insensitive
        });
        console.log('Documentos deletados com sucesso.');
    } catch (error) {
        console.error('Erro ao deletar documentos:', error);
    }
};
