import { useEffect, useState } from 'react'
import styles from '../home/home.module.css'
import { getAll, getLatest } from '../../api/gamesApi'

import LatestItem from './latestItems/LatestItem'


export default function Home() {
    const [items, setItems] = useState([])

    useEffect(() => {
        getLatest()
            .then(res => setItems(Object.values(res)))

            .catch(error => console.log(error))

    }, [])
    // console.log(items);
    return (

        <section id={styles['homePage']} className={styles['background-img']}>
            <div className={styles['introduction']}>
                <h1>Top 3 Games</h1>
                
                    {items.length > 0 && <div className={styles['added-games']}>
                        {items.map(item => <LatestItem key={item._id} {...item} />)}
                    </div>}
                    {
                        items.length == 0 && <div className={styles['guest']}>
                            There are no games found...
                        </div>
                    }

            </div>
        </section>
    )
}