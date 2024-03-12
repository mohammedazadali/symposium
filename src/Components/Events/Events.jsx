import React from 'react'
import './Event.css'
import Event from './Tech_Event'
import Non_Tech from './Non_Tech'

function Events() {
  return (
    <div className="events">
       <div className="events-e">
       <Event/>
       <Non_Tech/>
       </div>
    </div>
  )
}

export default Events