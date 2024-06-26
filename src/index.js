import express from "express"; // hacer npm i express
import cors from "cors"; // hacer npm i cors
import {PI, sumar, multiplicar, restar, dividir} from "./modules/matematica.js"
import Alumno from "./models/alumno.js";
import ValidacionesHelper from './modules/ValidacionesHepler.js'

const app = express();
const port = 3000;

app.use(cors()); 
app.use(express.json()); 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => { 
    res.send('Ya estoy respondiendo!');
    res.status(200).send()
})

app.get('/saludar/:nombre', (req, res) => { 
    res.send(`Hola ${req.params.nombre}`);
    res.status(200).send()
})

app.get('/validarfecha/:ano/:mes/:dia', (req, res) => { 
    let fecha = Date.parse(`${(req.params.mes)-1} ${req.params.dia} ${req.params.ano}`)
    if(!isNaN(fecha)){
        res.status(200).send()
    }else{
        res.send("mal")
        res.status(400).send()
    }
})

app.get('/matematica/sumar', (req, res) => { 
    let n1 = getIntegrerOrDefault(req.query.n1) 
    let n2 = getIntegrerOrDefault(req.query.n2)
    let resultado = sumar(n1, n2)
    res.send(`El resultado es ${resultado}`)
    res.status(200).send()
})

app.get('/matematica/restar', (req, res) => { 
    let resultado = restar(req.query.n1, req.query.n2)
    res.send(`El resultado es ${resultado}`)
    res.status(200).send()
})

app.get('/matematica/multiplicar', (req, res) => { 
    let resultado = multiplicar(req.query.n1, req.query.n2)
    res.send(`El resultado es ${resultado}`)
    res.status(200).send()
})

app.get('/matematica/dividir', (req, res) => { 
    let resultado = dividir(req.query.n1, req.query.n2)
    res.send(`El resultado es ${resultado}`)
    res.status(200).send()
})

app.get('/omdb/searchbypage', async (req, res) => {
    let resultado = await OMDBSearchByPage(req.query.searchText, req.query.page);
    res.send(resultado);
    res.status(200).send();
});

app.get('/omdb/searchcomplete', async (req, res) => {
    let resultado = await OMDBSearchComplete(req.query.searchText);
    res.send(resultado);
    res.status(200).send();
});

app.get('/omdb/getbyomdbid', async (req, res) => {
    let resultado = await OMDBGetByImdbID(req.query.imdbID);
    res.send(resultado);
    res.status(200).send();
});

const alumnosArray = [];
alumnosArray.push(new Alumno("Esteban Dido" , "22888444", 20));
alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
alumnosArray.push(new Alumno("Elba Calao" , "32623391", 18));

app.get('/alumnos', (req, res) => {
    res.send(alumnosArray);
    res.status(200).send();
});

app.get('/alumnos/:dni', (req, res) => {
    let alumno = new Alumno;
    alumnosArray.forEach(item => {
        if (item.dni == (req.params.dni).toString()){
            alumno = item;
        }
    })
    res.send(alumno);
    res.status(200).send();
});

app.post('/alumnos', (req, res) => {
    let obj = req.body;
    let alumno = new Alumno(obj.username, obj.dni, obj.edad);
    alumnosArray.push(alumno);
    res.status(201).send();
})

app.delete('/alumnos', (req, res) => {
    let body = req.body;
    let index = -1;
    alumnosArray.forEach((alumno, i) => {
        if (alumno.dni == body.dni){
            index = i;
        }
    });
    if (index != -1){
        alumnosArray.splice(index, 1);
        res.status(200).send();
    }
    else{
        res.status(400).send();
    }
})

