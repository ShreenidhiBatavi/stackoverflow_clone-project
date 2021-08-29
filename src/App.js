import {useState} from 'react';
import './App.css';
import Menu from './Components/Menu';
import Question from './Components/Question';
import {Route, Switch } from 'react-router-dom';
function App() {
  const [questions ,setQuestion]=useState([])
  const [theme, setTheme] = useState(false)
  const [previousKeys]= useState([])
  const [previousData]= useState([])
 
  
  const getQuestions=(value)=>{
      if(previousKeys.includes(value)){
         setQuestion(previousData[previousKeys.indexOf(value)])
       } else{
        fetch(`https://api.stackexchange.com/2.3/search?order=desc&sort=activity&intitle=${value}&site=stackoverflow`)
        .then((res)=>res.json())
        .then((res)=>{
          setQuestion(res.items)
          
          if(previousKeys.length<6 && previousData.length<6){
            previousKeys.push(value)
            previousData.push(res.items)
          }  
          if(previousKeys.length>5 && previousData.length>5){
            previousKeys.shift()
            previousData.shift()
            
          }
         
        })
      }
      
       

  }

  
  return (
    <>
    <div  className={theme?"main":""}>

    <Menu getQuestions={getQuestions} setTheme={setTheme} theme={theme}/>
    
    <Switch>
       <Route exact path="/">
               <Question result={questions} theme={theme}/>
           </Route>
          
    </Switch>
    
    </div>
      
    </>
  );
}

export default App;
