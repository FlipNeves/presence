import express from 'express';
import { registerPresence, getAllPresences, deleteTestsPresence } from '../services/presence.service.js';

const presenceRouter = express.Router();

presenceRouter.post('/', async (req, res) => {
    try {
        const { name, email } = req.body;
        const presence = await registerPresence(name, email);
        res.status(201).json(presence);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


presenceRouter.get('/', async (req, res) => {
    try {
        const presences = await getAllPresences();
        res.status(200).json(presences);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

presenceRouter.delete('/', async (req, res) => {
    try {
        await deleteTestsPresence();
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default presenceRouter;
