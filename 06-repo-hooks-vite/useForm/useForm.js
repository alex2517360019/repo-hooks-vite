//find useState react.FAST_REFRESH
import { useState } from "react";
// initialForm es un parametro dinamico para reutilizar en la creacion de formularios
export const useForm = (initialForm = {}) => {
    const [formState, setformState] = useState(initialForm);
      //cambio a input nombre, se guarda el estado y se manda a llamar con onChange
      const onInputChange = ({ target }) => {
        const { name, value } = target;
        setformState({
          ...formState,
          [name]: value, //si cambia - propiedad computada - dinamica alser name y value diferentes
        });
      };
      const onResetForm = ()=>{
        setformState(initialForm);
      }
    //   retornar variables de form ...formState
  return {...formState,formState,onInputChange,onResetForm}
}
