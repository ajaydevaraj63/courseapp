import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const View = () => {
      var[loadBody,setBody]=useState(true)
      var[list,setlist]=useState([]) 
      axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then(
            (Response)=>{
                  console.log(Response.data)
                  setlist(Response.data)
                  setBody(false)
            }
      )
      
      return (
    <div><Nav/>
 {loadBody?  <div> <div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div></div>  : <table class="table">
  <thead>
    <tr>
     
      <th scope="col">title</th>
      <th scope="col">duration </th>
      <th scope="col">description</th>
      <th scope="col">course date</th>
      <th scope="col">course venue</th>
      <th scope="col">dob</th>
      <th scope="col">email</th>
      
    </tr>
  </thead>
  <tbody>
   
  {
list.map((value,key)=>
<tr>

<td>{value.courseTitle}</td>
<td>{value.courseDuration}</td>
<td>{value.courseDescription}</td>
<td>{value.courseDate}</td>
<td>{value.courseVenue}</td>

</tr>
)

}
   
  </tbody>
</table>}
         </div>
  )
}

export default View