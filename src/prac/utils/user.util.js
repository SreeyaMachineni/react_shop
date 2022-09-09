

export const SignInUser = async()=>{
    const user = await fetch('https://run.mocky.io/v3/aa9d8cac-e84d-487c-89b3-65654b8614c1')
    return user.json()

}