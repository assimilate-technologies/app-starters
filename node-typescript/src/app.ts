import express, { json, urlencoded } from 'express';
import { healthCheckRouter } from './routes/health-check.route';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/api/healthcheck", healthCheckRouter);

export { app };
