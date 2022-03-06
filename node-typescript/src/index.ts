import { app } from './app';

const PORT = process.env.PORT || 9000;

const start = async () => {
    app.listen(PORT, () => {
        console.log(`Service listening on PORT: ${PORT}`);
    });
};

start();
