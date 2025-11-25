import { CheckCircle2, Award, Users, TrendingUp, Clock } from "lucide-react";
import mentorImage from "@assets/generated_images/mentor_student_collaboration_closeup.png";

const reasons = [
  {
    icon: Award,
    title: "Expert Mentorship",
    description: "Learn from industry professionals with years of experience in software, hardware, and IoT development."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Get help whenever you need it with our round-the-clock support system and dedicated mentors."
  },
  {
    icon: TrendingUp,
    title: "95% Success Rate",
    description: "Our proven methodology has helped hundreds of students successfully complete their projects."
  },
  {
    icon: Users,
    title: "Comprehensive Resources",
    description: "Access to documentation, code libraries, hardware components, and development tools."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 font-[Poppins]">Why Choose TekNest?</h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to your success every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={mentorImage}
              alt="Mentor guiding student through project work"
              className="rounded-xl w-full h-auto object-cover"
              data-testid="img-mentor-collaboration"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex gap-4" data-testid={`item-reason-${idx}`}>
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
