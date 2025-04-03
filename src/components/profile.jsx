import { getAllUser } from "@/service/getallUser";
import { Icon } from "lucide-react";

export default async function ProfileComponet(){
    const user = await getAllUser();
    console.log("user in page ", user);
    return(
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex md:order-2 space-x-3 md:space-x-0 ">
      <a href="#">WorkSpace</a>
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        
    </svg>

      <a href="#">HRD Design</a>
    </div>
  

     


      {user?.payload ? (
        <div className="flex flex-ends">
          <img
            src={user.payload.profile}
            className="h-20 rounded-full ml-[20px]"
            alt="Profile"
          />
          <div className="ml-[20px]">
            <p className="text-2xl">{user.payload.username}</p>
            <p className="text-green-400 text-xl">{user.payload.email}</p>
          </div>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
   
    
  </div>
</nav>

    )
}