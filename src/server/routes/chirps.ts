import * as express from "express";
//import { GetChirps, GetChirp, UpdateChirp, CreateChirp, DeleteChirp } from "../utils/chirpstore";
import db from '../db';

let router = express.Router();

router.use('/', async (req, res) => {
    try {
        res.json(await db.Chirpr.all());
    } catch(e) { 
        console.log(e);
        res.sendStatus(500);
    }
});


// router.get('/:id?', (req, res) => {

//     let id: string = req.params.id
//     if (id) {
//         res.json(GetChirp(id));
//     } else {
//         const chirps = GetChirps();
//         let chirpArr: chirp[] = []

//         Object.keys(chirps).map(key => chirpArr.push(
//         { id: key, 
//             user: chirps[key].user, 
//             message: chirps[key].message 
//         }
//         ));
        
//         chirpArr.pop(); //eliminate the nextid property

//         res.json(chirpArr);
//     }
// });

// //post chirp
// router.post('/', (req, res) => {
//     const chirpObj: chirp = req.body;

//     CreateChirp(chirpObj);
//     res.sendStatus(200);
// });

// //this will update a chirp
// //mandatory id param to tell the server which chirp to update
// router.put('/:id', (req, res) => {
//     const id: string = req.params.id;
//     const chirpObj: chirp = req.body;

//     UpdateChirp(id, chirpObj);
//     res.send("edited successfully");

// });

// //delete chirp
// router.delete('/:id', (req, res) => {
//     const id: string = req.params.id;

//     DeleteChirp(id);
//     res.send("deleted successfully");
// });

interface chirp {
    id?: string, //question mark means the id is an optional property
    user: string,
    message: string
}

export default router;