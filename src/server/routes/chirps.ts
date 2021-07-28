import * as express from "express";
//import { GetChirps, GetChirp, UpdateChirp, CreateChirp, DeleteChirp } from "../utils/chirpstore";
import db from '../db';

const router = express.Router();

// router.use('/', async (req, res) => {
//     try {
//         res.json(await db.Chirpr.all());
//     } catch(e) { 
//         console.log(e);
//         res.sendStatus(500);
//     }
// });


router.get('/:id?', async (req, res) => {
    let id: string = req.params.id

    if (id) {
        const chirp = await db.Chirpr.one(id);
        res.json(chirp[0]);
    } else {
        const chirps = await db.Chirpr.all();
        res.json(chirps);
    }
});

//post chirp
router.post('/', async (req, res) => {
    const chirpObj: chirp = req.body;

    try {
        const newUser = await db.Users.post(chirpObj.name, chirpObj.email);
        
        await db.Chirpr.post(newUser.insertId, chirpObj.content);
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
    }
});

//this will update a chirp
//mandatory id param to tell the server which chirp to update
router.put('/:id', async (req, res) => {
    const id: string = req.params.id;
    const newContent: string = req.body.content;

    try {
        await db.Chirpr.put(id, newContent);
        res.send("edited successfully");
    } catch (err) {
        console.log(err);
    }
});

//delete chirp
router.delete('/:id', async (req, res) => {
    const id: string = req.params.id;

    try {
        await db.Chirpr.destroy(id);
        res.send("deleted successfully");
    } catch (err) {
        console.log(err);
    }
});

interface chirp {
    id?: string, //question mark means the id is an optional property
    name: string,
    email: string,
    content: string,
}

export default router;