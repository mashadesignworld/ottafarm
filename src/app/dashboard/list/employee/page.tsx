import TableSearch from "@/components/TableSearch"
import Image from "next/image"
const EmployeeList =()=> {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex-1 m-4 mt-0">
        
          <div className='flex items-center justify-between p-4'>
                   All Employees
                   <div className="">
                    <TableSearch />
                    <div className="">
                        <button>
                        <Image src="/filter.png" alt="filter" width={14} height={14}/>
                        </button>
                    </div>
                   </div>
              </div>
        </div>
    )
}
export default EmployeeList