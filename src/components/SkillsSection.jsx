import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  {
    name: "SEO",
    category: "Marketing & Advertising",
    image: "/projects/project2.png",
  },
  {
    name: "Social Media Marketing",
    category: "Marketing & Advertising",
    image: "/projects/project2.png",
  },
  {
    name: "Branding",
    category: "Marketing & Advertising",
    image: "/projects/project2.png",
  },
  {
    name: "Web Development",
    category: "Creative & Tech Solution",
    image: "/projects/project2.png",
  },
  {
    name: "Mobile App Development",
    category: "Creative & Tech Solution",
    image: "/projects/project2.png",
  },
  {
    name: "Custom Software Solutions",
    category: "Creative & Tech Solution",
    image: "/projects/project2.png",
  },
  {
    name: "Event Planning",
    category: "Strategy & Consultation",
    image: "/projects/project2.png",
  },
  {
    name: "Entertainment Production",
    category: "Strategy & Consultation",
    image: "/projects/project2.png",
  },
  {
    name: "Digital Experiences",
    category: "Strategy & Consultation",
    image: "/projects/project2.png",
  },
  {
    name: "Market Analysis & Insights",
    category: "Events & Management",
    image: "/projects/project2.png",
  },
  {
    name: "Sales Optimization",
    category: "Events & Management",
    image: "/projects/project2.png",
  },
  {
    name: "Business Growth Strategy",
    category: "Events & Management",
    image: "/projects/project2.png",
  },
];

const categories = [
  "all",
  "Marketing & Advertising",
  "Creative & Tech Solution",
  "Strategy & Consultation",
  "Events & Management",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
    
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our <span className="text-primary">Services</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
        <div
          key={key}
          className="bg-card rounded-lg shadow-xs card-hover group overflow-hidden transition-all duration-500 ease-in-out h-20 md:h-20 md:hover:h-64 flex flex-col"
        >
          {/* Image container (hidden on mobile, visible on hover for desktop) */}
          <div className="w-full h-0 md:h-0 md:group-hover:h-40 overflow-hidden transition-all duration-500 ease-in-out">
            <img
              src={skill.image}
              alt={skill.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="p-6 flex-grow flex items-center justify-center">
            <h3 className="font-thin text-lg">{skill.name}</h3>
          </div>
        </div>
          ))}
        </div>
      </div>
    </section>
  );
};
