"use client";

import {
  Database,
  Cookie,
  Users,
  Mail,
  Phone,
  MapPin,
  Settings,
} from "lucide-react";

export default function PrivacyContentSection() {
  const privacySections = [
    {
      id: "data-collection",
      icon: Database,
      title: "Information We Collect",
      description: "Understanding what data we gather and why",
      content: [
        {
          subtitle: "Personal Information",
          details:
            "We collect information you provide directly, such as your name, email address, phone number, and delivery address when you place orders or create an account.",
        },
        {
          subtitle: "Usage Information",
          details:
            "We automatically collect information about how you use our website, including your IP address, browser type, pages visited, and time spent on our site.",
        },
        {
          subtitle: "Location Data",
          details:
            "With your permission, we may collect location information to help you find nearby Dubai Karak locations and provide accurate delivery services.",
        },
      ],
    },
    {
      id: "data-usage",
      icon: Settings,
      title: "How We Use Your Information",
      description: "The purposes behind our data collection",
      content: [
        {
          subtitle: "Service Delivery",
          details:
            "We use your information to process orders, arrange deliveries, and provide customer support for the best Dubai Karak experience.",
        },
        {
          subtitle: "Communication",
          details:
            "We may send you order updates, promotional offers, and important service announcements related to Dubai Karak.",
        },
        {
          subtitle: "Improvement",
          details:
            "We analyze usage patterns to enhance our website, services, and develop new offerings that better serve our customers.",
        },
      ],
    },
    {
      id: "cookies",
      icon: Cookie,
      title: "Cookies & Tracking",
      description: "How we use cookies to enhance your experience",
      content: [
        {
          subtitle: "Essential Cookies",
          details:
            "These cookies are necessary for our website to function properly, including maintaining your shopping cart and login status.",
        },
        {
          subtitle: "Analytics Cookies",
          details:
            "We use analytics cookies to understand how visitors interact with our website, helping us improve user experience and site performance.",
        },
        {
          subtitle: "Marketing Cookies",
          details:
            "With your consent, we use marketing cookies to show you relevant advertisements and measure the effectiveness of our campaigns.",
        },
      ],
    },
    {
      id: "data-sharing",
      icon: Users,
      title: "Information Sharing",
      description: "When and how we share your data",
      content: [
        {
          subtitle: "Service Providers",
          details:
            "We share information with trusted third-party service providers who help us operate our business, such as payment processors and delivery partners.",
        },
        {
          subtitle: "Legal Requirements",
          details:
            "We may disclose information when required by law, to protect our rights, or to ensure the safety of our customers and employees.",
        },
        {
          subtitle: "Business Transfers",
          details:
            "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-muted/75 dark:bg-muted/55">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Privacy Policy Content */}
        <div className="space-y-16">
          {privacySections.map((section, index) => (
            <div key={section.id} className="space-y-8">
              {/* Section Header */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 p-3 rounded-xl">
                    <section.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-merienda)]">
                  {section.title}
                </h2>
                <p className="text-lg text-muted-foreground font-[family-name:var(--font-geist-sans)] max-w-2xl mx-auto">
                  {section.description}
                </p>
              </div>
              {/* Content Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.content.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="group shadow-xs relative overflow-hidden bg-background/80 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-2xl p-6 transition-all duration-300 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    <div className="relative z-10 space-y-4">
                      <h3 className="text-xl font-semibold text-foreground font-[family-name:var(--font-merienda)]">
                        {item.subtitle}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                        {item.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* Contact Information Section */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-4">
                <div className="bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 p-3 rounded-xl">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-merienda)]">
                Privacy Contact
              </h2>
              <p className="text-lg text-muted-foreground font-[family-name:var(--font-geist-sans)] max-w-3xl mx-auto">
                Have questions about your privacy or want to exercise your
                rights? We&apos;re here to help.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group shadow-xs relative overflow-hidden bg-background/80 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
                <div className="relative z-10 space-y-4">
                  <div className="bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground font-[family-name:var(--font-merienda)]">
                    Email Us
                  </h3>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">
                    privacy@dubaikarak.com
                  </p>
                </div>
              </div>
              <div className="group shadow-xs relative overflow-hidden bg-background/80 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
                <div className="relative z-10 space-y-4">
                  <div className="bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground font-[family-name:var(--font-merienda)]">
                    Call Us
                  </h3>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">
                    +971 4 XXX XXXX
                  </p>
                </div>
              </div>
              <div className="group shadow-xs relative overflow-hidden bg-background/80 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
                <div className="relative z-10 space-y-4">
                  <div className="bg-primary/15 dark:bg-primary/20 border border-primary/20 dark:border-primary/10 p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground font-[family-name:var(--font-merienda)]">
                    Visit Us
                  </h3>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">
                    Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
