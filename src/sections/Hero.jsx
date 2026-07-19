export const Hero = () => {
    return <section className=" relative min-h-screen flex items-screen overflow-hidden">

        <div className="absolute inset-0">
            <img  
             src="/a.jpg"
             alt="Hero image"
             className="w-full h-full object-cover opacity-40"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-backgroound"> </div>
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
                <div className="space-y-8 ">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary ">
                            <span className="w-2 bg-primary rounded-full animate-pulse" /> Sofware Engineer 
                        </span>
                    </div>

                    {/* Headline */}
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold loading-tight animate-fade-in">
                            Crafting <span className="text-primary glow-text"> digital</span>
                            <br />
                                 Experience with
                            <br />
                            <span className="font-serif italic font-normal text-white">
                                precision.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-faded-in">
                            Hi I'm an Aspiring Software Engineer,
                            Where i can be more and share my knowlegde helping the team to future projects
                        </p>
                    </div>
                </div>

                {/* Right column */}
            </div>
        </div>



    </section>
}
