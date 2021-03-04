import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function useFetch({input}) {
    
    let containsFullStop = input.indexOf(".");
    const [dataFetched, setDataFetched] = useState({});

    const instance = axios.create({
      baseURL: 'https://api.url-previewer.com',
      timeout: 50000,
      headers: {'Content-Type': 'application/json'}
    });

    useEffect(() => {
    
        const fetchData = async() => {
          let results = await instance.get(`/?q=${input}`);
          // let results = await axios.get(`http://localhost:4001?q=${input}`);
          let status = results.status;
    
          if(status == 200) {
            let data = results.data;
            console.log(data);
            setDataFetched(data);
          }
        }
    
        if(containsFullStop > 0 && (input.length - containsFullStop )> 3){
          fetchData();
        }
         return () => [dataFetched]
      }, [input])
    
    
      return dataFetched;

}
