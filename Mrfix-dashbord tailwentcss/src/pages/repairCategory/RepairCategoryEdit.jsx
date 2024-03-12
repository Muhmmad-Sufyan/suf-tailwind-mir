import React, { useState } from 'react'

import { Link } from 'react-router-dom';
const RepairCategoryEdit = () => {
    const [category, setCategory] = useState({
        name: '',
        slug: '',
        description: '',
        picture: '',
    });



    const handleSubmit = (e) => {
        e.preventDefault();

        setCategory(prev => ({ ...prev, [e.target.name]: e.target.value }))
        console.log(category)

    };

    return (
        <div className='text-gray-500 mx-[50px] '>
            <h4 className='py-3 mb-4 '>
                <span className='text-xl'>
                    <Link to='/'>Home</Link> /
                </span>
                <span className='text-xl'>
                    <Link to='/repair-categorys'>Repair Category</Link> /
                </span>{' '}
                <span className='text-xl font-bold'> New</span>
            </h4>
            <div className='bg-white w-[700px] h-[600px] shadow-[500px] rounded-lg p-6 mb-4'>
                <div className='flex items-center justify-between'>
                    <h5 className='text-xl font-semibold mb-0'>Add New Repair Category</h5>
                </div>
                <form className='flex flex-col items-start' onSubmit={handleSubmit}>
                    <div className='mb-3 flex items-center gap-[175px] pt-5'>
                        <label className='block text-lg pr-5 text-gray-600' htmlFor='basic-default-name'>
                            Name
                        </label>
                        <input
                            type='text'
                            name='name'
                            value={category.name}
                            onChange={handleSubmit}
                            className='mt-1 p-2 w-[400px] border rounded-md'
                            id='basic-default-name'
                            placeholder='John Doe'
                        />
                    </div>
                    <div className='mb-3 flex items-center gap-[185px] pt-5'>
                        <label className='block text-lg pr-5 text-gray-600' htmlFor='basic-default-slug'>
                            SLug
                        </label>
                        <input
                            type='text'
                            name='slug'
                            value={category.slug}
                            onChange={handleSubmit}
                            className='mt-1 p-2 w-[400px] border rounded-md'
                            id='basic-default-slug'
                            placeholder='ACME Inc.'
                        />
                    </div>
                    <div className='mb-3 flex items-center gap-[135px] pt-5'>
                        <label className='block text-lg pr-5 text-gray-600' htmlFor='basic-default-description'>
                            Description
                        </label>
                        <textarea
                            id='basic-default-description'
                            name='description'
                            value={category.description}
                            onChange={handleSubmit}
                            className='mt-1 p-2 w-[400px] border rounded-md'
                            placeholder='Hi, Do you have a moment to talk Joe?'
                            style={{ height: '71px' }}
                        ></textarea>
                    </div>
                    <div className='mb-3 flex items-center gap-[150px] pt-5'>
                        <label className='block text-lg pr-5 text-gray-600' htmlFor='image-upload'>
                            Picture
                        </label>
                        <div className='grid grid-cols-1'>
                            <h1 className='w-[150px] h-[150px] bg-gray-300 text-black mb-1 px-3  font-bold text-2xl py-[60px] border'> 200 X 200</h1>

                            <input
                                type='file'
                                id='image-upload'
                                name='picture'
                                onChange={handleSubmit}
                                className='hidden'
                                accept='image/*'
                            />
                            <label htmlFor='image-upload' className='cursor-pointer p-2 border bg-blue-500 text-white rounded-md'>
                                Click to Upload
                            </label>
                        </div>
                    </div>
                    <div className='flex ml-[450px] gap-3 mt-3 mb-[10px]'>
                        <button type='button' className='bg-blue-500 text-white py-2 px-5 rounded-md'>
                            Cancel
                        </button>
                        <button type='submit' className='bg-blue-500 text-white py-2 px-5 rounded-md'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RepairCategoryEdit