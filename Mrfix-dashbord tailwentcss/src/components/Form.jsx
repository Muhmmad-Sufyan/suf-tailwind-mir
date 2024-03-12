import React from 'react'

const Form = () => {
    return (
        <>
            <div className="relative flex flex-col min-w-0 rounded-xl my-[50px] bg-white  mb-4">
                <h1 className="py-3 px-6 mb-0  border-b-1 text-xl font-bold  text-gray-450">Multi Column with Form Separator</h1>
                <form className="flex-auto p-6">
                    <div className="flex flex-wrap  g-3">
                        <div className="md:w-1/2 pr-4 pl-4">
                            <label className="form-label" htmlFor="multicol-username">Username</label>
                            <input type="text" id="multicol-username" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="john.doe" />
                        </div>
                        <div className="md:w-1/2 pr-4 pl-4">
                            <label className="form-label" htmlFor="multicol-email">Email</label>

                            <input type="text" id="multicol-email" className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" placeholder="john.doe" aria-label="john.doe" aria-describedby="multicol-email2" />

                        </div>

                    </div>
                    <hr className="my-4 mx-n4" />

                    <div className="pt-4">
                        <button type="submit" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 sm:me-4 me-1">Submit</button>
                        <button type="reset" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline btn-label-secondary">Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form