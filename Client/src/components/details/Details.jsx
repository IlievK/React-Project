import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOne } from "../../api/gamesApi"

export default function Details(){
const {id} = useParams()
const [item, setItem] = useState({})

useEffect(()=>{
    getOne(id)
    .then(respone => console.log(respone))
    .catch(error => console.log(error))
})
    return(
        <>
        {/* <img src={image} className={styles['picture-added-electronics']} />
        <p>{name}</p>
        <p>{type}</p>
        <p>{production}</p>
        <p>{price}</p>
        <p>{description}</p> */}
        <div>Details</div>
        
        </>
    )
}