
import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Menu, X } from "lucide-react"
import { RiFacebookFill } from "react-icons/ri"

const navLinks = [
    
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#certificates", label: "Certificates" },
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`px-10 md:px-40 fixed top-0 left-0 right-0 transition-[background-color,backdrop-filter,padding] duration-500 z-50 ${
                isScrolled ? "bg-[#0f1418]/80 backdrop-blur-md py-3"  : "bg-transparent py-3"
            }`}
            >
            <nav className="container mx-auto px-8 flex items-center justify-between">
                <a href="#" className="text-md font-mono tracking-tight text-muted-foreground hover:text-primary-foreground animate-fade-in">
                Shen Sarsale
                </a>

                {/* Desktop Nav */}
                <div  className=" hidden lg:flex items-center gap-1 ">
                    <div className=" -muted-foreground rounded-xl px-2 py-1 flex items-center gap-1 ">
                        {navLinks.map((link, index) => (
                            <a 
                            href={link.href} 
                            key={index} 
                            className=" font-mono px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface" 
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>


                


                    {/* Mobile menu button */}
                    <button 
                        className="lg:hidden p-2  text-foreground cursor-pointer animate-fade-in"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        
                        >
                            {isMobileMenuOpen ?  <X size={24} /> : <Menu size={24} /> }
                        
                    </button>
            </nav>
            { isMobileMenuOpen && (<div className="lg:hidden glass-strong ">

                <div className="cointainer mx-auto px-6 py-6 flex flex-col gap-4  ">
                    {navLinks.map((link, index) => (
                            <a 
                            href={link.href} 
                            key={index} 
                            className="text-lg text-muted-foreground hover:text-foregrounnd py-2" 
                            >
                                {link.label}
                            </a>
                        ))}

                   
                        <Button size="sm">Contact me</Button>
                    

                </div>

            </div>
        )}
        </header>
    )
}