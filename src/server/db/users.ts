import { Query } from './index';

const post = async (name: string, email: string) => 
    Query(`
        insert into users (name, email) values (?, ?)
        `, [name, email]
        );

export default {
    post
}