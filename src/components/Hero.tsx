
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";
import { Typewriter } from "@/components/ui/typewriter";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <AnimatedShaderHero 
        headline={{
          line1: "AI-Powered",
          line2: (
            <div className="flex items-center">
              <Typewriter
                text={[
                  "Automation Solutions",
                  "Business Intelligence", 
                  "Workflow Optimization",
                  "Smart Integration",
                  "Digital Transformation"
                ]}
                speed={80}
                className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                waitTime={2500}
                deleteSpeed={40}
                cursorChar="_"
                cursorClassName="text-blue-400 animate-pulse"
              />
            </div>
          ) as any
        }}
        subtitle="Transform your business with intelligent automation that learns, adapts, and scales with your needs."
        buttons={{
          primary: {
            text: "Get Started",
            onClick: () => console.log("Get Started clicked")
          },
          secondary: {
            text: "Learn More", 
            onClick: () => console.log("Learn More clicked")
          }
        }}
      />
    </section>
  );
}