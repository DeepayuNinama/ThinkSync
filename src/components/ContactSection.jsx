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
import { useState } from "react";

// ---
// The main ContactSection component.
// This component now includes an updated handleSubmit function
// that sends form data to a Google Apps Script endpoint.
// ---
export const ContactSection = () => {
  // useToast hook for displaying notifications
  const { toast } = useToast();
  // State to manage the submission status of the form
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ---
  // The handleSubmit function is now an async function
  // that uses the Fetch API to send data to the Google Apps Script.
  // It handles success, failure, and form state changes.
  // ---
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitting(true); // Set the submitting state to true

    // Create a FormData object from the form to easily get all input values
    const formData = new FormData(e.target);
    // Convert the FormData object into a plain JavaScript object
    const data = Object.fromEntries(formData.entries());

    // ---
    // IMPORTANT: Replace this URL with your actual deployed Google Apps Script URL.
    // The URL you provided in the chat is a good example.
    // ---
    const appsScriptUrl = "https://script.google.com/macros/s/AKfycbz0rJxG_hOBNWU1Lq9dADtqzS5HzuViROSVrMREttCkHvvpPD5QWwMw-7TOfa0JYyh-Gw/exec";

    try {
      // Use the Fetch API to send a POST request to the Apps Script URL
      const response = await fetch(appsScriptUrl, {
        method: "POST",
        // Convert the data object to a JSON string
        body: JSON.stringify(data),
        headers: {
          // Specify the content type as JSON
          "Content-Type": "application/json",
        },
      });

      // Check if the response from the server is successful
      if (response.ok) {
        // Show the success toast message
        toast({
          title: "ThinkSync heard you!",
          description: "Thank you for notifying us, we're looking forward to connecting!",
        });
        // Reset the form fields after a successful submission
        e.target.reset();
      } else {
        // If the response is not ok, throw an error
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Show an error toast message
      toast({
        title: "Submission failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive", // Assuming you have a 'destructive' variant for error toasts
      });
    } finally {
      setIsSubmitting(false); // Reset the submitting state in any case (success or failure)
    }
  };

  // Function to handle copying the email address to the clipboard
  const handleEmailCopy = async () => {
    // Use the clipboard API to copy the text
    await document.execCommand('copy', false, "thinksyncnow@gmail.com");
    // Show a toast notification
    toast({
      title: "Copied!",
      description: "Email address copied to clipboard.",
    });
  };

  // Function to handle copying the phone number to the clipboard
  const handlePhoneCopy = async () => {
    // Use the clipboard API to copy the text
    await document.execCommand('copy', false, "+91 97262 17070");
    // Show a toast notification
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
          {/* Left column for contact info and social links */}
          <div className="space-y-8 ">
            <div className="space-y-8 text-left w-full pl-10">
              {/* Email section */}
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

              {/* Phone section */}
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

              {/* Location section */}
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

            {/* Social media links */}
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

          {/* Right column for the contact form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            {/* The onSubmit handler is now correctly placed on the <form> element */}
            <form onSubmit={handleSubmit} className="space-y-6">
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
