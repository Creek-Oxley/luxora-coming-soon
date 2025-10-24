import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
});

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = emailSchema.safeParse({ email });
    
    if (!validation.success) {
      toast({
        title: "Invalid email",
        description: validation.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you!",
        description: "You'll be the first to know when we launch.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-12 px-6 font-inter text-base border-primary/20 focus:border-primary focus-visible:ring-primary"
          disabled={isSubmitting}
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-inter font-medium tracking-wide transition-all duration-300"
        >
          {isSubmitting ? "Submitting..." : "Notify Me"}
        </Button>
      </div>
    </form>
  );
};

export default EmailSignup;
