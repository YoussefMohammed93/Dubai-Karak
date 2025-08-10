"use client";

import {
  FileText,
  CheckCircle,
  UserCheck,
  Shield,
  AlertTriangle,
  Clock,
  Scale,
  Lock,
  Phone,
  Calendar,
  Search,
  Printer,
} from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function TermsContentSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const termsData = [
    {
      id: "introduction",
      icon: FileText,
      title: "Introduction",
      description: "Welcome to Dubai Karak's Terms of Service",
      content: {
        overview:
          "Welcome to Dubai Karak, your premier destination for authentic street-style Karak tea. These Terms of Service ('Terms') govern your use of our website, mobile applications, and services.",
        details: [
          "These terms constitute a legally binding agreement between you and Dubai Karak",
          "By accessing or using our services, you agree to be bound by these terms",
          "If you disagree with any part of these terms, you may not access our services",
          "We reserve the right to update these terms at any time with notice to users",
        ],
      },
    },
    {
      id: "acceptance",
      icon: CheckCircle,
      title: "Acceptance of Terms",
      description: "Your agreement to these terms and conditions",
      content: {
        overview:
          "By accessing and using Dubai Karak's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.",
        details: [
          "You must be at least 18 years old to use our services",
          "If you are under 18, you must have parental or guardian consent",
          "Your continued use of our services constitutes acceptance of any updated terms",
          "These terms apply to all users, including customers, visitors, and business partners",
        ],
      },
    },
    {
      id: "use-license",
      icon: Shield,
      title: "Use License",
      description: "Permitted uses and restrictions of our services",
      content: {
        overview:
          "Dubai Karak grants you a limited, non-exclusive, non-transferable license to use our services for personal, non-commercial purposes.",
        details: [
          "You may browse our website and mobile applications for personal use",
          "You may place orders for our products and services",
          "You may not modify, distribute, or create derivative works from our content",
          "Commercial use requires explicit written permission from Dubai Karak",
          "All intellectual property rights remain with Dubai Karak",
        ],
      },
    },
    {
      id: "user-account",
      icon: UserCheck,
      title: "User Account",
      description: "Account creation and management responsibilities",
      content: {
        overview:
          "To access certain features of our services, you may be required to create a user account with accurate and complete information.",
        details: [
          "You are responsible for maintaining the confidentiality of your account credentials",
          "You must provide accurate, current, and complete information during registration",
          "You are responsible for all activities that occur under your account",
          "You must notify us immediately of any unauthorized use of your account",
          "We reserve the right to suspend or terminate accounts that violate these terms",
        ],
      },
    },
    {
      id: "prohibited-uses",
      icon: AlertTriangle,
      title: "Prohibited Uses",
      description: "Activities and behaviors that are not permitted",
      content: {
        overview:
          "You may not use Dubai Karak's services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our services.",
        details: [
          "Do not use our services for any illegal or unauthorized purpose",
          "Do not transmit any viruses, malware, or other harmful code",
          "Do not attempt to gain unauthorized access to our systems or user accounts",
          "Do not engage in any activity that interferes with or disrupts our services",
          "Do not use our services to harass, abuse, or harm others",
          "Do not violate any applicable laws or regulations",
          "Do not impersonate any person or entity or misrepresent your affiliation",
        ],
      },
    },
    {
      id: "service-availability",
      icon: Clock,
      title: "Service Availability",
      description: "Information about service uptime and maintenance",
      content: {
        overview:
          "While we strive to provide continuous service availability, Dubai Karak does not guarantee uninterrupted access to our services.",
        details: [
          "Services may be temporarily unavailable due to maintenance or technical issues",
          "We reserve the right to modify, suspend, or discontinue services at any time",
          "We will provide reasonable notice for planned maintenance when possible",
          "Service availability may vary by location and local regulations",
          "We are not liable for any losses resulting from service interruptions",
        ],
      },
    },
    {
      id: "limitation-liability",
      icon: Scale,
      title: "Limitation of Liability",
      description: "Legal limitations on our liability and responsibilities",
      content: {
        overview:
          "Dubai Karak's liability is limited to the maximum extent permitted by applicable law. We provide our services 'as is' without warranties.",
        details: [
          "We are not liable for indirect, incidental, or consequential damages",
          "Our total liability shall not exceed the amount paid by you for our services",
          "We do not warrant that our services will be error-free or uninterrupted",
          "You use our services at your own risk and discretion",
          "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you",
        ],
      },
    },
    {
      id: "privacy-policy",
      icon: Lock,
      title: "Privacy Policy Reference",
      description: "How we handle your personal information",
      content: {
        overview:
          "Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information.",
        details: [
          "Please review our Privacy Policy to understand our data practices",
          "By using our services, you consent to our Privacy Policy",
          "We collect only necessary information to provide our services",
          "We implement appropriate security measures to protect your data",
          "You have rights regarding your personal information as outlined in our Privacy Policy",
        ],
      },
    },
    {
      id: "governing-law",
      icon: Scale,
      title: "Governing Law",
      description: "Legal jurisdiction and applicable laws",
      content: {
        overview:
          "These Terms of Service are governed by and construed in accordance with the laws of the United Arab Emirates.",
        details: [
          "Any disputes shall be resolved in the courts of Dubai, UAE",
          "UAE Federal Law and Dubai Local Law apply to these terms",
          "If any provision is found unenforceable, the remaining provisions remain in effect",
          "These terms constitute the entire agreement between you and Dubai Karak",
          "No waiver of any term shall be deemed a continuing waiver",
        ],
      },
    },
    {
      id: "contact",
      icon: Phone,
      title: "Contact Information",
      description: "How to reach us for questions or concerns",
      content: {
        overview:
          "If you have any questions about these Terms of Service, please contact us using the information below.",
        details: [
          "Email: legal@dubaikarak.com",
          "Phone: +971 4 XXX XXXX",
          "Address: Dubai, United Arab Emirates",
          "Business Hours: Sunday to Thursday, 9:00 AM to 6:00 PM GST",
          "We will respond to your inquiries within 48 hours during business days",
        ],
      },
    },
  ];

  const tableOfContents = [
    { id: "introduction", title: "Introduction", icon: FileText },
    { id: "acceptance", title: "Acceptance of Terms", icon: CheckCircle },
    { id: "use-license", title: "Use License", icon: Shield },
    { id: "user-account", title: "User Account", icon: UserCheck },
    { id: "prohibited-uses", title: "Prohibited Uses", icon: AlertTriangle },
    { id: "service-availability", title: "Service Availability", icon: Clock },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      icon: Scale,
    },
    { id: "privacy-policy", title: "Privacy Policy", icon: Lock },
    { id: "governing-law", title: "Governing Law", icon: Scale },
    { id: "contact", title: "Contact Information", icon: Phone },
  ];

  const filteredSections = termsData.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.content.overview
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      section.content.details.some((detail) =>
        detail.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <section className="py-20 bg-muted/75 dark:bg-muted/55">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Search */}
              <Card className="bg-card/80 dark:bg-muted/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-[family-name:var(--font-geist-sans)] flex items-center gap-2">
                    <Search className="h-5 w-5 text-primary" />
                    Search Terms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    placeholder="Search terms..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </CardContent>
              </Card>
              {/* Table of Contents */}
              <Card className="bg-card/80 dark:bg-muted/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-[family-name:var(--font-geist-sans)]">
                    Table of Contents
                  </CardTitle>
                  <CardDescription>Jump to any section</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px]">
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3 hover:bg-accent hover:text-accent-foreground ${
                              activeSection === item.id
                                ? "bg-primary/10 text-primary border border-primary/20"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <Icon className="h-4 w-4 flex-shrink-0" />
                            <span className="text-sm font-medium font-[family-name:var(--font-geist-sans)] truncate">
                              {item.title}
                            </span>
                          </button>
                        );
                      })}
                    </nav>
                  </ScrollArea>
                </CardContent>
              </Card>
              {/* Actions */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={handlePrint}
                    >
                      <Printer className="h-4 w-4" />
                      Print Terms
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => scrollToSection("contact")}
                    >
                      <Phone className="h-4 w-4" />
                      Contact Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-merienda)] mb-4">
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 dark:from-primary dark:via-primary/80 dark:to-primary/90 bg-clip-text text-transparent">
                    Detailed Terms & Conditions
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-[family-name:var(--font-geist-sans)]">
                  Please read these terms carefully. They contain important
                  information about your rights and obligations.
                </p>
                {/* Effective Date and Version Info */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <div className="inline-flex items-center gap-2 bg-background/85 dark:bg-muted/90 backdrop-blur-md border border-border/40 px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)]">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">
                      Effective: January 15, 2025
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-background/85 dark:bg-muted/90 backdrop-blur-md border border-border/40 px-4 py-2 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)]">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Version 2.1</span>
                  </div>
                </div>
              </div>
              {/* Search Results Info */}
              {searchTerm && (
                <div className="mb-6 p-4 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">
                    {filteredSections.length === 0
                      ? `No results found for "${searchTerm}"`
                      : `Found ${filteredSections.length} section${
                          filteredSections.length !== 1 ? "s" : ""
                        } matching "${searchTerm}"`}
                  </p>
                </div>
              )}
              {filteredSections.length === 0 && searchTerm ? (
                <Card className="text-center py-12">
                  <CardContent>
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-geist-sans)]">
                      No Results Found
                    </h3>
                    <p className="text-muted-foreground font-[family-name:var(--font-geist-sans)]">
                      Try adjusting your search terms or browse all sections
                      above.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => setSearchTerm("")}
                    >
                      Clear Search
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <>
                  {/* Terms Sections */}
                  <Accordion type="multiple" className="space-y-4">
                    {filteredSections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <AccordionItem
                          key={section.id}
                          value={section.id}
                          className="border border-border/40 shadow-xs rounded-2xl overflow-hidden bg-background/80 dark:bg-muted/80 backdrop-blur-md"
                          data-section={section.id}
                          id={section.id}
                        >
                          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50 transition-colors duration-200">
                            <div className="flex items-center gap-4 text-left">
                              <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-lg">
                                <Icon className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold font-[family-name:var(--font-geist-sans)]">
                                  {section.title}
                                </h3>
                                <p className="text-sm text-muted-foreground font-[family-name:var(--font-geist-sans)]">
                                  {section.description}
                                </p>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6">
                            <div className="space-y-4 pt-4">
                              <p className="text-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                                {section.content.overview}
                              </p>
                              <Separator />
                              <ul className="space-y-3">
                                {section.content.details.map(
                                  (detail, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start gap-3"
                                    >
                                      <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                                      <span className="text-muted-foreground font-[family-name:var(--font-geist-sans)] leading-relaxed">
                                        {detail}
                                      </span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </>
              )}
              {/* Additional Legal Information */}
              <Card className="mt-12 bg-card/80 dark:bg-muted/60 border-border/40">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                        <Scale className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold font-[family-name:var(--font-merienda)]">
                      Questions About These Terms?
                    </h3>
                    <p className="text-muted-foreground font-[family-name:var(--font-geist-sans)] max-w-2xl mx-auto">
                      If you have any questions about these Terms of Service,
                      please don&apos;t hesitate to contact our legal team.
                      We&apos;re here to help clarify any concerns you may have.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <Button onClick={() => scrollToSection("contact")}>
                        <Phone className="h-4 w-4" />
                        Contact Legal Team
                      </Button>
                      <Button variant="outline" onClick={handlePrint}>
                        <Printer className="h-4 w-4" />
                        Print Terms
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
