import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import FormModal from "@/components/FormModal"
import StudentPerformance from "@/components/StudentPerformance"
import Image from "next/image"
import Link from "next/link"

const SingleStudentPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col xl:flex-row gap-4">
          {/* User Card */}
          <div className="bg-xSky py-6 px-4 rounded-md flex-1 flex gap-4">
            {/* image */}
            <div className="w-1/3">
              <Image 
                src="https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="" 
                width={256} 
                height={256} 
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            {/* info */}
            <div className="w-2/3 flex flex-col justify-between gap-4">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold"> Student Pump </h1>
              <FormModal
                table="student"
                type="update"
                data={{
                  id: 1,
                  username: "deanguerrero",
                  email: "deanguerrero@gmail.com",
                  password: "password",
                  firstName: "Dean",
                  lastName: "Guerrero",
                  phone: "+1 234 567 89",
                  address: "1234 Main St, Anytown, USA",
                  bloodType: "A+",
                  dateOfBirth: "2000-01-01",
                  sex: "female",
                  img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                }}
              />
            </div>  
            <p className="text-sm text-gray-500"> Hiiiiiiiiiiiiiii krubbbbbbbbb</p>
            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
              <div className="w-full md:w-1/3 xl:w-full 2xl:w-full flex items-center gap-2">
                <Image src="/blood.png" alt="" width={14} height={14}/>
                <span>blood type</span>
              </div>
              <div className="w-full md:w-1/3 xl:w-full 2xl:w-full flex items-center gap-2">
                <Image src="/date.png" alt="" width={14} height={14}/>
                <span>January 2025</span>
              </div>
              <div className="w-full md:w-1/3 xl:w-full 2xl:w-full flex items-center gap-2">
                <Image src="/mail.png" alt="" width={14} height={14}/>
                <span>imtoey@gmail.com</span>
              </div>
              <div className="w-full md:w-1/3 xl:w-full 2xl:w-full flex items-center gap-2">
                <Image src="/phone.png" alt="" width={14} height={14}/>
                <span>+66-888-xx-xxxx</span>
              </div>
            </div>
            </div>
          </div>
          {/* Small user Card */}
          <div className="flex-1 flex gap-2 justify-between flex-wrap">
            {/* mini Card 1*/}
            <div className="bg-white p-4 rounded-md flex justify-center md:justify-start gap-2 w-full md:w-[46%] xl:w-[45%] 2xl:w-[48%]">
              <Image 
                src="/singleAttendance.png" 
                alt="" 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">95% </h1>
                <span className="text-sm text-gray-500">attendance</span>
              </div>
            </div>
            {/* mini Card 2*/}
            <div className="bg-white p-4 rounded-md flex justify-center md:justify-start gap-2 w-full md:w-[46%] xl:w-[45%] 2xl:w-[48%]">
              <Image 
                src="/singleBranch.png" 
                alt="" 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6th </h1>
                <span className="text-sm text-gray-500">grade</span>
              </div>
            </div>
            {/* mini Card 3*/}
            <div className="bg-white p-4 rounded-md flex justify-center md:justify-start gap-2 w-full md:w-[46%] xl:w-[45%] 2xl:w-[48%]">
              <Image 
                src="/singleLesson.png" 
                alt="" 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">69</h1>
                <span className="text-sm text-gray-500">Lesson</span>
              </div>
            </div>
            {/* mini Card 4*/}
            <div className="bg-white p-4 rounded-md flex justify-center md:justify-start gap-2 w-full md:w-[46%] xl:w-[45%] 2xl:w-[48%]">
              <Image 
                src="/singleClass.png" 
                alt="" 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-500">Class</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-4 w-full bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-2">
      {/* Shortcut */}
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Shortcuts</h1>
        <div className="mt-2 flex gap-4 flex-wrap text-xs text-gray-500">
          <Link href={`/list/lessons?classId=${2}`} className="p-3 rounded-md bg-xSkyLight">
            Student&apos;s Lessons
          </Link>
          <Link href={`/list/teachers?classId=${2}`} className="p-3 rounded-md bg-xPurpleLight">
            Student&apos;s Teachers
          </Link>
          <Link href={`/list/exams?classId=${2}`} className="p-3 rounded-md bg-xYellowLight">
            Student&apos;s Exams
          </Link>
          <Link href={`/list/assignments?classId=${2}`} className="p-3 rounded-md bg-pink-50">
            Student&apos;s Assignments
          </Link>
          <Link href={`/list/results?studentId=${"student2"}`} className="p-3 rounded-md bg-xSkyLight">
            Student&apos;s Results
          </Link>
        </div>
      </div>
      {/* Performance */}
      <StudentPerformance />
      <Announcements />
      </div>
    </div>
  )
}

export default SingleStudentPage