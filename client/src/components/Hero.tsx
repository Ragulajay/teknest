import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/hero_background_collaborative_workspace.png";

export default function Hero() {
  const handleStartProject = () => {
    console.log("Start Your Project clicked");
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLearnMore = () => {
    console.log("Learn More clicked");
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/hero_background_collaborative_workspace.png)' }}

      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-12 lg:px-8 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 font-[Poppins]">
          Bring Your Final Year Project to Life
        </h1>
        <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Expert support for Software, Hardware, and IoT projects. From concept to completion, we're with you every step of the way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            data-testid="button-start-project"
            onClick={handleStartProject}
            className="text-lg px-8 py-6 bg-primary border border-primary-border hover-elevate active-elevate-2"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            data-testid="button-learn-more"
            onClick={handleLearnMore}
            className="text-lg px-8 py-6 backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            Learn More
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-white/90 text-sm lg:text-base">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>500+ Projects Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>95% Success Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
