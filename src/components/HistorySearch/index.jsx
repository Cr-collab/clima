import { Container } from "./style";

export function HistorySearch({history}) {
  return(
    <Container>
      <tr>
        {history}    
      </tr>   
    </Container>
  )
}