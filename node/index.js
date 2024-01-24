const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
    const sql = `INSERT INTO people(name) values('Mateus')`;
    connection.query(sql);

    connection.query('SELECT * FROM people', function (error, results, fields) {
        if (error) throw error;

        let html = '<h1>Full Cycle</h1>';
        results.forEach(person => {
            html += `<h2>ID: ${person.id}  Name: ${person.name}</h2>`;
        });
        res.send(html);
    });
});


app.listen(port, () => {
    console.log('rodando na porta '+ port)
})