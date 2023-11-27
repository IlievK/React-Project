import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOne } from "../../api/gamesApi"
import styles from '../catalog/catalog.module.css'
export default function Details(){
const {id} = useParams()
const [item, setItem] = useState({})

useEffect(()=>{
    getOne(id)
    .then(respone => setItem(respone))
    .catch(error => console.log(error))
})
    return(
        <>
        <img src={item.image} className={styles['picture-added-electronics']} />
        <p>{item.name}</p>
        <p>{item.type}</p>
        <p>{item.production}</p>
        <p>{item.price}</p>
        <p>{item.description}</p>
        
        
        </>
    )
}