import Image from "next/image";
const TableSearch = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800">
       <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-gray-300 ring-[1.5px]  px-2'>
              <Image src="/search.png" alt="icon" width={14} height={14}/>
              <input type="text" placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none'/>
             </div>
    </div>
  );
}
export default TableSearch;