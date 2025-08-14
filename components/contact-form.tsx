"use client";

import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Send, MessageCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactForm() {
  const [, setResult] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "b8554841-a806-4176-9271-9ae41279ae8e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setIsSubmitted(true);
        event.currentTarget.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("An error occurred while submitting the form");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)]">
                <CheckCircle className="w-4 h-4" />
                Message Sent Successfully
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-[family-name:var(--font-merienda)] text-foreground">
                Thank You!
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                We&apos;ve received your message and will get back to you within
                24 hours. In the meantime, why not explore our menu or learn
                more about our story?
              </p>
            </div>
            <div className="relative">
              <Card className="bg-primary/5 dark:bg-primary/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-[family-name:var(--font-merienda)] mb-2">
                    Message Received
                  </h3>
                  <p className="text-muted-foreground font-[family-name:var(--font-geist-sans)]">
                    We&apos;ll be in touch soon!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-muted/75 dark:bg-muted/55">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/15 text-primary px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)]">
                <MessageCircle className="w-4 h-4" />
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-[family-name:var(--font-merienda)] text-foreground">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                Have questions about our premium Karak tea? Want to discuss
                catering for your event? Or perhaps you&apos;re interested in a
                business partnership? We&apos;d love to hear from you.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-foreground font-[family-name:var(--font-geist-sans)] mb-1">
                    Quick Response
                  </h3>
                  <p className="text-muted-foreground text-sm font-[family-name:var(--font-geist-sans)]">
                    We respond to all inquiries within 24 hours
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-foreground font-[family-name:var(--font-geist-sans)] mb-1">
                    Personalized Service
                  </h3>
                  <p className="text-muted-foreground text-sm font-[family-name:var(--font-geist-sans)]">
                    Every inquiry receives personal attention from our team
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-foreground font-[family-name:var(--font-geist-sans)] mb-1">
                    Expert Guidance
                  </h3>
                  <p className="text-muted-foreground text-sm font-[family-name:var(--font-geist-sans)]">
                    Get recommendations tailored to your specific needs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Card className="bg-card/80 dark:bg-background/50 backdrop-blur-md border border-border/40 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl pb-3 font-bold text-foreground font-[family-name:var(--font-merienda)] text-center">
                  Send us a Message
                </CardTitle>
                <Separator className="bg-primary/20" />
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-foreground font-[family-name:var(--font-geist-sans)]"
                      >
                        Full Name *
                      </Label>
                      {/* <input
                        type="hidden"
                        name="replyto"
                        value="ixyoussef46@gmail.com"
                      /> */}
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        required
                        className="border-primary/40 bg-primary/15 dark:bg-primary/10 focus-visible:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-foreground font-[family-name:var(--font-geist-sans)]"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="border-primary/40 bg-primary/15 dark:bg-primary/10 focus-visible:border-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-foreground font-[family-name:var(--font-geist-sans)]"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+971 XX XXX XXXX"
                      className="border-primary/40 bg-primary/15 dark:bg-primary/10 focus-visible:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-foreground font-[family-name:var(--font-geist-sans)]"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your inquiry, event details, or any questions you have..."
                      required
                      rows={5}
                      className="border-primary/40 bg-primary/15 dark:bg-primary/10 focus-visible:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 text-base font-semibold"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
