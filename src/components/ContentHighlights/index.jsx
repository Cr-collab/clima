import { Container } from "./style"

export function ContentHighlights({name, value ,type}){
    return(
        <Container>
        <p>
        {name}
        </p>
        <h1>
            {Math.round(value)}<span>{type}</span>
        </h1>
        {/* <p>WSW</p> */}
      </Container>

    )
}