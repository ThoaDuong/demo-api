import axios from 'axios';
import * as config from './../constants/Config';

export default function callApi(endpoint, method = 'GET', data){
    return axios({
        method : method,
        url : `${config.API_URL}/${endpoint}`,
        data : data
    }).catch(function (error) { 
        console.log(error);
    });
}
