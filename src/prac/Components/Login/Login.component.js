import { useState ,useContext} from "react"
import {SignInUser} from '../../utils/user.util'
import { UserContext } from "../../Context/user.context"


const Login = () => {
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setCurrentuser} = useContext(UserContext)

    const handleUsername = (e) =>{
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const submitHandler = async(e) => {
        e.preventDefault()
        console.log(username,password)
        const user = await SignInUser()
        console.log(user)
        
        setCurrentuser(user)
    }


    return (
        <form onSubmit={submitHandler}>
            <input type="text" onChange={handleUsername}/>
            <input type="password" onChange={handlePassword}/>
            <button type="submit">Login</button>
        </form>
    )

    
}

export default Login