import { useForm } from '../../hooks/useForm.js'
import styles from '../create/create.module.css'

const CreateForm = {
    Name: 'name',
    Type: 'type',
    Production: 'production',
    Image: 'image',
    Price: 'price',
    Description: 'description'


}

export default function Create({
    onCreateSubmitHndler
}) {

    const { formValues, onChange, onSubmit } = useForm(
        {
        [CreateForm.Name]: '',
        [CreateForm.Type]: '',
        [CreateForm.Production]: '',
        [CreateForm.Image]: '',
        [CreateForm.Price]: '',
        [CreateForm.Description]: ''
    }
    , onCreateSubmitHndler)


    return (
        <section className={styles['createPage']} id="createPage">
            <form onSubmit={onSubmit} className={styles['createForm']} id="createForm"  method="post">
                <label htmlFor="name">Name:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="name"
                    name={CreateForm.Name}
                    placeholder="Name..."
                    value={formValues[CreateForm.Name]}
                />
                <label htmlFor="type">Type:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="type"
                    // name={CreateForm.Type}
                    name={CreateForm.Type}
                    placeholder="Type..."
                    value={formValues[CreateForm.Type]}
                />
                <label htmlFor="production">Year of Production:</label>
                <input
                    onChange={onChange}
                    type="number"
                    id="production"
                    name={CreateForm.Production}
                    placeholder="Year of Production..."
                    value={formValues[CreateForm.Production]}
                />
                <label htmlFor="image">Image:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="image"
                    name={CreateForm.Image}
                    placeholder="Image..."
                    value={formValues[CreateForm.Image]}
                />
                <label htmlFor="price">Price:</label>
                <input
                    onChange={onChange}
                    type="number"
                    id="price"
                    name={CreateForm.Price}
                    placeholder="Price..."
                    value={formValues[CreateForm.Price]}
                />
                <label htmlFor="description">Description:</label>
                <textarea
                onChange={onChange}
                name={CreateForm.Description}
                cols="24"
                rows="10"
                type="text"
                id={styles["description"]}
                placeholder="Description..."
                value={formValues[CreateForm.Description]}
                ></textarea>
                

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