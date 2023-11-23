import { useEffect, useState } from 'react'
import {  } from '../../hooks/useForm.js'
import styles from '../catalog/catalog.module.css'
import { getAll } from '../../api/gamesApi.js'
import Item from '../item/Item.jsx'

export default function Catalog() {

  useEffect(()=>{
    getAll()
    .then(res => setItems(Object.values(res)))
    
    .catch(error=>console.log(error))

  },[])
  const [items, setItems] = useState([])
  // console.log(items);

  return (

    <>

      <section id={styles['viewCatalog']} className={styles['background-img']}>
        {/*If there are one or more electronics*/}
        <div className={styles['added-electronics']}>
          { items.map( item => <Item key={item._id} {...item}/>)}

          
        </div>
        {/*If there are no electronics in catalog yet*/}
        {/* <div className="guest">
          There are no electronics found...
      </div> */}
      </section>
    </>
  )
}