import express from 'express';

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
