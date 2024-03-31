// IMPORTAR LIBRERIA DE EXPRESS:::::::::::::::::::::::::::::::::::::::::
import express, { json } from 'express';
//importar conexion mysql
import { pool } from './db.js';
// importar puerto
import { PORT } from './config.js';

// OBJETOS PARA LLAMAR LOS METODOS DE EXPRESS ::::::::::::::::::::::::::
const app = express();
// requiriendo mysql
app.get("/", async function(req, res) {
    const [rows] = await pool.query('SELECT * FROM registro_profesores');
    
    res.json(rows);
})
// conexion a la base de dato

// ruta del index
app.get("/", function(req, res) {
    res.send("hola mundo");
})

app.get("/ping", async function(req, res) {
     const [result] = await pool.query('SELECT "hello world" as RESULT');
    console.log(result[0]);
    
    res.json(result[0]);
})

app.get('/create', async function(req, res) {
    const result = await pool.query('INSERT INTO registro_profesores (id_profesor, nombre_completo_profesor, gmail, codigo_universidad, password) VALUES ("", "jesus", "casanova@gmail.com", "1234", "password");')
    res.json(result[0])
})

app.listen(PORT, function(){
    console.log("el servidor es http://localhost:3000");
});

