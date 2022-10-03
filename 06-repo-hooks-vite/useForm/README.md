#use de hook useForm

Ejemplo de uso:
```
const initialForm ={
    name: '',
    edad: null, 
    email: ''
};
const [ values, handleInputChange, reset ] = useForm(initialForm)
```