import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { authLoginAction } from '../redux/feature/authAction';
const Login = () => {
    const navigate = useNavigate();
    const { login } = useSelector((state) => state.auth);
    const [auth, setAuth] = useState({ email: "", password: "" })
    const [password, setPassword] = useState(true)
    const handleAuthLogin = (e) => {
        setAuth(prev => ({ ...prev, [e.target.name]: e.target.value }))

    }

    const handlAuth = (e) => {
        e.preventDefault();
        authLoginAction(auth, navigate);
    }
    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            navigate("/");
        }
    }, [login]);
    const handelClick = () => {

        setPassword(!password)
    }

    return (
        <>
            <div className=" flex flex-wrap  text-gray-500 ">

                <div className="hidden lg:flex lg:w-3/5 pr-4 pl-4 xl:w-2/3  items-center">
                    <div className="flex-row text-center mx-auto">
                        <img src="src/assets/pages/login-light.png" alt="Auth Cover Bg color" width={520} className="max-w-full h-auto " data-app-light-img="pages/login-light.png" data-app-dark-img="pages/login-dark.png" />
                        <div className="mx-auto mt-[50px]">
                            <h1 className='font-bold text-2xl '>Discover the powerful admin template 🥳</h1>
                            <p>
                                Perfectly suited for all level of developers which helps you to <br />
                                kick start your next big projects &amp; Applications.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white  w-[900px] h-[870px] pt-[500px]   pr-4 pl-4 xl:w-1/3  items-center  sm:p-12 p-6">
                    <div className="w-px-400 mx-auto ">
                        <div className=" mb-4 ">
                            <Link href="index.html" className="flex items-center gap-2 mb-2">
                                <span className="">
                                    <svg className='cursor-pointer ' width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <title>icon</title>
                                        <defs>
                                            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                                                <stop stopColor="#5A8DEE" offset="0%" />
                                                <stop stopColor="#699AF9" offset="100%" />
                                            </linearGradient>
                                            <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="linearGradient-2">
                                                <stop stopColor="#FDAC41" offset="0%" />
                                                <stop stopColor="#E38100" offset="100%" />
                                            </linearGradient>
                                        </defs>
                                        <g id="Pages" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <g id="Login---V2" transform="translate(-667.000000, -290.000000)">
                                                <g id="Login" transform="translate(519.000000, 244.000000)">
                                                    <g id="Logo" transform="translate(148.000000, 42.000000)">
                                                        <g id="icon" transform="translate(0.000000, 4.000000)">
                                                            <path d="M13.8863636,4.72727273 C18.9447899,4.72727273 23.0454545,8.82793741 23.0454545,13.8863636 C23.0454545,18.9447899 18.9447899,23.0454545 13.8863636,23.0454545 C8.82793741,23.0454545 4.72727273,18.9447899 4.72727273,13.8863636 C4.72727273,13.5423509 4.74623858,13.2027679 4.78318172,12.8686032 L8.54810407,12.8689442 C8.48567157,13.19852 8.45300462,13.5386269 8.45300462,13.8863636 C8.45300462,16.887125 10.8856023,19.3197227 13.8863636,19.3197227 C16.887125,19.3197227 19.3197227,16.887125 19.3197227,13.8863636 C19.3197227,10.8856023 16.887125,8.45300462 13.8863636,8.45300462 C13.5386269,8.45300462 13.19852,8.48567157 12.8689442,8.54810407 L12.8686032,4.78318172 C13.2027679,4.74623858 13.5423509,4.72727273 13.8863636,4.72727273 Z" id="Combined-Shape" fill="#4880EA" />
                                                            <path d="M13.5909091,1.77272727 C20.4442608,1.77272727 26,7.19618701 26,13.8863636 C26,20.5765403 20.4442608,26 13.5909091,26 C6.73755742,26 1.18181818,20.5765403 1.18181818,13.8863636 C1.18181818,13.540626 1.19665566,13.1982714 1.22574292,12.8598734 L6.30410592,12.859962 C6.25499466,13.1951893 6.22958398,13.5378796 6.22958398,13.8863636 C6.22958398,17.8551125 9.52536149,21.0724191 13.5909091,21.0724191 C17.6564567,21.0724191 20.9522342,17.8551125 20.9522342,13.8863636 C20.9522342,9.91761479 17.6564567,6.70030817 13.5909091,6.70030817 C13.2336969,6.70030817 12.8824272,6.72514561 12.5388136,6.77314791 L12.5392575,1.81561642 C12.8859498,1.78721495 13.2366963,1.77272727 13.5909091,1.77272727 Z" id="Combined-Shape2" fill="url(#linearGradient-1)" />
                                                            <rect id="Rectangle" fill="url(#linearGradient-2)" x={0} y={0} width="7.68181818" height="7.68181818" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </span>

                                <h1 className="text-3xl  font-bold">Frest</h1>
                            </Link>

                        </div>
                        <h1 className="mb-2 font-bold">Welcome to Frest! 👋</h1>
                        <p className="mb-4">Please sign-in to your account and start the adventure</p>
                        <form className="mb-3 " onSubmit={handlAuth}>
                            <div className="mb-3 ">
                                <label htmlFor="email">Email or Username</label>
                                <input type="text" className="block  w-full py-1 px-2 mb-1 bg-white  border border-gray-200 rounded" placeholder="Enter your email or username"
                                    name='email' onChange={handleAuthLogin} />
                                <div className=" hidden mt-1 text-sm text-red">
                                    <div >Please enter email / username</div>
                                </div>
                            </div>
                            <div className="mb-3 ">
                                <div className="flex justify-between">
                                    <label>Password</label>
                                    <Link href="auth-forgot-password-cover.html">
                                        <small className='text-[#5a8dee]'>Forgot Password?</small>
                                    </Link>
                                </div>
                                <div className="relative flex items-stretch w-full ">
                                    <input type={password ? "password" : "text"} className="w-full py-1 px-2 mb-1   border border-gray-200 rounded " placeholder="············"
                                        name='password' onChange={handleAuthLogin} />
                                    <span className=" cursor-pointer">
                                        <i onClick={handelClick} className="bx  bx-hide" />
                                    </span>
                                </div>
                                <div className=" hidden mt-1 "><div >
                                    Please enter your password
                                </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="flex px-10 mb-2">
                                    <input className="absolute mt-1 " type="checkbox" />
                                    <label className=" pl-6 mb-0" > Remember Me </label>
                                </div>
                            </div>
                            <Link></Link>
                            <button type='submit' className=" text-center  border font-normal rounded py-1 px-3  bg-blue-600 text-white hover:bg-blue-600  w-full">Sign in</button>
                            <div />
                        </form>

                        <p className="text-center">
                            <span>New on our platform?</span>
                            <Link href="auth-register-cover.html">
                                <span className='text-[#5a8dee]'>Create an account</span>
                            </Link>
                        </p>
                        <div className=" my-4">
                            <div className="text-center"> <pre>------------- or ------------- </pre></div>
                        </div>
                        <div className="flex justify-center">
                            <Link href="javascript:;" className=" text-center hover:bg-[#5a8dee] bg-[#e0e4ef] border  rounded py-1 px-3  me-3">
                                <i className="tf-icons bx bxl-facebook" />
                            </Link>
                            <Link href="javascript:;" className=" text-center text-[#dd4b39] bg-[#fae2df]  border  rounded py-1 px-3   me-3">
                                <i className="tf-icons bx bxl-google-plus" />
                            </Link>
                            <Link href="javascript:;" className="text-center text-[#1da1f2] bg-[#dbf0fd] border py-1 px-3   me-3">
                                <i className="tf-icons bx bxl-twitter" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* /Login */}
            </div>


        </>
    )
}

export default Login