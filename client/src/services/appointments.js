export const getAppointments = (status)=>{
    const url = 'http://localhost:3000/appointments'
   return  fetch(url+(status?`?status=${status}`: ""), 
   {credentials: "include"} 
   )
    .then(res => res.json()).then(data => data)
 
}