import '../navigation/navigation.module.css'
export default function Navigation() {

  return (

    
      <nav>
        <ul>
          {/*For all users*/}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/catalog">Catalog</a>
          </li>
          {/*For loggin users*/}
          <li>
            <a href="/data/create">Create Offer</a>
          </li>
          {/* <li>
            <a href="#">Search</a>
          </li> */}
          <li>
            <a href="#">Logout</a>
          </li>
          {/*For guest user*/}
          <li>
            <a href="/auth/login">Login</a>
          </li>
          <li>
            <a href="/auth/register">Register</a>
          </li>
        </ul>
      </nav>
  

  )
}