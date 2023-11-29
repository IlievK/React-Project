// import styles from '../catalog2/catalog.module.css'

export default function CatalogTest (){
    return(
        <>
         <div  id={styles['sidebar']}>
        <h1>React Router Contacts</h1>
        <div>
          <form id={styles['search-form']} role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id={styles['search-spinner']}
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id={styles['detail']}></div>
    </>
       
    )
}