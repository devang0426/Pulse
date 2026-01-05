import Link from "next/link";
import UserDropdown from "@/components/UserDropdown";
import NavItems from "@/components/NavItems";
const Header=({user}:{user:User})=>{
  
  
  return(
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
<Link href="/" className="cursor-pointer">
  <span className="text-3xl font-bold bg-linear-to-r 
    from-[#FF3232] to-[#00FFB4] bg-clip-text text-transparent 
    drop-shadow-[0_0_12px_#FF3232]">
    Pulse
  </span>
</Link>
<nav className="hidden sm:block">
  <NavItems/>
</nav>
<UserDropdown user={user}/>
      </div>
      
    </header>  
    )
}
export default Header;