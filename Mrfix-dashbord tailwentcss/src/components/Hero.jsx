import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <>

            <div className='text-gray-500 mx-[50px] '>
                <div className='flex justify-between my-4'>
                    <h4 className="py-3 mb-4 ">
                        <span className=" text-lg">Tables /</span> <span className=' text-xl font-bold'> Basic Tables</span>
                    </h4>
                    <button className='text-xl text-white mx-10 px-[30px] py-0 my-4  bg-[blue]'><Link to="add">Add</Link></button>


                </div>


                <div className="overflow-x-auto   ">
                    <h5 className="py-3 px-6 text-xl rounded-lg mb-0 bg-white border-b-1 font-bold">Table Basic</h5>


                    <table className="min-w-full bg-white  ">
                        <thead className=' border-b'>
                            <tr >
                                <th className="py-2 px-4">Project</th>
                                <th className="py-2 px-4">Client</th>
                                <th className="py-2 px-4">Users</th>
                                <th className="py-2 px-4">Status</th>
                                <th className="py-2 px-4">Actions</th>

                            </tr>

                        </thead>
                        <tbody>
                            <tr className="text-center ">
                                <td className="py-3 px-4 border-b">
                                    <i className="fab fa-angular fa-lg text-red-600 me-3" /> <strong>Angular Project</strong>
                                </td>
                                <td className="py-3 px-4 border-b">Albert Cook</td>
                                <td className="py-3 px-4 border-b flex justify-center"> {/* Added flex and justify-center classes */}
                                    <ul className="list-unstyled users-list m-0 avatar-group flex items-center">
                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title data-bs-original-title="Lilian Fuller">
                                            <img src="src/assets/images/5.png" alt="Avatar" className="rounded-full w-8 h-8" />
                                        </li>
                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title data-bs-original-title="Sophia Wilkerson">
                                            <img src="src/assets/images/6.png" alt="Avatar" className="rounded-full w-8 h-8" />
                                        </li>
                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title data-bs-original-title="Christina Parker">
                                            <img src="src/assets/images/7.png" alt="Avatar" className="rounded-full w-8 h-8" />
                                        </li>
                                    </ul>
                                </td>
                                <td className=" border-b ">
                                    Active
                                </td>
                                <td className="py-3 px-4 border-b">
                                    <div className="relative">
                                        <button type="button" className="btn btn-secondary dropdown-toggle" >
                                            <i className="bx bx-dots-vertical-rounded" />
                                        </button>

                                    </div>
                                </td>

                            </tr>
                            <tr className="text-center ">
                                <td className="py-3 px-4 border-b">
                                    <i className="fab fa-angular fa-lg text-red-600 me-3" /> <strong>Angular Project</strong>
                                </td>
                                <td className="py-3 px-4 border-b">Albert Cook</td>
                                <td className="py-3 px-4 border-b flex justify-center"> {/* Added flex and justify-center classes */}
                                    <ul className="list-unstyled users-list m-0 avatar-group flex items-center">
                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title data-bs-original-title="Lilian Fuller">
                                            <img src="src/assets/images/5.png" alt="Avatar" className="rounded-full w-8 h-8" />
                                        </li>
                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title data-bs-original-title="Sophia Wilkerson">
                                            <img src="src/assets/images/6.png" alt="Avatar" className="rounded-full w-8 h-8" />
                                        </li>
                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title data-bs-original-title="Christina Parker">
                                            <img src="src/assets/images/7.png" alt="Avatar" className="rounded-full w-8 h-8" />
                                        </li>
                                    </ul>
                                </td>
                                <td className=" border-b ">
                                    Active
                                </td>
                                <td className="py-3 px-4 border-b">
                                    <div className="relative">
                                        <button type="button" className="btn btn-secondary dropdown-toggle" >
                                            <i className="bx bx-dots-vertical-rounded" />
                                        </button>

                                    </div>
                                </td>

                            </tr>
                            <tr className="text-center ">
                                <td className="py-3 px-4 border-b">
                                    <i className="fab fa-angular fa-lg text-red-600 me-3" /> <strong>Angular Project</strong>
                                </td>
                                <td className="py-3 px-4 border-b">Albert Cook</td>
                                <td className="py-3 px-4 border-b flex justify-center"> {/* Added flex and justify-center classes */}
                                    <ul className="list-unstyled users-list m-0 avatar-group flex items-center">
                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title data-bs-original-title="Lilian Fuller">
                                            <img src="src/assets/images/5.png" alt="Avatar" className="rounded-full w-8 h-8" />
                                        </li>
                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title data-bs-original-title="Sophia Wilkerson">
                                            <img src="src/assets/images/6.png" alt="Avatar" className="rounded-full w-8 h-8" />
                                        </li>
                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title data-bs-original-title="Christina Parker">
                                            <img src="src/assets/images/7.png" alt="Avatar" className="rounded-full w-8 h-8" />
                                        </li>
                                    </ul>
                                </td>
                                <td className=" border-b ">
                                    Active
                                </td>
                                <td className="py-3 px-4 border-b">
                                    <div className="relative">
                                        <button type="button" className="btn btn-secondary dropdown-toggle" >
                                            <i className="bx bx-dots-vertical-rounded" />
                                        </button>

                                    </div>
                                </td>

                            </tr>



                        </tbody>
                    </table>
                </div>

            </div>


        </>
    );
};

export default Hero;
