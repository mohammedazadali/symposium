import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className="home">
        <div className="right-home">
            <h1 className='home-heading'>TECHNOKRATZ-2K24</h1>
            <span>National Level Technical Symposium</span>
            <p className='home-right-para'>
             Empowering Innovations, Igniting Ideas Unleashing the Future at TECHNOKRATZ-2K24, where brilliance meets technology on the national stage.</p>
            <div className="event-home">
                <table className='table'>
                    <tbody>
                        <tr>
                            <th className='date'>
                                Date
                            </th>
                            <th className='venue'>
                                Venue
                            </th>
                        </tr>
                        <tr>
                            <td>
                                Mar 20 2024
                            </td>
                            <td>
                                Jayalakshmi Institute Of Technology,
                                Thoppur-636 352,Dharmapuri,Tamilnadu
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <span>Participate Now and Get Amazing Perks!</span>
            <div className="btn">
                <button type="submit">Register Now</button>
            </div>
        </div>
        <div className="left-home">

        </div>
    </div>
  )
}

export default Home