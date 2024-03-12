import React from 'react'

const Footer = () => {
    return (
        <div classname="flex flex-col h-screen">
            <footer className="mt-auto text-gray-500 ">
                <div className="flex flex-wrap justify-between pb-0 pt-8 absolute ">
                    <div className="mb-2 md:mb-0 relative">
                        © 2023, made with ❤️ by
                        <a href="https://pixinvent.com" target="_blank" className="footer-link fw-semibold">PIXINVENT</a>
                    </div>
                </div>
            </footer>

        </div>


    )
}

export default Footer