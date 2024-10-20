import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);
  const setLoadingState = ()=>{
    setState({...state});
  }
  const getFetch = async() =>{
    setLoadingState();
    const resp = await fetch(url);
    await new Promise((resolve) => {
        setTimeout(resolve,1500);
    });
    if(!resp.ok){
        setState({
            data: null,
            isLoading: false,
            hasError: true,
            error:{
                code: resp.status,
                message: resp.statusText
            }
        });
        return;
    }

    const data = await resp.json();
    setState({
        ...state,
        data, 
        isLoading: false
    });
    
    //manejo de cache
    console.log(data);
  }

  const { error, ...stateRest } = state;
  return { 
    ...stateRest
  };

}
