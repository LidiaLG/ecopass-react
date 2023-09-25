export default class DataService {
    
    // url = poner la url del json general

    getData(path, callback) {
        fetch(url + path)
            .then((res) => res.json())
            .then((json) => {
                callback(json);
            });
    }

    /* --- Conseguir los Users del fetch
    GetUsers(callback){
       this.GetData = (url + "/Usuario" + callback)
    } */

    urlEvento = './json.js';
    getEvento(path , callback) {
        fetch(this.urlEvento + path)
            .then(res => res.json())
            .then(json => {
                callback(json);
            });
    }
}

