import Image from "next/image";
const TableSearch = () => {
  return (
   <div className='w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-gray-300 ring-[1.5px]  px-2'>
          <Image src="/search.png" alt="icon" width={14} height={14}/>
          <input type="text" placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none'/>
         </div>
  );
}
export default TableSearch;