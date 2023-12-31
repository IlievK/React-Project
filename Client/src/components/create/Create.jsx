import { useNavigate } from 'react-router-dom'
import { createOne } from '../../api/gamesApi.js'
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


export default function Create() {
    const navigate = useNavigate()
    
    const onCreateSubmitHndler = async (values) =>{
        // console.log(values);
        const formData = [...Object.entries(values)]
        
        try {
            // console.log(formData);s
            const missing = formData.filter(([k, v]) => v.trim() == "")
            if (missing.length > 0) {
                const errors = missing.reduce((a, [k]) => Object.assign(a, { [k]: true }), {})
                // console.log(errors);
                throw {
                    error: new Error('All field are required!'),
                    errors
                }
            }
            const data = await createOne(values)
         
            navigate('/catalog')
        } catch (error) {
            console.log(error.errors);
            console.log(error.error);
            alert(error.error)
            // console.log(`Errors: ${error}`);
        }
    }

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
                   
                <label htmlFor="type">Genre:</label>
                <input
                    onChange={onChange}
                    type="text"
                    id="type"
                    // name={CreateForm.Type}
                    name={CreateForm.Type}
                    placeholder="Genre..."
                    value={formValues[CreateForm.Type]}
                />
                <label htmlFor="production">Date of creation:</label>
                <input
                    onChange={onChange}
                    type="number"
                    id="production"
                    name={CreateForm.Production}
                    placeholder="Date of creation..."
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
              
                <input type="submit" className={styles['create']} value="Create Game" />
            </form>
        </section>

    )
}