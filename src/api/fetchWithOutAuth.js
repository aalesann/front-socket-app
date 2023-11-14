import { env } from "../config/config"

export const fetchWithOutAuth = async (endpoint, method = 'GET', payload) => {
    const url = `${env.URL}/${endpoint}` 

    if(method === 'GET'){
        const resp = await fetch(url);
        return await resp.json()
    } else {
        const resp = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        return await resp.json()
    }



}
