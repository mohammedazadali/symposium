import React from 'react'
import data from './Non_Tech.json'
function Non_Tech() {
  return (
    <div>
    {data.Event.map((events,index)=>{
       return(
        <div key={index}>
        <h1 className='no-event-head'>Non-Technical Events</h1>
        <div className="event" key={index}>
        
        {(events.nontech).map((event,index)=>{
            
            return(
              <div className="data" key={index}>
                  <img src={event.img}  />
                  <div className="datas">
                  <h2 className='eventname'>{event.eventname}</h2>
                  <p>{event.eventdes}</p>
              </div>
              <div className="coo">
                  <h1 className='coo-title'>Coordinator</h1>
                  <table className='coo-list'>
                    <tbody>
                      <tr className='table-head'>
                        <th className='table-head'>Name</th>
                        <th className='table-head'>Number</th>
                      </tr>
                      {(event.coordinate).map((even,index)=>{
                      return(
                      <tr key={index}>
                        <td className='table-des'>{even.name}</td>
                        <td className='table-des'>{even.number}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
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

export default Non_Tech