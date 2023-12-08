import styles from '../navigation/navigation.module.css'
import { Link } from "react-router-dom";
// import { useContext } from 'react';
import { useAuthContext } from '../../contexts/AuthContex'

export default function Navigation() {
  const {hasUser,username} = useAuthContext()
  return (

    
      <nav className={styles['nav']}>
        <ul>
          {/*For all users*/}
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/catalog"}>Catalog</Link>
          </li>
          {/*For loggin users*/}

          {hasUser ? <><li>
          <Link to={"/data/create"}>Create Game</Link>
        </li>
           {/* <li>
          //   <Link to={{">Search}}</Link>
        // </li> */}
          <li>
            <Link to={"/logout"}>Logout</Link>
          </li>
            <li>
            <Link to={"/profile"}>Profile, {username}</Link>
              </li>
            
          </>
           : <><li>
            <Link to={"/auth/login"}>Login</Link>
          </li><li>
              <Link to={"/auth/register"}>Register</Link>
            </li></>}
          
          {/*For guest user*/}
          
        </ul>
      </nav>
  

  )
}