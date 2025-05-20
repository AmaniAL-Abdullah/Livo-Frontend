import React from 'react'

function TestPage() {
    return (
        <div className="relative w-full h-screen">
            {/* SVG كخلفية */}
            <div className="absolute inset-0 -z-10">
                <svg
                    viewBox="0 0 1920 1080"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <rect width="1920" height="1080" fill="#FEF1EE" />
                </svg>
            </div>

            <div className="relative z-10 text-center pt-40">
                <h1 className="text-4xl font-bold text-[#141424]">Livo Test Page</h1>
            </div>
        </div>
    )
}
    


export default TestPage
