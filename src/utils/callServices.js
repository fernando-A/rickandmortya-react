import axios from 'axios';

 /**
  *   SE CREA CONSTANTE PARA ENVIAR LAS CABECERAS A LOS METODOS DE AXIOS
  */
const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Origin':'*'
}

/** FUNCION PARA INVOCAR METODOS MEDIANTE METODO GET
 * 
 * @param {*} url 
 */
export function getData(url) {
    return axios.get(url,header)
    .then(response => {
        return JSON.parse(JSON.stringify(response.data));
    })
    .catch(error =>{
        return JSON.parse(JSON.stringify(error));
    });
}
