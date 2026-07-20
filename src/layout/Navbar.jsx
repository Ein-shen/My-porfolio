
import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Menu, X } from "lucide-react"
import { RiFacebookFill } from "react-icons/ri"

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#project", label: "Project" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
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
        <header className={`fixed top-0 left-0 right-0  transition-all duration-500 z-50 ${isScrolled ? "glass-strong p-3" : "bg-transparent py-5 "}`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    PM<span>.</span>
                </a>

                {/* Desktop Nav */}
                <div  className=" hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a 
                            href={link.href} 
                            key={index} 
                            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface" 
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>


                {/* Cta button */} 
                    <div className="hidden md:block">
                        <Button size="sm">Contact me</Button>
                    </div>


                    {/* Mobile menu button */}
                    <button 
                        className="md:hidden p-2 text-foreground cursor-pointer animate-fade-in"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        
                        >
                            {isMobileMenuOpen ?  <X size={24} /> : <Menu size={24} /> }
                        
                    </button>
            </nav>
            { isMobileMenuOpen && (<div className="md:hidden glass-strong">

                <div className="cointainer mx-auto px-6 py-6 flex flex-col gap-4">
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