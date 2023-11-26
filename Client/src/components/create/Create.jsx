import { useForm } from '../../hooks/useForm.js'
import styles from '../create/create.module.css'
export default function Create() {

    const { values, onChange, onSubmit } = useForm


    return (
        <section className={styles['createPage']} id="createPage">
            <form onSubmit={onSubmit} className={styles['createForm']} id="createForm" action="#" method="">
                <label htmlFor="name">Name:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="name"
                    name=""
                    placeholder="Name..."
                />
                <label htmlFor="type">Type:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="type"
                    name=""
                    placeholder="Type..."
                />
                <label htmlFor="production">Year of Production:</label>
                <input
                    onChange={onChange}
                    type="number"
                    id="production"
                    name=""
                    placeholder="Year of Production..."
                />
                <label htmlFor="image">Image:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="image"
                    name=""
                    placeholder="Image..."
                />
                <label htmlFor="price">Price:</label>
                <input
                    onChange={onChange}
                    type="number"
                    id="price"
                    name=""
                    placeholder="Price..."
                />
                <label htmlFor="description">Description:</label>
                <textarea
                onChange={onChange}
                name=""
                cols="24"
                rows="10"
                type="text"
                id={styles["description"]}
                placeholder="Description..."></textarea>
                

               {/* <input
                    onChange={onChange}
                    type="text"
                    id="description"
                    name=""
                    placeholder="Description..."
                /> */}
                <input type="submit" className={styles['create']} value="Create Offer" />
            </form>
        </section>

    )
}