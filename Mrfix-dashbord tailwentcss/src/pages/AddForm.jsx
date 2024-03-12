import React from 'react'
import { Form } from '../components'

const AddForm = () => {
    return (
        <>
            <div className='text-gray-500 mx-[50px] '>
                <h4 className="py-3 mb-4 ">
                    <span className=" text-xl">Add /</span> <span className=' text-xl font-bold'> Form</span>
                </h4>



                <Form />

            </div>
        </>
    )
}

export default AddForm