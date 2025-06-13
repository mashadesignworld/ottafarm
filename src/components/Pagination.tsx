const Pagination = () =>{
    return (
        <div className="flex items-center justify-between p-4">
            <span className="text-gray-500">Showing 1-10 of 50</span>
            <div className="flex items-center gap-2">
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                    Previous
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                    Next
                </button>
            </div>
        </div>
    );
}
export default Pagination;