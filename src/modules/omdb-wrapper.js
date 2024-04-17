/* Módulo OMDBWrapper*/
import axios from "axios";
const APIKEY = "ab7600fc"; 
const OMDBSearchByPage = async (searchText, page = 1) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};

const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
const apiResponse = await axios.get(requestString);

returnObject.datos = apiResponse.data
returnObject.respuesta = apiResponse.statusText
console.log(returnObject.datos)

return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};

const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`;
const apiResponse = await axios.get(requestString);

returnObject.datos = apiResponse.data
returnObject.respuesta = apiResponse.statusText
console.log(returnObject.datos)

return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};

const requestString = `https://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`;
const apiResponse = await axios.get(requestString);

returnObject.datos = apiResponse.data
returnObject.respuesta = apiResponse.statusText
console.log(returnObject.datos)

return returnObject;
};
// Exporto todo lo que yo quiero exponer del módulo:
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};