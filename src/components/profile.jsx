import { Icon } from "lucide-react";

export default function ProfileComponet(){
    return(
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex md:order-2 space-x-3 md:space-x-0 ">
      <a href="#">WorkSpace</a>
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        
    </svg>

      <a href="#">HRD Design</a>
    </div>
    <a
      href="https://i.pinimg.com/236x/49/7a/24/497a24dc7626a2a6cf07e544679199c1.jpg"
      className="flex items-center space-x-3 "
    >
    <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
   
    </svg>

      <img
        src="https://i.pinimg.com/236x/49/7a/24/497a24dc7626a2a6cf07e544679199c1.jpg"
        className="h-20 rounded-full"   
      />
      <span className="self-center text-2xl">
        <p>Theavy Vorn</p>
        <p>theavyvorn8t8@gmail.com</p>
      </span>
    </a>
   
    
  </div>
</nav>

    )
}