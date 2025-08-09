const SecondaryButton = ({children, func, className}) => {
    return (
        <button
        className={`border border-gray-300 hover:border-black translation duration-500 w-full py-2 rounded-lg cursor-pointer text-center flex items-center justify-center ${className}`}
        onClick={func}>
            {children}
        </button>
    )
}

export default SecondaryButton;