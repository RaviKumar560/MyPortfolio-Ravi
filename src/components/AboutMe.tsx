import React, { useState } from "react";
import { MapPin, BriefcaseBusiness, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AboutMe = () => {
  // Initialize EmailJS
  emailjs.init("teBMOXOJ1RqfKhvAa");

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleHireMe = () => {
    setIsDialogOpen(true);
  };

  const handleSubmit = () => {
    if (!name || !phone) {
      toast({
        title: "Missing Information",
        description: "Please provide both your name and phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Send notification email when Hire Me is clicked
    emailjs
      .send(
        "techkumarravi", // Service ID
        "template_w10q3qa", // Template ID
        {
          name: name,
          email: phone, // Using phone field for the email field in the template
          message: `Someone is interested in hiring you! Name: ${name}, Phone: ${phone}`,
        },
        "teBMOXOJ1RqfKhvAa" // Public Key
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description:
            "I'll get back to you soon. Thank you for your interest!",
        });
        setIsDialogOpen(false);
        setName("");
        setPhone("");
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Something went wrong!",
          description: "Please try contacting me via email directly.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="py-20 px-6 bg-[#1E293B] text-white" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Container - Shifted 20px down */}
          <div className="flex justify-center mt-10 order-2 lg:order-1">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
              {/* Glowing Background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-30" />

              {/* Image with border */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/50 shadow-xl">
                <img
                  src={`${import.meta.env.BASE_URL}image/raviabout.jpeg`}
                  alt="Ravi Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-fade-up order-1 lg:order-2">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Ravi Kumar, a Full-Stack Developer with over 2 years of
              experience in designing and developing scalable software
              solutions. Currently, I am working at Gigabyte Infocomm Pvt Ltd,
              where I specialize in Java, Spring Boot, Microservices, and
              React.js to build robust and efficient applications.
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-purple-400">
                My expertise lies in:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>
                    Developing RESTful APIs and scalable microservices
                    architectures
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>
                    Creating secure authentication systems with Spring Security
                    & JWT
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>
                    Designing responsive front-end interfaces with React.js,
                    HTML, CSS, and JavaScript
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>
                    Optimizing database management with MySQL & Oracle
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              I have worked on impactful projects like EduMart, an online
              learning marketplace, and UniEnroll, a university admission
              management system. My passion lies in solving complex problems,
              improving application performance, and collaborating in agile
              environments to build innovative solutions.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Let's connect and create something amazing together!
            </p>

            <p className="flex items-center gap-2 text-lg">
              <MapPin className="w-5 h-5 text-purple-400" /> Kanpur, Uttar
              Pradesh
            </p>

            {/* Hire Me Button */}
            <div className="pt-4">
              <Button
                onClick={handleHireMe}
                className="relative group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <BriefcaseBusiness className="w-5 h-5 mr-2" />
                Hire Me
                <span className="absolute inset-0 rounded-full bg-white opacity-25 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-[#1E293B] text-white border-purple-500">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Contact Information
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Please provide your details so I can get back to you.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-white">
                <User className="w-4 h-4 inline mr-2" /> Your Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-purple-500/50 bg-[#2D3748] text-white"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone" className="text-white">
                <Phone className="w-4 h-4 inline mr-2" /> Your Phone Number
              </Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-purple-500/50 bg-[#2D3748] text-white"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AboutMe;
