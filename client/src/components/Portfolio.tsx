import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import softwareImage1 from "@assets/generated_images/software_project_dashboard_example.png";
import softwareImage2 from "@assets/generated_images/task_management_app_interface.png";
import softwareImage3 from "@assets/generated_images/healthcare_management_dashboard.png";
import softwareImage4 from "@assets/generated_images/e-learning_platform_interface.png";
import softwareImage5 from "@assets/generated_images/restaurant_pos_system.png";
import softwareImage6 from "@assets/generated_images/chat_application_interface.png";
import softwareImage7 from "@assets/generated_images/inventory_management_system.png";
import softwareImage8 from "@assets/generated_images/financial_analytics_dashboard.png";
import hardwareImage from "@assets/generated_images/hardware_robotics_project_prototype.png";
import iotImage from "@assets/generated_images/iot_smart_device_prototype.png";
import mobileImage from "@assets/generated_images/mobile_app_project_screenshot.png";
import fitnessImage from "@assets/generated_images/fitness_tracking_app.png";

const projects = [
  {
    title: "E-Commerce Dashboard",
    category: "Software",
    description: "Full-stack web application with real-time analytics, inventory management, and payment integration",
    image: softwareImage1,
    categoryColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Task Management System",
    category: "Software",
    description: "Collaborative project management platform with Kanban boards and team collaboration features",
    image: softwareImage2,
    categoryColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    tags: ["React", "TypeScript", "PostgreSQL"]
  },
  {
    title: "Healthcare Management",
    category: "Software",
    description: "Patient management system with appointment scheduling and medical records integration",
    image: softwareImage3,
    categoryColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    tags: ["Vue.js", "Express", "MySQL"]
  },
  {
    title: "Autonomous Robot",
    category: "Hardware",
    description: "Arduino-based robotics project with obstacle detection and autonomous path planning",
    image: hardwareImage,
    categoryColor: "bg-green-500/10 text-green-600 border-green-500/20",
    tags: ["Arduino", "C++", "Sensors"]
  },
  {
    title: "Smart Home System",
    category: "IoT",
    description: "Raspberry Pi powered home automation with mobile app control and voice integration",
    image: iotImage,
    categoryColor: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    tags: ["Raspberry Pi", "Python", "MQTT"]
  },
  {
    title: "E-Learning Platform",
    category: "Software",
    description: "Online education platform with video streaming, progress tracking, and interactive quizzes",
    image: softwareImage4,
    categoryColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    tags: ["Next.js", "AWS", "Redis"]
  },
  {
    title: "Restaurant POS System",
    category: "Software",
    description: "Point of sale system with order management, table tracking, and kitchen display integration",
    image: softwareImage5,
    categoryColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    tags: ["React", "Firebase", "Stripe"]
  },
  {
    title: "Real-Time Chat App",
    category: "Software",
    description: "Messaging application with WebSocket support, file sharing, and group chat functionality",
    image: softwareImage6,
    categoryColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    tags: ["React", "Socket.io", "Node.js"]
  },
  {
    title: "Inventory Management",
    category: "Software",
    description: "Warehouse management system with barcode scanning and automated stock alerts",
    image: softwareImage7,
    categoryColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    tags: ["Angular", "Python", "PostgreSQL"]
  },
  {
    title: "Financial Analytics",
    category: "Software",
    description: "Investment tracking platform with portfolio management and market analysis tools",
    image: softwareImage8,
    categoryColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    tags: ["React", "D3.js", "Django"]
  },
  {
    title: "Fitness Tracking App",
    category: "Software",
    description: "Mobile fitness application with workout tracking, nutrition logging, and progress visualization",
    image: fitnessImage,
    categoryColor: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    tags: ["React Native", "GraphQL", "MongoDB"]
  },

  {
    title: "Line Following Robot",
    category: "Hardware",
    description: "Embedded systems project with PID control and advanced sensor integration",
    image: hardwareImage,
    categoryColor: "bg-green-500/10 text-green-600 border-green-500/20",
    tags: ["Arduino", "PID Control", "IR Sensors"]
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState<"All" | "Software" | "Hardware" | "IoT">("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const handleFilterChange = (newFilter: typeof filter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handleProjectClick = (title: string) => {
    console.log(`Project clicked: ${title}`);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 font-[Poppins]">Project Showcase</h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Real projects delivered by students with our expert guidance
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {(["All", "Software", "Hardware", "IoT"] as const).map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => handleFilterChange(cat)}
                data-testid={`filter-${cat.toLowerCase()}`}
                className="min-w-[100px]"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, idx) => (
            <Card
              key={`${project.title}-${idx}`}
              className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 group"
              data-testid={`card-project-${idx}`}
              onClick={() => handleProjectClick(project.title)}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={project.categoryColor} data-testid={`badge-category-${idx}`}>
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors" data-testid={`text-project-title-${idx}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4" data-testid={`text-project-description-${idx}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              data-testid="button-prev-page"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              data-testid="button-next-page"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
