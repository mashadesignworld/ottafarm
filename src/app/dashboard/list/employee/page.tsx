import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import Image from "next/image"
const EmployeeList =()=> {
    return (
        <>
        <div className="bg-white p-4 rounded-lg shadow-md flex-1 m-4 mt-0">
        
          <div className='flex items-center justify-between p-4'>
                   <h1 className="hidden md:block text-lg font-semibold">All Employees</h1>
                   <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
                    <TableSearch />
                    <div className="flex items-center gap-4 self-end">
                        <button className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center  hover:bg-green-600 transition-colors">
                        <Image src="/filter.png" alt="filter" width={14} height={14}/>
                        </button>
                         <button className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center  hover:bg-green-600 transition-colors">
                        <Image src="/sort.png" alt="filter" width={14} height={14}/>
                        </button>
                        <button className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                        <Image src="/plus.png" alt="filter" width={14} height={14}/>
                        </button>
                    </div>
                   </div>
              </div>
        </div>
        <Pagination />
        </>
    )
}
export default EmployeeList