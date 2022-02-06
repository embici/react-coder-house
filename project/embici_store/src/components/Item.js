const Item = ({item}) => {
    return (
        <a href="#" className="flex flex-col items-center w-full bg-white rounded-lg border shadow-md md:flex-col md:max-w-xs hover:bg-gray-100 dark:border-gray-200 dark:bg-gray-100 dark:hover:bg-gray-200">
            <img className="object-cover w-full h-96 rounded-t-lg md:h-96 md:w-full md:rounded-none md:rounded-t-lg" src={item.pictureURL} alt=""/>
            <div className="flex flex-col w-full p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{item.title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-700">{item.price}</p>
            </div>
        </a>
    )
}

export default Item;