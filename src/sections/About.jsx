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



                    </div>
                </div>
            </div>
        </section>
    
    
        
        )
}
