import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { logOutAction } from '../redux/feature/authAction';
const Navbar = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [appDropdownOpen, setAppDropdownOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const toggleAppDropdown = () => {
        setAppDropdownOpen(!appDropdownOpen);
    };

    const toggleProfileDropdown = () => {
        setProfileDropdownOpen(!profileDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
        setAppDropdownOpen(false);
        setProfileDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const logoutUser = () => {
        logOutAction(navigate)
    }

    return (
        <>
            <nav className="flex pt-1 px-5 justify-between items-center bg-white">
                <div className="flex px-5 items-center justify-center mb-4 ml-4 gap-2 pt-3">

                    <svg className='cursor-pointer lg:block hidden' width="26px" height="26px" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
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
                    <h1 className="font-bold lg:block hidden text-3xl cursor-pointer text-gray-500">Frest</h1>
                    <a className="lg:hidden inline-block py-2 px-4 no-underline  xl:me-6" href="javascript:void(0)">
                        <i className="bx bx-menu bx-sm" />
                    </a>

                </div>

                <ul ref={dropdownRef} className='flex items-center lg:mx-5 sm:mx-2 gap-5'>
                    <li className="navbar-search-wrapper me-2 xl:me-0">
                        <a className="inline-block py-2 px-4 no-underline search-toggler" href="javascript:void(0);">
                            <i className="bx bx-search bx-sm" />
                        </a>
                    </li>

                    <li onClick={toggleAppDropdown} className=" relative me-2 xl:me-0">
                        <a className=" py-2 px-4 no-underline inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1 " href="javascript:void(0);" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <i className="bx bx-grid-alt bx-sm" />
                        </a>
                        {appDropdownOpen && (
                            <div className="absolute z-50 min-w-[19rem] right-[-100px] mt-1 text-base bg-white border border-gray-300 rounded py-0">
                                <div className="border-b px-6 mb-0 text-sm text-gray-800 flex items-center py-3 justify-between">
                                    <h5 className="mb-0">Shortcuts</h5>
                                    <a href="javascript:void(0)" className=" text-body">
                                        <i className="bx bx-sm bx-plus-circle"></i>
                                    </a>
                                </div>

                                <div className="flex justify-center hover:bg-gray-100 gap-4 overflow-hidden text-gray-400">
                                    <div className="grid grid-cols-1 border-b md:grid-cols-2 gap-4 items-center">
                                        <div className="flex flex-col items-center border-l-2 rounded-md p-2 box-border">
                                            <span className="bg-gray-100 p-2 rounded-full">
                                                <i className="bx bx-calendar text-2xl text-gray-600" />
                                            </span>
                                            <a href="app-calendar.html" className="block text-gray-600 font-bold text-center">Calendar</a>
                                            <small className="text-muted block text-center">Appointments</small>
                                        </div>
                                        <div className="flex flex-col items-center border-l-0 border-r-2 rounded-md p-2 box-border">
                                            <span className="bg-gray-100 p-2 rounded-full">
                                                <i className="bx bx-food-menu text-2xl text-gray-600" />
                                            </span>
                                            <a href="app-invoice-list.html" className="block text-gray-600 font-bold text-center">Invoice App</a>
                                            <small className="text-muted block text-center">Manage Accounts</small>
                                        </div>
                                    </div>


                                </div>
                            </div>


                        )}
                    </li>

                    <li className="relative group">
                        <a href="javascript:void(0);" className="inline-block py-2 px-4 no-underline" onClick={toggleDropdown}>
                            <i className="bx bx-bell bx-sm" />
                        </a>
                        {isDropdownOpen && (
                            <ul className="absolute min-w-[23rem] rounded-lg flex-col right-[-10px] z-50 mt-2 mx-4 bg-white border ml-10 border-gray-300  py-2 px-6 text-md text-gray-500" data-bs-popper="none">
                                <li className="border-b ">
                                    <div className=" rounded-xl flex items-center justify-between py-3">
                                        <h1 className="font-bold text-xl mb-0">Notification</h1>
                                        <a href="javascript:void(0)" className="text-[25px]" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark all as read">
                                            <i className="bx fs-4 bx-envelope-open" />
                                        </a>
                                    </div>
                                </li>

                                <li className="">
                                    <ul className="">
                                        <li className=" border-b my-5 ">
                                            <div className="flex pb-3">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img src="src/assets/images/1.png" className="rounded-full w-8 h-auto" alt="User Avatar" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow text-gray-400">
                                                    <h3 class="mb-1 font-bold text-gray-500">Congratulation Lettie 🎉</h3>
                                                    <p class="mb-0 text-gray-450">Won the monthly best seller gold badge</p>
                                                    <small class="text-muted">1h ago</small>
                                                </div>


                                            </div>
                                        </li>
                                        <li className=" border-b my-5 ">
                                            <div className="flex pb-3">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img src="src/assets/images/8.png" className="rounded-full w-8 h-auto" alt="User Avatar" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow text-gray-400">
                                                    <h3 class="mb-1 font-bold text-gray-500">New Message ✉️</h3>
                                                    <p class="mb-0 text-gray-450">You have new message from Natalie</p>
                                                    <small class="text-muted">1hr ago</small>
                                                </div>


                                            </div>
                                        </li>
                                        <li className=" border-b my-5 ">
                                            <div className="flex pb-3">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img src="src/assets/images/3.png" className="rounded-full w-8 h-auto" alt="User Avatar" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow text-gray-400">
                                                    <h3 class="mb-1 font-bold text-gray-500">Charles Franklin</h3>
                                                    <p class="mb-0 text-gray-450">Accepted your connection</p>
                                                    <small class="text-muted">12hr ago</small>
                                                </div>


                                            </div>
                                        </li>
                                        <li className=" border-b my-5 ">
                                            <div className="flex pb-3">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img src="src/assets/images/10.png" className="rounded-full w-8 h-auto" alt="User Avatar" />
                                                    </div>
                                                </div>
                                                <div class="flex-grow text-gray-400">
                                                    <h3 class="mb-1 font-bold text-gray-500">Whoo! You have new order 🛒</h3>
                                                    <p class="mb-0 text-gray-450">ACME Inc. made new order $1,154</p>
                                                    <small class="text-muted">1 day ago</small>
                                                </div>


                                            </div>
                                        </li>
                                        {/* Repeat similar structure for other list items */}
                                    </ul>
                                    <div className="ps__rail-x">
                                        <div className="ps__thumb-x" tabIndex={0} />
                                    </div>
                                    <div className="ps__rail-y">
                                        <div className="ps__thumb-y" tabIndex={0} />
                                    </div>
                                </li>


                                <li className="dropdown-menu-footer border-top">
                                    <a href="javascript:void(0);" className="dropdown-item flex justify-center p-3">
                                        View all notifications
                                    </a>
                                </li>
                            </ul>


                        )}
                    </li>

                    <li onClick={toggleProfileDropdown} className="relative group">
                        <a className="py-2" href="javascript:void(0);" data-bs-toggle="dropdown">
                            <img src="src/assets/images/2.png" className="rounded-full w-8 h-auto" alt="User Avatar" />
                        </a>
                        {profileDropdownOpen && (
                            <ul className="absolute min-w-[14rem] flex-col right-[-30px] z-50 mt-4 mx-4 bg-white border ml-10 border-gray-300 rounded py-2 px-6 text-md text-gray-500" data-bs-popper="none">
                                <li className="flex items-start border-b-2   pb-3 gap-4  text-lg ">
                                    <a href="pages-account-settings-account.html" className="dropdown-item flex items-center">
                                        <div className="avatar avatar-online overflow-hidden rounded-full w-10 h-10">
                                            <img src="src/assets/images/1.png" alt="" className="object-cover w-full h-full" />
                                        </div>
                                        <div className="ml-3">
                                            <span className="font-semibold block leading-4 text-gray-800">John Doe</span>
                                            <small className="text-gray-600">Admin</small>
                                        </div>
                                    </a>
                                </li>

                                <li className="flex items-start   pb-3 gap-4  text-lg ">
                                    <a href="pages-profile-user.html" className="dropdown-item flex items-center">
                                        <i className="bx bx-user me-2 text-gray-600" />
                                        <span className="align-middle">My Profile</span>
                                    </a>
                                </li>
                                <li className="flex items-start   pb-3 gap-4  text-lg ">
                                    <a href="pages-account-settings-account.html" className="dropdown-item flex items-center">
                                        <i className="bx bx-cog me-2 text-gray-600" />
                                        <span className="align-middle">Settings</span>
                                    </a>
                                </li>
                                <li className="flex items-start border-b-2   pb-3 gap-4  text-lg ">
                                    <a href="pages-account-settings-billing.html" className="dropdown-item flex items-center">
                                        <i className="bx bx-credit-card me-2 text-gray-600" />
                                        <span className="flex-grow-1 align-middle">Billing</span>
                                        <span className="badge badge-center rounded-pill bg-danger text-white w-6 h-6">4</span>
                                    </a>
                                </li>

                                <li className="flex items-start   pb-3 gap-4  text-lg ">
                                    <a href="pages-help-center-landing.html" className="dropdown-item flex items-center">
                                        <i className="bx bx-support me-2 text-gray-600" />
                                        <span className="align-middle">Help</span>
                                    </a>
                                </li>
                                <li className="flex items-start   pb-3 gap-4  text-lg ">
                                    <a href="pages-faq.html" className="dropdown-item flex items-center">
                                        <i className="bx bx-help-circle me-2 text-gray-600" />
                                        <span className="align-middle">FAQ</span>
                                    </a>
                                </li>
                                <li className="flex items-start  border-b-2  pb-3 gap-4  text-lg ">
                                    <a href="pages-pricing.html" className="dropdown-item flex items-center">
                                        <i className="bx bx-dollar me-2 text-gray-600" />
                                        <span className="align-middle">Pricing</span>
                                    </a>
                                </li>

                                <li onClick={logoutUser} className="flex items-start cursor-pointer  pb-3 gap-4  text-lg ">
                                    <div className="dropdown-item flex items-center text-red-600" target="_blank">
                                        <i className="bx bx-power-off me-2 text-red-600" />
                                        <span className="align-middle">Log Out</span>
                                    </div>
                                </li>
                            </ul>





                        )}
                    </li>
                </ul>



            </nav>
        </>
    );
}

export default Navbar;
