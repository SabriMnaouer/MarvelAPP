import axios from 'axios';

const baseURL = 'https://gateway.marvel.com/v1/public/characters?';

const publicKey ='8e5532b9fc3a2406a709b3137cd48e00';

const privateKey ='2c68d66c011d6ae06783fa41e6613ff8e87b2423';

const ts = '1';

const hash = '0708ee7a98219d4daf2ce3311b30f4b3';

const api = axios.create(
    {
        baseURL:'https://gateway.marvel.com/v1/public/',
        params:{
            ts,
            apikey: publicKey,
            hash,
        },
    }
);
export default api;