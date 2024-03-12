import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {

    const [isDashboardsOpen, setDashboardsOpen] = useState(false);
    const [isLayoutOpen, setLayoutOpen] = useState(false);

    const toggleDashboards = () => {
        setDashboardsOpen(!isDashboardsOpen);
    };

    const toggleLayout = () => {
        setLayoutOpen(!isLayoutOpen);
    };


    return (
        <aside className="sm:px-4 bg-white">
            <div className="">
                <ul className="flex text-lg gap-6 px-10 py-4">
                    <li li className={`active:bg-blue-100 ${isDashboardsOpen ? 'hover:active:bg-blue-100' : ''}`} >
                        <div
                            className="flex items-center justify-center gap-2"
                            onMouseEnter={toggleDashboards}
                            onMouseLeave={toggleDashboards}
                        >
                            <Link to="/" className="flex items-center justify-center  gap-2 ">
                                <i className="menu-icon tf-icons bx bx-home-circle" />
                                <div>Dashboards</div>
                            </Link>
                            {isDashboardsOpen && (
                                <ul className="absolute left-0 z-50 mt-[130px] bg-white border ml-5 border-gray-300 rounded py-2 px-6 gap-4">
                                    <li className="py-2 flex gap-4 items-center">
                                        <i className="menu-icon tf-icons bx bx-pie-chart-alt-2"></i>
                                        <div>Analytics</div>
                                    </li>
                                    <li className="py-2 flex gap-4 items-center">
                                        <i className="menu-icon tf-icons bx bx-analyse"></i>
                                        <div>eCommerce</div>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </li>

                    <li>
                        <div
                            className="flex items-center justify-center mb-4 ml-4 gap-2"
                            onMouseEnter={toggleLayout}
                            onMouseLeave={toggleLayout}
                        >
                            <div className="flex items-center justify-center  gap-2 ">
                                <i className="menu-icon tf-icons bx bx-detail" />
                                Setting
                            </div>
                            {isLayoutOpen && (
                                <ul className="absolute flex-col left-[140px] z-50 mt-[250px] bg-white border ml-10 border-gray-300 rounded py-2 px-6 text-md text-gray-500">
                                    <li className="flex items-center gap-3 pb-3">

                                        <i className="menu-icon tf-icons bx bx-menu"></i>
                                        <Link to="repair-categorys">Category</Link>

                                    </li>
                                    <li className="flex items-center gap-3 pb-3">

                                        <i className="menu-icon tf-icons bx bx-vertical-center"></i>
                                        <div>Vertical</div>

                                    </li>
                                    <li className="flex items-center gap-3 pb-3">
                                        <i className="menu-icon tf-icons bx bx-fullscreen"></i>
                                        <div>Fluid</div>
                                    </li>
                                    <li className="flex items-center gap-3 pb-3">

                                        <i className="menu-icon tf-icons bx bx-exit-fullscreen"></i>
                                        <div>Container</div>

                                    </li>
                                    <li className="flex items-center gap-3 pb-3">

                                        <i className="menu-icon tf-icons bx bx-square-rounded"></i>
                                        <div>Blank</div>

                                    </li>
                                </ul>


                            )}
                        </div>
                    </li>
                    <li>
                        <div
                            className="flex items-center justify-center mb-4 ml-4 gap-2"

                        >
                            <Link to="repair-categorys" className="flex items-center justify-center  gap-2 ">
                                <i className="menu-icon tf-icons bx bx-detail" />
                                <div>Category</div>
                            </Link>

                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default NavMenu;
