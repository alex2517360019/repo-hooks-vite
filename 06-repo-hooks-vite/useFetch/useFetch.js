import { useEffect, useState } from "react";

export const useFetch =(url) => {
  //  parametros de respuesta a mostrar
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    // carga
    setState({
      ...state,
      isLoading: true
    });
    // espamos respuesta
    const resp = await fetch(url);
    const data = await resp.json();
    //  cargamos data de respuesta en state - termina de cargar
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };
  // si url cambia cambio la solicitud
  useEffect(() => {
    getFetch();
  }, [url]);

  return {data: state.data,isLoading: state.isLoading,hasError: state.hasError};
};
