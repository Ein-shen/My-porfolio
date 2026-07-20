import { Button } from '@/components/Button'
import { ArrowRight, Download, ChevronDown } from 'lucide-react'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'



const skills = [
    "Figma",
    "React",
    "Supabase",
    "Python",
    "Vercel",
    "TypeScript",
    "PHP",
    "Tailwind",
    "CSS",
    "Bubble.io",
    "SQL",
    "Git",
]

export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0">
            <img
             src="/a.jpg"
             alt="Hero image"
             className="w-full h-full object-cover opacity-40"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"> </div>
        </div>

        {/* green dots */}
        {[...Array(30)].map((_, i) => (
        <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
                backgroundColor: "#20B2A6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
            }}
        />
    ))}

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> Software Engineer
                        </span>
                    </div>

                    {/* Headline */}
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in">
                            Crafting <span className="text-primary glow-text"> digital</span>
                            <br />
                                 Experience with
                            <br />
                            <span className="font-serif italic font-normal text-white">
                                precision.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300 pt-10">
                            Hi I'm an Aspiring Software Engineer,
                            Where i can be more and share my knowledge helping the team on future projects
                        </p>
                    </div>

                    {/* CTA */}
                    <div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
                        <Button size="lg">
                            Contact me <ArrowRight className="w-5 h-5" />
                        </Button>

                        <button
                        className=" relative bg-transparent border border-border
                                    text-foreground hover:border-primary/50 transition-all
                                    duration-1000 focus:outline-none focus-visible:ring-2
                                    focus-visible:ring-primary focus-visible:ring-offset-2
                                    disabled:opacity-50 disabled:cursor-not-allowed group
                                    px-8 py-4 text-lg font-medium rounded-full overflow-visible
                                    animated-border">
                            {/* Animated SVG Border */}
                                <svg
                                className="absolute left-0 top-0 w-full h-full pointer-events-none"
                                viewBox="0 0 200 60"
                                preserveAspectRatio="none"
                                style={{ overflow: "visible" }}
                                >
                                <path
                                    d="M 30,1 A 29,29 0 0 1 30,1 L 1,30 A 29,29 0 0 1 30,59 L"
                                    fill="none"
                                    stroke="var(--color-primary)"
                                    strokeWidth="2"
                                    strokeDasharray="400 550"
                                    strokeDashoffset="400"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="animated-border-path"
                                />
                                </svg>
                                <span className='relative z-10 flex items-center gap-2'>
                                    <Download className='w-5 h-5'/>
                                    Download
                                </span>

                        </button>
                    </div>

                    {/* Social links */}
                    <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
                        <span>Follow me</span>
                        {[
                            {icon: FaGithub, href: "#"},
                            {icon: FaLinkedin, href: "#"},
                            {icon: FaFacebook, href: "#"},
                            
                        ].map((social, idx) => (

                            <a key={idx} href={social.href} className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'>
                                <social.icon className="w-5 h-5" />
                            </a>

                        ))}
                    </div>
                </div>

                {/* Right column */}
                <div className='relative animate-fade-in animation-delay-300'>
                    {/* Profile image */}
                    <div className='relative max-w-md mx-auto'>
                        <div
                            className="absolute inset-0 rounded-3xl bg-gradient-to-br
                            from-primary/30 via-transparent
                            to-primary/10 blur-2xl animate-pulse"
                            />

                        <div className='relative glass rounded-3xl p-2 glow-border'
                        >
                            <img 
                                src="/rafal.jpg"
                                alt="Rafal" 
                                className='w-full aspect-[4/5] object-cover rounded-2xl'
                            />

                            {/* Floating batch */}

                            <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
                                    <span className='text-sm font-medium'>Available Work</span>
                                </div>
                            </div>
                            {/* stats badge */}
                            <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                                <div className='font-bold text-2xl text-primary'> Hello World! </div>
                                <div className='text-xl text-muted-foreground'> I'm Shen</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skill section */}
            <div className='mt-20 animate-fade-in animation-delay-500  '>
                <p className='font-bold text-xl pb-5'>Tech stack</p>
                <div className='relative overflow-hidden'>
                    <div className='flex animate-marquee pb-10 '>
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className='flex-shrink-0 px-8 py-4'>
                                <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors cursor-pointer'>
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
            <a 
                href="#about"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary">


                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>

    </section>
}