import { useParams } from "react-router"

const Book = () =>{
    const {id} = useParams()
    return (
        <h2>Book {id}</h2>
    )
}

export default Book