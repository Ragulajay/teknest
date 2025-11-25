import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import student1 from "@assets/generated_images/vijay.jpeg";
import student2 from "@assets/generated_images/ajay.jpeg";
import student3 from "@assets/generated_images/mani.jpeg";

const testimonials = [
  {
    name: "Vijaya kumar",
    university: "MTCET",
    project: "IoT Smart Home",
    rating: 5,
    quote: "TekNest helped me transform my idea into a fully functional IoT system. The mentorship was invaluable and I scored an A+ on my final project!",
    image: student1
  },
  {
    name: "Ragul Ajay",
    university: "FITA Chennai",
    project: "E-Commerce Platform",
    rating: 5,
    quote: "The team guided me through every step of building my full-stack application. Their expertise in React and Node.js made the difference.",
    image: student2
  },
  {
    name: "Manikandan",
    university: "MIT Trichy",
    project: "Robotics Project",
    rating: 5,
    quote: "From circuit design to Arduino programming, the support was exceptional. My autonomous robot project exceeded all expectations!",
    image: student3
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 font-[Poppins]">Student Success Stories</h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from students who achieved excellence with our support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="hover-elevate transition-all duration-300" data-testid={`card-testimonial-${idx}`}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-card-foreground mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold" data-testid={`text-name-${idx}`}>{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.university}</div>
                    <div className="text-sm text-primary">{testimonial.project}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
