import mysql from 'mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection((err, con) => {
    if (err) throw err;
        console.log('Database is Connected');
        con.release();
    }
)

export default pool;