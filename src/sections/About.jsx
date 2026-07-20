import { Code2, Rocket, Users, Lightbulb } from "lucide-react"


const highlights = [
    {

    icon: Code2,
    title: "Clean Code",
    description:
    "Wringting clean code",

    },


    {

    icon: Rocket,
    title: "Performance",
    description:
    "Wringting clean code",
    
    },


    {

    icon: Users,
    title: "Collaboration",
    description:
    "Wringting clean code",
    
    },
    

    {

    icon: Lightbulb,
    title: "Innovation",
    description:
    "Wringting clean code",
    
    },

]
    
   


export const About = () => {
    return (

        <section id="about"className="py-2 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* left column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm fonr-meduim tracking-winder uppercase"
                        > 
                        About me
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building the Future,

                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            one component at a time.</span>
                      </h2>

                      <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            Hi, I'm an aspiring Software Engineer with a passion for building clean, functional, and user-friendly digital experiences. I enjoy turning ideas into real products, whether that means designing an interface, writing backend logic, or optimizing how data flows through an application.
                            </p>

                            <p>
                            My journey into tech started with curiosity about how things work behind the scenes, and it's grown into a genuine love for problem-solving through code. I'm comfortable working across the stack, from crafting responsive UIs with React and Tailwind to managing data with SQL and Supabase, and I'm always eager to pick up new tools and frameworks along the way.
                            </p>

                            <p>
                            I thrive in collaborative environments where I can learn from others while contributing my own ideas to the team. I'm currently looking for opportunities to grow as an engineer, take on real-world challenges, and help build products that make a difference.
                            </p>
                      </div>

                      <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                                My mission is to build software that's not just functional, but genuinely helpful — solving real problems for real people through clean code and thoughtful design.
                        </p>
                      </div>  
                    </div>

                    {/* Right Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
                            style={{animationDelay: `${(idx + 1) * 100}ms `}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    
    
        
        )
}
