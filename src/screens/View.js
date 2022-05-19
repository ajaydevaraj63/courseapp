import React from 'react'
import Nav from './Nav'

const View = () => {
      var list=[{"_id":"6285a2a31887dc001619415c","courseTitle":"Python Django Internship","courseDescription":"Internship programme","courseDuration":"3 months","courseVenue":"ONLINE","courseDate":"02/01/2023"},{"_id":"6285a2c21887dc001619415d","courseTitle":"MERN Stack","courseDescription":"Internship programme","courseDuration":"6 months","courseVenue":"ONLINE","courseDate":"02/06/2022"}]
  return (
    <div><Nav/>
          
    <table class="table">
  <thead>
    <tr>
     
      <th scope="col">title</th>
      <th scope="col">description</th>
      <th scope="col">duration</th>
      <th scope="col">course date</th>
      <th scope="col">course venue</th>
      
      
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
</table>
         </div>
  )
}

export default View