import styled from 'styled-components'

export const Container = styled.aside`
  width: 61.3125rem;
  background: var(--background-content);

  div.content{
    max-width: 90%;
    padding:  0 2rem;
    margin: 0 auto;
    margin-top:  1rem;
    
       
          
  }
`

export const BtnTemperature = styled.div`
  
       display: flex;
       justify-content: end;
       margin-bottom:  1rem;

       a.celsius{
         display: inline-block;
         background: var(--text-title);
         text-decoration: none;
         width: 1.60rem;
         height: 1.60rem;
         border-radius: 1rem;
         margin-right: 12px;
        transition: filter 0.5s;



         &:hover{
           filter: brightness(0.7);
         }
         

          
         h1{
           font-weight: 700;
           font-size: 1.25rem;
            color:#110E3C ;
            text-align: center;
            line-height: 1.80rem;
         }

       }

       a.fahrenheit{
        display: inline-block;
         background: var(--text-title2);
         text-decoration: none;
         width: 1.60rem;
         height: 1.60rem;
         border-radius: 1rem;
         transition: filter 0.5s;


         &:hover{
           filter: brightness(0.7);
         }
           
         h1{
           font-weight: 700;
           font-size: 1.25rem;
            color:var(--text-title) ;
            text-align: center;
            line-height: 1.80rem;
         }

       }

`


export const ContentClimateDays = styled.div`
 
 display: grid;
 gap: 1.625rem;
 grid-template-columns:  repeat(5, 1fr);



`



export const Highlights = styled.div`
 
 
 margin-top: 1rem;


  h1{
    color: var(--text-title);
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom:  2rem;

  }


  div.principal{

    display: grid;
    grid-template-columns:  repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.5rem;


  
  }



`


