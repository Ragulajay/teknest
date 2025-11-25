import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Cpu, Radio, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description: "From web applications to mobile apps, we help you build robust software solutions that meet academic standards and real-world requirements.",
    features: [
      "Full-stack web development",
      "Mobile app development (iOS & Android)",
      "Database design & implementation",
      "API development & integration",
      "UI/UX design guidance"
    ],
    color: "text-blue-500"
  },
  {
    icon: Cpu,
    title: "Hardware Projects",
    description: "Expert guidance on circuit design, embedded systems, and prototype development to bring your hardware ideas to reality.",
    features: [
      "Circuit design & PCB layout",
      "Microcontroller programming",
      "Sensor integration",
      "Prototype fabrication",
      "Testing & validation"
    ],
    color: "text-green-500"
  },
  {
    icon: Radio,
    title: "IoT Solutions",
    description: "Build connected devices and smart systems with our comprehensive IoT project support, from sensors to cloud integration.",
    features: [
      "IoT architecture design",
      "Wireless communication protocols",
      "Cloud platform integration",
      "Data analytics & visualization",
      "Security implementation"
    ],
    color: "text-purple-500"
  }
];

export default function Services() {
  const handleLearnMore = (service: string) => {
    console.log(`Learn more about ${service} clicked`);
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 font-[Poppins]">Our Services</h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support across all major project domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <Card key={service.title} className="hover-elevate transition-all duration-300" data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-lg bg-card flex items-center justify-center mb-4 ${service.color}`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl lg:text-2xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full"
                  data-testid={`button-learn-more-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleLearnMore(service.title)}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
