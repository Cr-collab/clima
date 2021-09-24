import { useContext, useState } from "react";
import { ClimatesContext } from "../../Context";
import { Container } from "./style";
import { HistorySearch} from "../HistorySearch";

import { FiX} from 'react-icons/fi'


export function OpenSearchBar({setSearch}){
    const [modifyLocale, setModifyLocale] = useState("")
    
     const {searchLocalWeather } = useContext(ClimatesContext)

     var historySearch = []

     const [recuperationHisorySearch , setRecuperationHisorySearch] = useState(()=>{
       
            const historySearch = localStorage.getItem('@History:search');
        
            if (historySearch) {
              return JSON.parse(historySearch);
            }
            return [];
         
     })


    function handleWeatherCity(){ 
        searchLocalWeather(modifyLocale) 
        historySearch.push(modifyLocale)
        localStorage.setItem('@History:search', JSON.stringify(historySearch))
        setModifyLocale("");
    }
    return(
        <Container>
               <button className="close" onClick={()=> setSearch(false)}> <FiX size="20"/> </button>
               <br />
            
              <input type="text" value={modifyLocale}
              onChange={(event)=>{ setModifyLocale(event.target.value) }} 
              placeholder="Pesquise sua localização" />  <button onClick={handleWeatherCity}>Pesquise</button>
             
           {
               recuperationHisorySearch.map((history)=>{ 
                return <HistorySearch history={history}/>
               })
           }  
        </Container>
    )
}