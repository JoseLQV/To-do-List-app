import React from "react";
import "./dashboard.css";
import Calendar from "react-calendar";
import CalendarCard from "../../components/calendar/calendar";




export default function Dashboard() {
  return (
    <body>
         <div className="page-wrapper">
            <div className="dashboard-wrapper">
                <div className="left-side">Left</div>
                <div className="middle">
                  <p className="MidHeader">To Do List</p>


                </div>

                <div className="right-side">
                  <CalendarCard/>
                </div>

            </div>
        
        </div>



    </body>
   
  )

}