
import { getAllWorkspace } from "@/service/getAllWorkspace";
import Logo from "./logo";

export default async function SidebarComponent(){
   
    const res = await getAllWorkspace();
    
    console.log("res in page ", res);
    return(
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <Logo/>
            <ul className="mt-8">
                <li>
                    <div className="flex justify-between">
                        <p>WorkSpace </p>
                        <p>
                        <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            >
                            <path
                                fillRule="evenodd"
                                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                                clipRule="evenodd"
                            />
                            </svg>


                        </p>
                    </div>
                    <ul className="space-y-2 font-medium">

                        {res?.payload?.map ((item,index) =>(
                             <li key={index}>
                             <a
                                 href="#"
                                 className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                             >      
                                 <p> {item.workspaceName} </p>
                                 <p className="flex justify-end">
                                 <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                     
                                 </svg>
                                 </p>
                                 
                             </a>
                             </li>
                        ) )}
                             
                    </ul>
                </li>
                <li>
                <div className="flex justify-between">
                    <p> Favorite </p>
                    <p>
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                        >
                        <path
                            stroke="currentColor"
                            strokeWidth={2}
                            d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                        />
                        </svg>


                    </p>
                </div>
                </li>
            </ul>
            <ul className="space-y-2 font-medium">
                <li>
                <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >      
                    <span className="flex-1 ms-3 whitespace-nowrap">HRD Design</span>
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >    
                    <span className="flex-1 ms-3 whitespace-nowrap">Website Design</span>
                </a>
                </li>
               
            </ul>
        </div>
        
    )
}