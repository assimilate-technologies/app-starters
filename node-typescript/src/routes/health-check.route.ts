import express from 'express';

const router = express.Router();

router.get('/ping', (_req, res) => {
    res.send({ message: "Pong" });
});

export { router as healthCheckRouter };
