import React from 'react';
const Question = ({result,theme}) => {
  
    return (
        <>
        
        <div className="questions">
         
        
          <ul>
         
            {result.map((res)=>(
              <>
              <div key={res.question_id} className="que">
                  <div id={theme?'views_id':''} className="views">
                    <p id="count">{res.view_count}</p>
                         <p id="text">views</p>
                  </div>
             
                 <li >
                    <a href={`https://stackoverflow.com/questions/${res.question_id}`} style={{textDecoration:'none'}}  to={`/answer/${res.question_id}/${res.title}`} id={theme?'views_id':''}><h2>{res.title}</h2></a>
                 </li>
                 </div>
                 <div className="tags">
                     <div id={theme?'views_id':''} className="views">
                     <p id="count">{res.answer_count}</p>
                   <p id="text">answers</p>
                     </div>
                   
                    {             
                       res.tags.map((tag)=>(
                         <> 
                            <div key={res.question_id} className="tag">
                                {tag}     
                            </div>
                         </>
                       ))
                    }
                   
                </div>
              <br/>
            <hr/> 
              </>
            ))}
            </ul>
        </div>
        
        </>
            
    )
}

export default Question
