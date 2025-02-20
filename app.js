import express from 'express';
import { PORT } from './config/env.js';

const app = express();

import presenceRouter from './src/routes/presence.routes.js';
import connectToDatabase from './database/mongodb.js';

app.use(express.json());

app.use('/presence', presenceRouter);

app.listen(PORT, async ()  => {
    console.log(`Server is running on port ${PORT}`);

    await connectToDatabase();
});

export default app;
