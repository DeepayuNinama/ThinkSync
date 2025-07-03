import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Facebook,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleEmailCopy = async () => {
  await navigator.clipboard.writeText("thinksyncnow@gmail.com");
  toast({
    title: "Copied!",
    description: "Email address copied to clipboard.",
  });
  }
   // handlePhoneCopy
  const handlePhoneCopy = async () => {
  await navigator.clipboard.writeText("+91 97262 17070");
  toast({
    title: "Copied!",
    description: "Phone Number copied to clipboard.",
  });
};


  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We collect the right information to create strategies that truly fit your needs, all while keeping your data safe and secure, because TRUST matters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 ">

<div className="space-y-8 text-left w-full pl-10">
  {/* Email */}
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-full bg-primary/10 shrink-0">
      <Mail className="h-6 w-6 text-primary" />
    </div>
    <div>
      <h4 className="font-medium text-sm text-foreground/70">Email</h4>
      <button
        onClick={handleEmailCopy}
        className="block text-left text-base text-muted-foreground hover:text-primary transition-colors focus:outline-none cursor-pointer"
      >
        thinksyncnow@gmail.com
      </button>
    </div>
  </div>

  {/* Phone */}
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-full bg-primary/10 shrink-0">
      <Phone className="h-6 w-6 text-primary" />
    </div>
    <div>
      <h4 className="font-medium text-sm text-foreground/70">Phone</h4>
      <button
        onClick={handlePhoneCopy}
        className="block text-left text-base text-muted-foreground hover:text-primary transition-colors focus:outline-none cursor-pointer"
      >
        +91 97262 17070
      </button>
    </div>
  </div>

  {/* Location */}
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-full bg-primary/10 shrink-0">
      <MapPin className="h-6 w-6 text-primary" />
    </div>
    <div>
      <h4 className="font-medium text-sm text-foreground/70">Location</h4>
      <a
        href="https://maps.app.goo.gl/wLx296VcUA1HE1yg6"
        className="block text-left text-base text-muted-foreground hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ahmedabad, Gujarat
      </a>
    </div>
  </div>
</div>
 



            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Facebook />
                </a>
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Pedro Machado..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
