const {useEffect, useState} = require("react");


function useFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        async function fetchData(){
            const response = await fetch("https://randomuser.me/api/?results=240");
            const data = await response.json();
            setData(data.results);
            setLoading(false)
            

            if (!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
                setError(message)
              }

              
              
        }
        fetchData();
    },["https://randomuser.me/api/?results=240"])

  return {data, loading, error}
}

export default useFetch
