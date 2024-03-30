/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {

    const {signIn} = useContext(AuthContext)

    const captchaRef = useRef(null);

    const [disabled,setDisabled] = useState(true);
    // for reload captcha
    useEffect(() => {
        // how much character i need
        loadCaptchaEnginge(4);
    },[])
   

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // const captcha= form.captcha.value;
        console.log(email, password)

        signIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
    }

    const handleValidateCaptcha = () =>{
        const captchaValue = captchaRef.current.value;
        console.log(captchaValue);
        if (validateCaptcha(captchaValue)) {
           setDisabled(false);
        }
        //optional (dewa na dewa same)
        // else {
        //     setDisabled(true)
        // }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm 
                    shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <p>Login here</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            {/* for catpcha */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input ref={captchaRef} type="text" name='captcha' placeholder="captcha" className="input input-bordered" required />
                                <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <Link to='/registration'>Registration

                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;