import { SiReact, SiPython, SiNodedotjs, SiArduino, SiMongodb, SiTailwindcss, SiTypescript, SiRaspberrypi, SiAmazon, SiGooglecloud } from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React" },
  { icon: SiPython, name: "Python" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiArduino, name: "Arduino" },
  { icon: SiRaspberrypi, name: "Raspberry Pi" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiAmazon, name: "AWS" },
  { icon: SiGooglecloud, name: "Google Cloud" }
];

export default function TechStack() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 font-[Poppins]">Technologies We Master</h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise across the most in-demand tools and platforms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="bg-background rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover-elevate active-elevate-2 cursor-pointer transition-all duration-300"
              data-testid={`tech-${idx}`}
            >
              <tech.icon className="h-12 w-12 text-foreground" />
              <span className="text-sm font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
