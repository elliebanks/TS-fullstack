import { Query } from './index';

const all = async () => Query(`
SELECT 
    chirps.*,
    users.name 
FROM chirps
JOIN users ON users.id = chirps.userid`);

export default {
    all
}