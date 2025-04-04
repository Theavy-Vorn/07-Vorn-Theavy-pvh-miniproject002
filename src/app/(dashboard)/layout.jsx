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
