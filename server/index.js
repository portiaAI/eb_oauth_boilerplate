import express, { json } from 'express';
const app = express();

const PORT = process.env.PORT || 6001;

app.use(json({ extended: false }));

app.get('/api/oauth', (req, res) => {
    try {
        // Backend Oauth Logic Here
    } catch (err) {
        res.status(500).json({error: err.message });
    }
});

const startUp = async () => {

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

startUp()

