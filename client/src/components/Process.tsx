import { MessageSquare, FileText, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation",
    description: "Discuss your project requirements and goals with our expert team"
  },
  {
    number: "02",
    icon: FileText,
    title: "Planning",
    description: "Create a detailed roadmap with milestones and deliverables"
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description: "Build your project with continuous mentorship and technical support"
  },
  {
    number: "04",
    icon: Rocket,
    title: "Delivery",
    description: "Final testing, documentation, and successful project presentation"
  }
];

export default function Process() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 font-[Poppins]">How It Works</h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, proven process from concept to completion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative" data-testid={`step-${idx}`}>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              )}
              <div className="relative bg-background rounded-xl p-6 hover-elevate transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary/20 mb-2 font-[Poppins]">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
