import { auth } from "@/auth";

export default async function DashboardPage(){
    const session = await auth();
    console.log("session",session);
    if(!session.token){
        redirect("/login")
    }
    return(
        <>
           DashboardPage
        </>
    )
}