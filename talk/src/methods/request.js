import axios from 'axios';
const instance = axios.create({
    baseURL:'http://localhost:3000',
    timeout:1000
})

export default function request(config){
    // console.log(11)
    if(config.method==='get'){
        console.log(config)
        return instance.get(config.url,{
            params:config.params
        })
    }
}