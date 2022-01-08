import React from 'react'

const Heading = () => {
    return (
        <div>
         <div className="bg-white w-full max-h-96">
            <div className="flex flex-wrap items-center text-sm text-center w-4/5 h-28 bg-gray-100 m-0 mx-auto md:gap-16 lg:gap-32">
                <div className="headings pt-4">
                    <h1 className="text-xs font-semibold w-32">Business Analyst</h1>
                    <p className="pt-4">Contract</p>
                </div>
                <div>
                    <h1 className="text-xs">
                        <span>
                            <i class="fas fa-map-marker-alt"></i>
                        </span>{" "}
                        Washington D.C, United
                    </h1>
                    <p>State</p>
                </div>

                <div className="text-xs">
                    <p>20001</p>
                </div>

                <div className="text-xs">
                    <p>Experience: 0 yrs</p>
                </div>

                <div>
                    <button className="bg-blue-400 w-20 h-8 rounded-lg hover:text-blue-500 hover:font-bold hover:bg-indigo-100">
                        Apply Now
                    </button>
                </div>
            </div>
            <hr className="w-4/5 m-0 mx-auto mt-4" />
        </div>
        </div>
    )
}

export default Heading
