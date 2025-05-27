import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Value City",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/ValueCity.jpg",
    tags: ["Social Media Management", " Influencer Marketing"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Neepa Singh Production",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/NeepaSinghProduction.jpg",
    tags: ["Artist Managment", "Production Support"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Tunes Studio",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/TunesStudio.jpg",
    tags: ["Studio Management", "Artist Collabaration"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Sync Street ",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/Sync.jpg",
    tags: ["Brand Deals", "Social Media  Management","Shoot Production"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Soul Fitness Studio ",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/SoulFitnessStudio.jpg",
    tags: ["Video Editing", "Content Strategy "],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Luxury Ethnic Menswear ",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/LuxuryEthnicMenswaer.jpg",
    tags: ["Model Sourcing", "Shoot Production", "Editing"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "RVNC - Powering the Esports Revolution ",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/RVNC.jpg",
    tags: ["Social Media Managment", "Community Engagement"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Multeeverse",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/Multeeverse.jpg",
    tags: ["Branding", "Graphic Design", "Social Media Management"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Our <span className="text-primary">Portfolio  </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Behind every milestone is a story of creativity, strategy, and results that speak for themselves.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  {/* <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div> */}
      </div>
    </section>
  );
};
