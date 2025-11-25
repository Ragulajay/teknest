import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 font-[Poppins]">Get Started Today</h2>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Fill out the form and we'll reach out to discuss your project
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Contact Us</CardTitle>
            <CardDescription>Tell us about your final year project and we'll help you succeed</CardDescription>
          </CardHeader>
          <CardContent>


            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              {/* REQUIRED Web3Forms access key */}
              <input
                type="hidden"
                name="access_key"
                value="513d4764-fd70-49cd-91a0-85e2077423f4"
              />

              {/* OPTIONAL: Redirect after submit */}


              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"     // 👈 IMPORTANT: Web3Forms requires name=""
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"   // 👈 required for Web3Forms
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 12345 67890"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select name="projectType" required>
                    <SelectTrigger id="projectType">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software">Software Development</SelectItem>
                      <SelectItem value="hardware">Hardware Projects</SelectItem>
                      <SelectItem value="iot">IoT Solutions</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details *</Label>
                <Textarea
                  id="message"
                  name="message"     // 👈 required
                  placeholder="Explain your project idea..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}
