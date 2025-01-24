import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"

const ParentPage = () => {
  return (
    <div className='flex-1 p-4 flex gap-4 flex-col md:flex-row'>
      {/* Left : event weekly + daily*/}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (Jone Doe)</h1>
          {/* big calendar here */}
          <BigCalendar />
        </div>
      </div>
      {/* Right : Announcment*/}
      <div className="w-full xl:w-1/3">
        <Announcements />
      </div>
    </div>
  )
}

export default ParentPage