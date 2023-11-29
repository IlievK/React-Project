import { useForm } from '../../hooks/useForm'
import  styles  from '../edit/edit.module.css'

const EditForm = {
    Name: 'name',
    Type: 'type',
    Production: 'production',
    Image: 'image',
    Price: 'price',
    Description: 'description'
}
export default function Edit() {

    const onEditSubmit = (values) =>{
        console.log(values);
    }
    

    const { formValues, onChange, onSubmit } = useForm(
        {
        [EditForm.Name]: '',
        [EditForm.Type]: '',
        [EditForm.Production]: '',
        [EditForm.Image]: '',
        [EditForm.Price]: '',
        [EditForm.Description]: ''
    }
    , onEditSubmit)


    return (
        <section id={styles['editPage']}>

        <form onSubmit={onSubmit} id={styles['editForm']}   method="post">
            <label htmlFor="name">Name: </label>
            <input
                onChange={onChange}
                type="text"
                id="name"
                name={EditForm.Name}
                placeholder="Name..."
                value={formValues[EditForm.Name]}
                />
               
            <label htmlFor="type">Type:</label>
            <input
                onChange={onChange}
                type="text"
                id="type"
                // name={EditForm.Type}
                name={EditForm.Type}
                placeholder="Type..."
                value={formValues[EditForm.Type]}
            />
            <label htmlFor="production">Year of Production:</label>
            <input
                onChange={onChange}
                type="number"
                id="production"
                name={EditForm.Production}
                placeholder="Year of Production..."
                value={formValues[EditForm.Production]}
            />
            <label htmlFor="image">Image:</label>
            <input
                onChange={onChange}
                type="text"
                id="image"
                name={EditForm.Image}
                placeholder="Image..."
                value={formValues[EditForm.Image]}
            />
            <label htmlFor="price">Price:</label>
            <input
                onChange={onChange}
                type="number"
                id="price"
                name={EditForm.Price}
                placeholder="Price..."
                value={formValues[EditForm.Price]}
            />
            <label htmlFor="description">Description:</label>
            <textarea
            onChange={onChange}
            name={EditForm.Description}
            cols="24"
            rows="10"
            type="text"
            id={styles["description"]}
            placeholder="Description..."
            value={formValues[EditForm.Description]}
            ></textarea>
            <input type="submit" className={styles['edit']} value="Edit" />
        </form>
    </section>

    )
}