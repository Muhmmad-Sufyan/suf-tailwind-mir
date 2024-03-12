import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import repairCategoryListAciton from '../../redux/repairCategory/repairCategoryAction';

const ReapireCategorys = () => {
    const dispatch = useDispatch();
    const { repairCategories } = useSelector((state) => state.repairCategory);
    const [option, setOption] = useState(false);
    useEffect(() => {
        dispatch(repairCategoryListAciton());
    }, []);

    const toggelDropdown = () => {
        setOption(!option)
    }

    return (
        <div className='text-gray-500 mx-[50px] '>
            <div className='flex justify-between my-4'>
                <h4 className="py-3 mb-4 ">
                    <span className=" text-lg"><Link to="/">Home</Link>  /</span> <span className=' text-xl font-bold'>Reapire Category</span>
                </h4>
                <button className='text-xl text-white mx-10 px-[30px] py-0 my-4  bg-[blue]'><Link to="add">Add</Link></button>


            </div>


            <div className="overflow-x-auto   ">
                <h5 className="py-3 px-6 text-xl rounded-lg mb-0 bg-white border-b-1 font-bold">Categorys</h5>


                <table className="min-w-full bg-white ">
                    <thead className='border-b'>
                        <tr className="text-left">
                            <th className="py-2 px-4">Project</th>
                            <th className="py-2 px-4">Client</th>
                            <th className="py-2 px-4">Users</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repairCategories?.map((repairCategory) => (
                            <tr key={repairCategory.id}>
                                <td className="py-3 px-4 border-b">
                                    <i className="fab fa-angular fa-lg text-red-600 me-3" /> <strong>{repairCategory.name}</strong>
                                </td>
                                <td className="py-3 px-4 border-b">{repairCategory.slug}</td>
                                <td className="py-3 px-4 border-b flex items-center"> {/* Using flex and items-center to align items */}
                                    {repairCategory.createdBy.firstName}
                                </td>
                                <td className="py-3 px-4 border-b">
                                    <div className="relative">
                                        <button type="button" className="btn btn-secondary dropdown-toggle" >
                                            <i onClick={toggelDropdown} className="bx bx-dots-vertical-rounded" />

                                            {option && (<CategoryIteam />)}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>


            </div>

        </div>
    )
}

export default ReapireCategorys

const CategoryIteam = () => {
    return (
        <>

            <Link to="edit"><i class='bx bxs-edit'></i> </Link>
            <i class='bx bx-trash' ></i>
        </>
    )
}