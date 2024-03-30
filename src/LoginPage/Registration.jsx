/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';




const Registration = () => {

    const { register,handleSubmit,watch, formState: {errors}  } = useForm();

    const onSubmit = data =>{
        console.log(data);
    }

    //field change then see
    console.log(watch("name"));


  
   

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register</h1>
                        
                    </div>
                    <div className="card shrink-0 w-full max-w-sm 
                    shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <p>register here</p>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input  {...register("name", {required:true})} name="name" placeholder="name" className="input input-bordered"  />

                                {errors.name && <span>This field is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type='email' {...register("email", { required: true })}  placeholder="email" className="input input-bordered"  />
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { 
                                    required: true ,
                                    maxLength:20 , 
                                    minLength:6
                                    
                                    
                                    })}  
                                    placeholder="password" className="input input-bordered"  />
                                {errors.password?.type ==='required'  && <span>This field is required</span>}

                                {errors.password?.type === 'minLength' && <span>password must be 6 character</span>}

                                {errors.password?.type === 'maxLength' && <span>password less than 20 character</span>}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                           
                            <div className="form-control mt-6">
                                <button  className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <Link to='/login'>Login
                        
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;