import React from 'react'
import data from './Tech_Event.json'
import './Event.css'

function Event() {
    
  return (
      <div>
      {data.Event.map((event,index)=>{
         return(
          <div key={index}>
          <h1 className='event-head'>Technical Events</h1>
          <div className="event" key={index}>
          
          {(event.heading).map((event,index)=>{
              let titl = event.titles
              let val = titl.length;
              
            return(
              <div className="data" key={index}>
            <img src={event.img}  />
           <div className="datas">
           <h2>{event.eventname}</h2>
            <p>{event.eventdes}</p>
           {val==0?null: <span >titles</span>}
        {(event.titles).map((tit,index)=>{
         return(
           <ul key={index}>
         <li>
         <p>{tit}</p>
         </li>
        </ul>
         )
        })}
        </div>
           </div>
            )
          })}
          </div>
          </div>





         )

         
      })}
      
      </div>
      
  )
}

export default Event