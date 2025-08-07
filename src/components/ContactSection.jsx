import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Facebook,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null); // Ref for the form element

  // The handleSubmit function now uses a hidden iframe to submit the form, bypassing CORS.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a new iframe for the form submission
    const iframe = document.createElement("iframe");
    iframe.name = "hidden-iframe";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    iframe.onload = () => {
      // This function runs when the form submission is complete
      setIsSubmitting(false);
      
      // Show the success toast message
      toast({
        title: "ThinkSync heard you!",
        description: "Thank you for notifying us, we're looking forward to connecting!",
      });

      // Reset the form fields after a successful submission
      formRef.current.reset();
      
      // Clean up the iframe
      document.body.removeChild(iframe);
    };

    // ---
    // ✅ PASTE YOUR NEW GOOGLE APPS SCRIPT URL HERE
    // It is critical that this is the NEW URL from your latest deployment.
    // ---
    const appsScriptUrl = "https://script.google.com/macros/s/AKfycbxuLjTyKC7sGG-AH3goOQmPhH2lQWqBZ6sxUMkkpSAyOsnsFILFwDZEc07A9gFe1xZYLg/exec";

    // Set the form attributes for submission to the Apps Script URL
    formRef.current.action = appsScriptUrl;
    formRef.current.method = "POST";
    formRef.current.target = "hidden-iframe";
    formRef.current.submit();
  };

  const handleEmailCopy = async () => {
    await document.execCommand('copy', false, "thinksyncnow@gmail.com");
    toast({
      title: "Copied!",
      description: "Email address copied to clipboard.",
    });
  };

  const handlePhoneCopy = async () => {
    await document.execCommand('copy', false, "+91 97262 17070");
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
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
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
