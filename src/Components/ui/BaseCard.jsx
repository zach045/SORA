const BaseCard = ({stats}) => {
    return (
        <>
            {stats.map((stat, index) => (
                <div className="shadow-md shadow-gray-200 rounded-md flex flex-col justify-center items-center p-6"
                key={index}>
                    <h3 className="mt-2 text-sky-600 text-3xl font-bold">{stat.title}</h3>
                    <span className="mb-2 text-gray-500">{stat.content}</span>
                </div>
            ))}
        </>
    )
}

export default BaseCard;