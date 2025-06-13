const Pagination = () =>{
    return (
        <div className="flex items-center justify-between p-4 tex-gray-700">
           
            <div className="flex items-center gap-2">
                <button disabled className="bg-green-500 text-white text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                    Previous
                </button>
                 <div className="text-gray-500 flex items-center">
                    <button className="px-2 bg-red-500  rounded-sm text-white">
1
                    </button>
                     <button className="px-2 rounded-sm">
2
                    </button>
                     <button className="px-2 rounded-sm">
3
                    </button>
                 </div>
                <button className="bg-red-500 text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                    Next
                </button>
            </div>
        </div>
    );
}
export default Pagination;