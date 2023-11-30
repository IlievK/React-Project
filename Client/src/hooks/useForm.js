import { useState } from "react"

export const useForm = (initilValues, submitHandler) =>{

    const [ formValues, setFormvalues] = useState(initilValues)

    const onChange = (e) =>{
        setFormvalues( state =>
             ({
                ...state, 
                [e.target.name]: e.target.value 
            }));
    }

    const changeValues = (newValues) => {

        setFormvalues(newValues)

    }
    
    const onSubmit = (e) =>{
        e.preventDefault()
        submitHandler(formValues)
    }

    return{
        formValues,
        onChange,
        onSubmit,
        changeValues
    }
}

