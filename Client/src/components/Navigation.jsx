export default function Navigation (){

    return(
        

        <nav>
        <ul>
          {/*For all users*/}
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Catalog</a>
          </li>
          {/*For loggin users*/}
          <li>
            <a href="#">Create Offer</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
          {/*For guest user*/}
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </nav>
    )
}