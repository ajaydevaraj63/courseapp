import React, { useState } from 'react'
import Nav from './Nav'

const Register = () => {
     var[title,settitle]=useState('')
     var[duration,setdur]=useState('')
     var[desc,setdesc]=useState('')
     var[venue,setven]=useState('')
     var[date,setdate]=useState('')
     const datain=()=>{
         const data={'courseTitle':title,'courseDecription':desc,'courseDuration':duration,'courseVenue':venue,'courseDate':date,} 
         console.log(data)
}
             
     return (
  
 
    <div>
          <form>
      
    <div class="container">
          <div class="row">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">
                      <div class="row g-3">
                            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                  <label for="" class="form-label"><b>course title</b></label>
                            <input type="text" class="form-control" onChange={(e)=>{settitle(e.target.value)}}/></div>
                            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                  <label for="" class="form-label"><b>duration in days</b>
                                  </label>
                                   <input type="text" class="form-control"onChange={(e)=>{setdur(e.target.value)}}/>
                            </div>
                            <div class="col col-12 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                                  <label for="" class="form-label"><b>discription</b>
                                  </label>
                                  <textarea name="" id="" cols="30" rows="10" class="form-control"onChange={(e)=>{setdesc(e.target.value)}}></textarea>
                            </div>
                            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> <label for="" class="form-label"><b>venue</b>
                            </label>
                             <input type="text" class="form-control"onChange={(e)=>{setven(e.target.value)}}/></div>
                            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                  <label for="" class="form-label"><b>date</b>
                                  </label>
                                   <input type="date" class="form-control"onChange={(e)=>{setdate(e.target.value)}}/>
                            </div>
                            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                  <input type='button' value='register'  class="btn btn-success" onClick={datain}/>
                            </div>
                      </div>
                </div>
          </div>
    </div>

</form></div>
  )
}

export default Register