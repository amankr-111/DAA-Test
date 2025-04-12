import React, { useEffect } from 'react'
import './css/fullcalender.css'
function FullCalendar() {
  useEffect(() => {
    const calendarEl = document.getElementById('calendar')
    if (calendarEl && window.FullCalendar) {
      const calendar = new window.FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek',
        allDaySlot: false,
        selectable: true, // ✅ allow selecting time slots
        selectMirror: true,
        titleFormat: {  
            year: 'numeric',  // Year (e.g., 2025)
            month: '2-digit',  // Month (e.g., 04)
            day: '2-digit',    // Day (e.g., 13)
            weekday: 'short'   // Short weekday (e.g., Sun)
          },
        events: [
          {
            title: 'Meeting',
            start: '2025-04-14T10:00:00',
            end: '2025-04-14T11:00:00',
            id: '1',
            backgroundColor: '#BBD8A3',   // Fill color
            borderColor: '#0056b3',
            description: 'Client meeting with updates',
            textColor: '#000000' // Set event text color to black
          },
        ],
  
        eventClick: function (info) {
          info.jsEvent.preventDefault()
          alert(`Event: ${info.event.title}\nStart: ${info.event.start}\nDescription: ${info.event.extendedProps.description}`)
        },
  
        select: function (selectionInfo) {
          const title = prompt("Enter a title for the event:")
          if (title) {
            calendar.addEvent({
              title,
              start: selectionInfo.start,
              end: selectionInfo.end,
              allDay: selectionInfo.allDay
            })
          }
          calendar.unselect()
        }
      })
  
      calendar.render()
    }
  }, [])



  return (
    <div style={{ padding: '20px' }}>
      <h2>Calendar</h2>
      <div
        id="calendar"
        style={{
          minWidth: '1000px',
          margin: 'auto'
        }}
      ></div>
    </div>
  )
}

export default FullCalendar
