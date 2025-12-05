import Header from "@/components/Header"

const layout = ({children}:{children:React.ReactNode}) => {
  return (
  
   <main className="min-h-screen text-stone-200">
    <Header/>  
    <div className="container py-10">
        {children}
    </div>
   </main>
  )
}

export default layout