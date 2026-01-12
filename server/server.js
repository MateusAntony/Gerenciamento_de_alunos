const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

const port = 5000;


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'estudantes'
});

db.connect((err) => {
    if (err) {
        console.error('ERRO AO CONECTAR NO BD:', err.message);
        return;
    }
    console.log('CONECTADO AO BANCO DE DADOS!');
});



app.post('/add_user', (req, res) => {

    console.log("Dados recebidos do Front-end:", req.body);

    sql= "INSERT INTO estudantesdetails (nome,email,idade,genero) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.age,
        req.body.gender
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.log("ERRO NO SQL:", err);
            return res.json({message: err});
        }
        return res.json({success: "Estudante adicionado com sucesso"});

    })
});

app.get('/estudantes', (req,res) =>{
    const sql = "SELECT * FROM estudantesdetails";
    db.query(sql, (err,data) => {
        if (err) {
            console.log("ERRO NO SQL:", err);
            return res.json({message: err});
        }
        return res.json(data)
    })

})

app.get('/read/:id',(req,res)=>{
    const id = req.params.id;
    const sql = "SELECT * FROM estudantesdetails WHERE id = ?";

    db.query(sql,[id],(err,data)=>{
        if (err) {
            console.log('Erro no sql:', err);
            return res.json({message: err});
        }
        return res.json(data);
    })
})

app.put('/update_notas/:id',(req,res)=>{
    const id = req.params.id;
    const sql = "UPDATE estudantesdetails SET nota1 = ?,nota2=?,nota3=?,faltas=? WHERE id=?"
    const values = [
        req.body.nota1,
        req.body.nota2,
        req.body.nota3,
        req.body.faltas,
        id
    ];

    db.query(sql,values,(err,data)=>{
        if (err){
            console.log('Erro no sql:', err);
            return res.json({message: err});
        }
        return res.json({success: "Notas atualizadas com sucesso"});
    })

})





app.listen(port, () => {
    console.log(`server rodando na porta: ${port}`);
});
