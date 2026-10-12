import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'
import { PixelSwapImage } from "../components/PixelSwapImage"
import { Cv } from "../away/Cv"
import { Link } from 'react-router-dom'

export const Hero = () => {
    return (
        <section 
            id="hero"
            className="relative flex items-center justify-center overflow-hidden bg-background pt-30 pb-16">

            <div className="container mx-auto pt-6 md:px-12 pb-0 relative z-10 ">
                <div className="flex flex-col items-center lg:items-start lg:grid lg:grid-cols-[288px_minmax(0,480px)] gap-8 lg:justify-center mx-auto w-fit max-w-full">

                    {/* Left: photo */}
                    <div className="relative shrink-0 mx-auto lg:mx-0 w-[288px] cursor-pointer animate-fade-in animation-delay-200 duration-500">
                        <PixelSwapImage
                            imageA="/z.jpg"
                            imageB="/y.jpg"
                            alt="Shen Sarsale"
                        />
                    </div>

                    {/* Right: name + bio (animated ONCE as a block instead of 7 separate times) */}
                    <div className="space-y-4 text-center lg:text-left animate-fade-in animation-delay-200">

                        <h1 className="font-mono text-4xl lg:text-5xl font-medium tracking-tight leading-none flex items-center justify-center lg:justify-start gap-2 lg:-mt-3">
                            <span>Shen Sarsale</span>
                            <MdVerified size={16} className="text-[#1D9BF0] shrink-0" />
                        </h1>
                                                                    
                       
                        
                        
                        

                        <div className="space-y-4 text-muted-foreground max-w-md ">

                            <h2 className='font-bold text-md'>
                                 Full-Stack Developer | React.js | Node.js | PostgreSQL
                            </h2>
                            <p>
                                I build full-stack web applications from responsive user interfaces to APIs, databases, and deployment. I enjoy turning ideas into practical products, solving problems through code, and continuously learning new technologies.
                            </p>
                            <p>
                                I'm currently looking for an opportunity to contribute to a development team, build meaningful software, and grow as a Full-Stack Developer.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 sm:gap-x-6 text-xs font-mono text-muted-foreground pt-2">
                            <a href="https://github.com/Ein-shen" className="hover:text-foreground transition-colors flex items-center gap-1">
                                github <span className="text-[10px]">↗</span>
                            </a>
                            <a href="https://www.linkedin.com/in/" className="hover:text-foreground transition-colors flex items-center gap-1">
                                linkedin <span className="text-[10px]">↗</span>
                            </a>
                            <a href="https://www.instagram.com/shinxtony/" className="hover:text-foreground transition-colors flex items-center gap-1">
                                instagram <span className="text-[10px]">↗</span>
                            </a>
                            <a href="mailto:shensarsale25@gmail.com" className="hover:text-foreground transition-colors flex items-center gap-1">
                                email <span className="text-[10px]">↗</span>
                            </a>
                            <Link
                                to="/cv"
                                className='hover:text-foreground transition-colors flex items-center gap-1'
                            >
                                Cv <span className="text-[10px]">↗</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}