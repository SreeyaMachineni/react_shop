import Header from "./Header"
import { Container } from "./styles/Container.styled"
import { ThemeProvider } from "styled-components"

const theme = {
    colors: {
        header : 'lavender',
        body:'coral',
        footer:'blue'
    }
}

const Test = () =>{
    return (
        <>
        <ThemeProvider theme={theme}>
        <Header/>
        <Container>test</Container>
        </ThemeProvider>
        </>
    )
}

export default Test