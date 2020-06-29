import axios from 'axios';

class ConnectAPI{
    defaultUrl = 'http://localhost:8000/';

    getFetch = (url, query) => {
        return fetch(`${this.defaultUrl}${url}?${query}`, 
            {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
                // , mode: 'no-cors'
            })
            .then(result => result.json())
            .then(data => data)
            .catch(err => {
                console.error(err);
            });
    };

    postFetch = (url, data) => {
        let formData = new FormData();
        for(let key in data){
            formData.append(key, data[key]);
        }
        return axios.post(`${this.defaultUrl}${url}`, 
            formData, 
            {
                headers: { 
                    // 'Content-Type': 'application/json',
                    // 'Accept': 'application/json'
                }
            })
            .then(data => data)
            .catch(err => {
                console.error(err);
            });
    };

    deleteFetch = (url) => {
        return axios.delete(`${this.defaultUrl}${url}`, 
            {
                headers: { 
                    // 'Content-Type': 'application/json',
                    // 'Accept': 'application/json'
                }
            })
            .then(data => data)
            .catch(err => {
                console.error(err);
            });
    };
}

export default ConnectAPI;