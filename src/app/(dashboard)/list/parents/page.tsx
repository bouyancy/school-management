import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { parentsData, role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Parent = {
  id:number;
  name:string;
  email?:string;
  students:string[];
  phone:string;
  address:string;
}

const columns =[
  {
    header: "Info",
    accessor:"info",
  },
  {
    header: "Student Name",
    accessor:"students", 
    className:"hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor:"phone", 
    className:"hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor:"address", 
    className:"hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor:"actions",  
  },
];

const ParentsListPage = () => {

  const renderRow = (item:Parent) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-xPurpleLight">
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col justify-center">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500 ">{item?.email}</p>
        </div>
      </td>
      <td className="hidden lg:table-cell">{item.students.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={'/list/teachers/${item.teacherId}'}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-xSky">
              <Image src="/view.png" alt="" width={16} height={16}/>  
            </button>
          </Link>
          {role === "admin" &&
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-xPurple">
              <Image src="/delete.png" alt="" width={16} height={16}/>  
            </button>
          }
        </div>
      </td>
    </tr>
  );
  

  return (
    <div className='bg-white p-4 w-full rounded-md flex-1 m-4 mt-0'>
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex tiems-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-xYellow">
              <Image src="/filter.png" alt="" width={14} height={14}/> 
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-xYellow">
              <Image src="/sort.png" alt="" width={14} height={14}/> 
            </button>
            {role === "admin" && 
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-xYellow">
                <Image src="/plus.png" alt="" width={14} height={14}/> 
              </button>
            }
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns = {columns} renderRow={renderRow} data = {parentsData} />
      {/* Pagination */}
      <Pagination />
    </div>
  )
}

export default ParentsListPage