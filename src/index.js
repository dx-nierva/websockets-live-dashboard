import express from 'express';
import { matchRouter } from "./routes/matches.js";

const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Live sports dashboard server is running.');
});

app.use('/matches', matchRouter);

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
