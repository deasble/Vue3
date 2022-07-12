const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     password: '1234',
     connectionLimit: 5,
     database: 'todolists'
});

module.exports = {
    run(query) {
        return new Promise((resolve, reject) => {
            pool.getConnection()
                .then(conn => {
                  conn.query(query)
                    .then((rows) => {
                        resolve(rows);
                        conn.end();
                    })
                    .catch(err => {
                      console.log(err); 
                      conn.end();
                    })
                    
                }).catch(err => {
                  //not connected
                });           
        })
    }
}