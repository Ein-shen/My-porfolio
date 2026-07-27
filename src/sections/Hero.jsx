import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { PixelSwapImage } from "../components/PixelSwapImage"
import { Cv } from "../away/Cv"
import { Link } from 'react-router-dom'



export const Hero = () => {

    return (
        <section 
            id="hero"
            
            className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background pt-24">

            <div className="container mx-auto pt-6 md:px-12 py-10 relative z-10">
                <div className="flex flex-col items-center lg:items-start lg:grid lg:grid-cols-[288px_minmax(0,480px)] gap-8 lg:justify-center mx-auto w-fit max-w-full">

                    {/* Left: photo */}
                    <div className="relative mx-auto lg:mx-0 w-[288px] cursor-pointer  animate-fade-in animation-delay-200 duration-500">
                        <PixelSwapImage
                            imageA="/z.jpg"
                            imageB="/y.jpg"
                            alt="Shen Sarsale"
                        />
                    </div>

                    {/* Right: name + bio */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h1 className="font-mono text-4xl lg:text-5xl font-medium tracking-tight pt-1 animate-fade-in animation-delay-400">
                            Shen Sarsale
                        </h1>

                        <div className="space-y-4 text-muted-foreground max-w-md ">
                            <p className='animate-fade-in animation-delay-600'>
                                I'm an aspiring Data Scientist and Software Engineer with a passion for
                                building clean digital experiences and exploring what data can tell us.
                                I'm currently growing my skills through real projects, and looking for
                                opportunities to contribute to a team and keep learning.
                            </p>
                            <p className='animate-fade-in animation-delay-800'>
                                I love turning rough ideas into things people actually use — designing
                                interfaces and learning new tools along the way.
                            </p>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-6 text-xs font-mono text-muted-foreground pt-2 animate-fade-in animation-delay-900 ">
                            <a href="https://github.com/Ein-shen" className="hover:text-foreground transition-colors flex items-center gap-1">
                                github <span className="text-[10px]">↗</span>
                            </a>
                            <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                                linkedin <span className="text-[10px]">↗</span>
                            </a>
                            <a href="https://www.instagram.com/shinxtony/" className="hover:text-foreground transition-colors flex items-center gap-1">
                                instagram <span className="text-[10px]">↗</span>
                            </a>
                            <a href="shensarsale25@gmail.com" className="hover:text-foreground transition-colors">
                                email
                            </a>
                        </div>
                    </div>


                    {/* Cv */}

                    <div>
                        <div className='flex items-center justify-center'>
                            <Link
                                to="/cv"
                                className='font-mono font-lg border border-white/10 text-muted-foreground hover:text-foreground rounded-lg w-38 h-11 cursor-pointer flex items-center justify-center gap-1 animate-fade-in animation-delay-1000'
                                >
                                View CV <span className="text-[20px]">↗</span>
                            </Link>
                        </div>
                    </div>

                </div>

                
            </div>
        </section>
    )
}