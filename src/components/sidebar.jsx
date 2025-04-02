import Logo from "./logo";

export default function SidebarComponent(){
    return(
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <Logo/>
            <ul className="mt-8">
                <li>
                    <div className="flex justify-between">
                        <p>WorkSpace </p>
                        <p>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            </svg>
                        </p>
                    </div>
                    <ul className="space-y-2 font-medium">
                        <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >      
                            <p> HRD Design </p>
                            <p className="flex justify-end">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                
                            </svg>
                            </p>
                            
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
                        <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >      
                            <span className="flex-1 ms-3 whitespace-nowrap">Mobile Design</span>
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >      
                            <span className="flex-1 ms-3 whitespace-nowrap">Spring Design</span>
                        </a>


                        </li>
                        
                    </ul>
                </li>
                <li>
                <div className="flex justify-between">
                    <p> Favorite </p>
                    <p>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                       
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