import { Query } from './index';

const all = async () => await Query(`
SELECT chirps.content, chirps.location, users.name
FROM chirps
JOIN users ON chirps.userid = users.id`
);

const one = async (id: string) => await Query(`
SELECT chirps.content, chirps.location, users.name
FROM chirps
JOIN users ON chirps.userid = users.id
where chirps.id 
`)

export default {
    all,
    one
}