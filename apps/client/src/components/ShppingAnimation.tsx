"use client"

import Lottie from 'lottie-react'
import shoppingAnimation from "../assets/Shopping.json"

const ShppingAnimation = () => {
    return (
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center p-8 rotate-12">
            <Lottie
                animationData={shoppingAnimation}
                className="w-full h-full max-w-md max-h-md"
                loop={true}
                autoplay={true}
            />
        </div>
    )
}

export default ShppingAnimation