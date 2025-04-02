import CardComponent from "@/components/card";
import "../globals.css";
import Logo from "@/components/logo";
import Sidebar from "@/components/sidebar";
import SidebarComponent from "@/components/sidebar";
import ProfileComponet from "@/components/profile";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
            <>

        {/* <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
        <span className="sr-only">Open sidebar</span>
        <svg
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        />
        </svg>
        </button> */}
        <div className="grid grid-cols-12">
        <aside className="col-span-3 ">
           <SidebarComponent />
        </aside>
        <div className="col-span-9">
            <ProfileComponet />
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div className="grid grid-cols-3 gap-4 mb-4">  
            <CardComponent />
            <CardComponent />
            <CardComponent />
           
        </div>
        </div>
        </div>     
        </div>
       
    </>

        {children}
        </body>
    </html>
  );
}
