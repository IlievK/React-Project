import { useEffect, useState } from 'react'
import {  } from '../../hooks/useForm.js'
import styles from '../catalog/catalog.module.css'
import { getAll } from '../../api/gamesApi.js'
import Item from '../item/Item.jsx'

export default function Catalog() {
  const [items, setItems] = useState([])

  useEffect(()=>{
    getAll()
    .then(res => setItems(Object.values(res)))
    
    .catch(error=>console.log(error))

  },[])
  // console.log(items);

  return (

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