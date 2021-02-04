import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function useFetch({input}) {
    
    let containsFullStop = input.indexOf(".");
    const [dataFetched, setDataFetched] = useState({});

    useEffect(() => {
    
        const fetchData = async() => {
          let results = await axios.get(`http://api.url-previewer.com?q=${input}`);
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
