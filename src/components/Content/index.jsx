import {Container,
   BtnTemperature,
    ContentClimateDays,
     Highlights} from './style'

import { ClimaDay } from '../ClimaDay'
import { ContentHighlights } from '../ContentHighlights'
import { useContext } from 'react'
import { ClimatesContext } from '../../Context'
import { useState } from 'react'




export function Content(props){
  

  const {dataWeather, fahrenheit, setFahrenheit} = useContext(ClimatesContext)
  

  const res = dataWeather.consolidated_weather[0]

  const resArrayComplete =  dataWeather.consolidated_weather
 console.log(resArrayComplete)


  function handleToggleC(){
        setFahrenheit(false)
  }


  function handleToggleF(){
    setFahrenheit(true)
  }



  return(
        <Container>
          
          <div className="content">

              <BtnTemperature>
                <a onClick={handleToggleC}  className='celsius'> <h1>°C</h1></a> 
                <a  onClick={handleToggleF} className='fahrenheit'> <h1>°F</h1></a>
              </BtnTemperature>


              <ContentClimateDays>
                 {
                   resArrayComplete.map((element, index ) => {
                   if(index  > 0){
                      return <ClimaDay element={element}/>

                   }

                  } )
                 }
                           

              </ContentClimateDays>

              <Highlights>
                   <h1>
                     Destaques de hoje
                   </h1>

                   <div className="principal">
                
                   
                       <ContentHighlights name={"Status do Vento"} value={res.wind_speed} type={"mph"}/>

                       <ContentHighlights name={"Umidade"}     value={res.humidity}  type={"%"}/>

                       <ContentHighlights name={"Visibilidade"} value={res.visibility} type={"miles"}/>

                       <ContentHighlights name={"Pressão do ar"}  value={res.air_pressure} type={"mb"}/>
                 

                   </div>


                   

                  
                  
              </Highlights>
                
          </div>
        </Container>
  )
}

