import * as express from 'express';
import * as cors from 'cors'
//import * as path from 'path';
import apiRouter from './routes';

const app = express();

app.use(cors())
app.use(express.json());

app.use(express.static('public'));
app.use("/api", apiRouter);

// app.use('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
