import { useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import styles from '../edit/edit.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { editItem, getOne } from '../../api/gamesApi'


export default function Edit() {
    const navigate = useNavigate()
    const { id } = useParams()

    const onEditSubmit = async (values) => {
    
        const formData = [...Object.entries(values)]
        try {
          
            const missing = formData.filter(([k, v]) => v == "")
            // console.log(`missing ${missing}`);
            if (missing.length > 0) {
                const errors = missing.reduce((a, [k]) => Object.assign(a, { [k]: true }), {})
               
                throw {
                    error: new Error('All field are required!'),
                    errors
                }
            }
            const data = await editItem(id,values)
            navigate(`/catalog/${data._id}/details`)
        } catch (error) {
           
            console.log(error);
            alert(error)
            // console.log(`Errors: ${error}`);
        }
    }
    const EditForm = {
        Id: '_id',
        Name: 'name',
        Type: 'type',
        Production: 'production',
        Image: 'image',
        Price: 'price',
        Description: 'description'
    }
    const { formValues, onChange, onSubmit, changeValues } = useForm(
        {
            [EditForm.Id]: "",
            [EditForm.Name]: '',
            [EditForm.Type]: '',
            [EditForm.Production]: '',
            [EditForm.Image]: '',
            [EditForm.Price]: '',
            [EditForm.Description]: ''
        }
        , onEditSubmit)


    useEffect(() => {
        getOne(id)
            .then(result => changeValues(result))
            .catch( error => console.log(error))
        },[])

    return (
        <section id={styles['editPage']}>

            <form onSubmit={onSubmit} id={styles['editForm']} method="post">
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