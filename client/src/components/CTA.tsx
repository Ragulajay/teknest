import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import ctaImage from "@assets/generated_images/students_celebrating_project_success.png";

export default function CTA() {
  const handleStartProject = () => {
    console.log("Start Your Project clicked");
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScheduleConsultation = () => {
    console.log("Schedule Consultation clicked");
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/students_celebrating_project_success.png)' }}

      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-[Poppins]">
          Ready to Bring Your Project to Life?
        </h2>
        <p className="text-xl lg:text-2xl text-white/90 mb-12">
          Join hundreds of successful students who turned their ideas into reality
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            data-testid="button-cta-start-project"
            onClick={handleStartProject}
            className="text-lg px-8 py-6 bg-primary border border-primary-border hover-elevate active-elevate-2"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            data-testid="button-cta-schedule"
            onClick={handleScheduleConsultation}
            className="text-lg px-8 py-6 backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Consultation
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-white/90 text-sm">
          <span>✓ Free Initial Consultation</span>
          <span>✓ Affordable Pricing</span>
          <span>✓ Expert Mentors</span>
        </div>
      </div>
    </section>
  );
}
