import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(url){
    
    const [ data, setData ] = useState([])

    useEffect( () => {
        axios({
            method: 'get',
            url: url,
            timeout: 10000,
            responseType: 'stream'
          })
        .then(function (response) {
            setData(response.data)
            console.log(response)
        }).catch( error => {
            console.log(error)
            setData({
                error: true,
                message: "Erro ao carregar filmes por favor tente novamente mais tarde"
            })
        })
        
    },[url])
    console.log(data)
    return { data }

}