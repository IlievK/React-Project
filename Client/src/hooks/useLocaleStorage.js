import { useState } from "react"


export const useLocaleStorage = (key, initialValue) =>{

const [state, setState] = useState(()=>{

    const pesristerSerializedState = localStorage.getItem(key)

    if(pesristerSerializedState){
        return JSON.parse(pesristerSerializedState)
    }

    return initialValue
})


    const setLocaleStorage = (value) =>{
        setState(value)
        localStorage.setItem(key, JSON.stringify(value))
    }

    return[
        state,
        setLocaleStorage
    ]

}