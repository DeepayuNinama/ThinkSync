import { Briefcase, Code, Users, ChartNoAxesCombined } from "lucide-react";


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              One Stop Solution
            </h3>

            <p className="text-muted-foreground">
              At Think Sync, we believe great businesses are built on systems that scale, not guesswork.
            </p>
            <p className="text-muted-foreground">
              We’re a modern marketing and tech consultancy helping brands grow through a 360° approach. From AI automation to full-funnel marketing and digital product development, we align strategy with sharp execution.
            </p>
            <p className="text-muted-foreground">
              Whether you're a startup launching fast or a brand scaling smart, Think Sync becomes your extended growth team. We don't just create campaigns. We build momentum.
            </p>
            <p className="text-muted-foreground">
              Don't just think. Sync it.
            </p>

            <p className="text-muted-foreground">
              From personalized business solutions to powerful campaigns, we collaborate with you 
              to achieve real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              {/* <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a> */}

              {/* <a
                href="/public/projects/ThinkSync.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Brochure 
              </a> */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> AI Solutions </h4>
                  <p className="text-muted-foreground">
                    Custom AI Agents (Support, Retention, Lead Gen)
                  </p>
                </div>
              </div>
            </div>


            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ChartNoAxesCombined className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Marketing</h4>
                  <p className="text-muted-foreground">
                    360° Marketing Strategy & Execution
                  </p>
                </div>
              </div>
            </div>


            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Development</h4>
                  <p className="text-muted-foreground">
                    Web & Mobile App Development
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Events & Management</h4>
                  <p className="text-muted-foreground">
                    Strategies That Deliver Results
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
