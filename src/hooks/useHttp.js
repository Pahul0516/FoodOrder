import {useCallback, useEffect, useState} from "react";

async function sentHttpRequest(url, config){
    const response = await fetch(url, config)

    const resData = await response.json()

    if (!response.ok) {
        throw new Error(resData.message || 'Something went wrong with the status code.')
    }

    return resData
}

export default function useHttp(url, config, initialData) {

    const [data, setData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    const sendRequest = useCallback(async function sendRequest(){

        setIsLoading(true)
        try{
            const redData = await sentHttpRequest(url, config)
            setData(redData)

        }catch(error){
            setError(error.message || 'Something went wrong!')
        }
        setIsLoading(false)
    }, [url, config])

    useEffect(() => {
        if (config && (config.method === 'GET' || !config.method) || !config) {
            sendRequest()
        }
    }, [sendRequest, config],)


    return {
        data,
        isLoading,
        error,
        sendRequest,
    }
}