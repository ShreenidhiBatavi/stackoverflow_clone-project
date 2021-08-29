import React,{useState} from 'react'
import logo from '../logo.svg'

const Menu = ({getQuestions,setTheme,theme}) => {
  const[serchVal,setSearchVal]=useState('')
  
    return (
        <>
        <div className="container-fluid">
        <div className="menu">
        
        <div className="logo">
              <img  src={logo} alt="logo"/>
        </div>
        <i id="search_icon" className="fas fa-search fa-2x"></i>
        <input id="search_input" value={serchVal} onChange={(e)=>setSearchVal(e.target.value)} type="text" placeholder="search..." />
         <button id="search_btn" onClick={()=>{getQuestions(serchVal);setSearchVal('')}}>Search</button>
         <button id="toggle" onClick={()=>setTheme(!theme)}>change theme</button>
   
    </div>

        </div>
        
        </>
    )
}

export default Menu
