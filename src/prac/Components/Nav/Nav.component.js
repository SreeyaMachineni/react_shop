import { Link, Outlet } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../Context/user.context"

const Nav = () => {

    const {currentUser,setCurrentuser} = useContext(UserContext)
    const logoutHandler = () => {
        setCurrentuser(null)
    }

    return (
        <>
        <ul>
            <li>
                <Link to="/shop">Shop</Link>
            </li>
            <li>
                {currentUser ? 
                (<Link to="/auth"  onClick={logoutHandler}>Logout</Link>)
                :
                <Link to="/auth">
                Login
                </Link>}
            </li>
        </ul>
        <Outlet/>
        </>
    )
}
export default Nav