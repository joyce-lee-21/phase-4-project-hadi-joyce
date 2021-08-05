export const getAppointments = (status)=>{
    const url = 'http://localhost:3000/appointments'
   return  fetch(url+(status?`?status=${status}`: ""), 
   {credentials: "include"} 
   )
    .then(res => res.json()).then(data => data)
 
}
export const acceptAppointment = (id)=>{
    const url = `http://localhost:3000/appointments/${id}`
   return  fetch(url, 
   {
       headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},credentials: "include", method: "PUT", body: JSON.stringify({appointment: {status: "confirmed"}})} 
   )
    .then(res => res.json()).then(data => data)
 
}

export const getAppointmentsSummary = ()=>{
    const url = 'http://localhost:3000/appointments/summary'
   return  fetch(url, 
   {credentials: "include"} 
   )
    .then(res => res.json())
   }
