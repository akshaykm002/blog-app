import React from 'react'
import {  Link } from 'react-router-dom'
import logImg from '../Assets/loginImg.png'
import {Form } from 'react-bootstrap'

function Login() {
  return (
    <>
    <div style={{ width: "100%", height: "100vh" }} className='d-flex align-items-center justify-content-center'>
      <div className='w-75 container'>
         <Link to={'/'} style={{ textDecoration: "none" }}>
          <i className="fa-solid fa-arrow-left me-1"></i> Back to Home
        </Link> 
        <div className="card shadow p-5 "style={{backgroundColor:"black"}}>
          <div className="row align-items-center">
            <div className="col lg-6">
              <img src={logImg} alt="" className='rounded-start w-100' />
            </div>
            <div className="col lg-6">
              <div className='d-flex align-items-center flex-column'>
                <h1 className='fw-bolder text-light mt-2'>
                <i class="fa-solid fa-blog"></i>{" "}My Blog
                </h1>
                
                <Form className='text-light w-100'>
                  
               
                  
                       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     
                     <Form.Control type="email" placeholder="Enter Email Id" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     
                     <Form.Control type="password" placeholder="Enter Password"/>
                   </Form.Group>
                  
                    {/* <div className='d-flex align-items-center'>
                        <button  className='btn btn-light mb-2 me-2'>Register</button>
                        { <p>Already have account? click here to <Link to={'/login'}>Login</Link></p> }
                    </div> */}
                     <div>
                     <button className='btn btn-light mb-2'>Login</button>
                     { <p>New User? Click here to <Link to={'/register'}>Register</Link></p> }
                 </div>
                   
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login