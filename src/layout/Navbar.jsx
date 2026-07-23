import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Button } from "../components/Button"
import { Menu, X } from "lucide-react"

const navLinks = [
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "certificates", label: "Certificates" },
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleNavClick = (id) => {
        setIsMobileMenuOpen(false)
        if (location.pathname !== "/") {
            navigate("/")
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
            }, 100)
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header
            className={`px-10 md:px-40 fixed top-0 left-0 right-0 transition-[background-color,backdrop-filter,padding] duration-500 z-50 ${
                isScrolled ? "bg-[#0f1418]/80 backdrop-blur-md py-3"  : "bg-transparent py-3"
            }`}
            >
            <nav className="container mx-auto px-8 flex items-center justify-between">
                <button onClick={() => navigate("/")} className="text-md font-mono tracking-tight text-muted-foreground hover:text-primary-foreground animate-fade-in">
                Shen Sarsale
                </button>

                {/* Desktop Nav */}
                <div  className=" hidden lg:flex items-center gap-1 ">
                    <div className=" -muted-foreground rounded-xl px-2 py-1 flex items-center gap-1 ">
                        {navLinks.map((link, index) => (
                            <button
                            onClick={() => handleNavClick(link.id)}
                            key={index}
                            className=" font-mono px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                            >
                                {link.label}
                            </button>
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
                            <button
                            onClick={() => handleNavClick(link.id)}
                            key={index}
                            className="text-lg text-muted-foreground hover:text-foregrounnd py-2 text-left"
                            >
                                {link.label}
                            </button>
                        ))}


                        <Button size="sm">Contact me</Button>


                </div>

            </div>
        )}
        </header>
    )
}