import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { PixelSwapImage } from "../components/PixelSwapImage"

export const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background pt-24">

            <div className="container mx-auto px-6 md:px-12 py-10 relative z-10">
                <div className="flex flex-col md:grid md:grid-cols-[288px_auto] gap-8 items-center md:justify-center mx-auto w-fit">

                    {/* Left: photo */}
                    <div className="relative mx-auto sm:mx-0 w-[288px] cursor-pointer">
                        <PixelSwapImage
                            imageA="/z.jpg"
                            imageB="/y.jpg"
                            alt="Shen Sarsale"
                        />
                    </div>

                    {/* Right: name + bio */}
                    <div className="space-y-6 text-center md:text-left">
                        <h1 className="font-mono text-5xl md:text-6xl font-medium tracking-tight">
                            Shen Sarsale
                        </h1>

                        <div className="space-y-4 text-muted-foreground max-w-md">
                            <p>
                                I'm an aspiring Data Scientist and Software Engineer with a passion for
                                building clean digital experiences and exploring what data can tell us.
                                I'm currently growing my skills through real projects, and looking for
                                opportunities to contribute to a team and keep learning.
                            </p>
                            <p>
                                I love turning rough ideas into things people actually use — designing
                                interfaces and learning new tools along the way.
                            </p>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-6 text-xs font-mono text-muted-foreground pt-2">
                            <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                                github <span className="text-[20px]">↗</span>
                            </a>
                            <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                                linkedin <span className="text-[20px]">↗</span>
                            </a>
                            <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1">
                                instagram <span className="text-[20px]">↗</span>
                            </a>
                            <a href="mailto:you@email.com" className="hover:text-foreground transition-colors">
                                email
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}