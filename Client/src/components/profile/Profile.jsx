import { useEffect, useState } from 'react'
import {  } from '../../hooks/useForm.js'
import styles from '../catalog/catalog.module.css'
import { getAll, getMyItems } from '../../api/gamesApi.js'
import Item from '../item/Item.jsx'
import { useAuthContext } from '../../contexts/AuthContex.jsx'

export default function Profile (){
const {userId} = useAuthContext()

  useEffect(()=>{
    getMyItems(userId)
    .then(res => setItems(Object.values(res)))
    
    .catch(error=>console.log(error))

  },[])
  const [items, setItems] = useState([])
  // console.log(items);
    return(
        <>

        <section id={styles['viewCatalog']} className={styles['background-img']}>
           { items.length > 0  && <div className={styles['added-games']}>
            { items.map( item => <Item key={item._id} {...item}/>)}
              </div> }
          {
          items.length == 0 && <div className={styles['guest']}>
            There are no games found...
            </div>
          }
  
        </section>
      </>
    )
}