import { useState, useEffect } from "react";

function useGet(dbURL){
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () =>{
        try{
        //    data
        setLoading(false);

        }catch(err){
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    } , [])

    return {error, loading, data};

    }

    export default useGet;