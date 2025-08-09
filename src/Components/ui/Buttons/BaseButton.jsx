const BaseButton = ({children, func, className}) => {
    return (
        <button
        className={`px-2 text-md bg-gradient-to-r from-indigo-500 from-10% to-sky-500 to-90% text-white hover:scale-105 transition duration-100 ease-in-out rounded-md transition font-bold cursor-pointer flex items-center ${className}`}
        onClick={func}>
            {children}
        </button>
    )
}

export default BaseButton;