"use client";

import { Users, Globe, Award, Quote, Compass } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="pb-1 bg-muted/75 dark:bg-muted/55">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Hero Story Introduction */}
        <div className="relative mb-24">
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-primary/10 dark:bg-primary/15 text-primary px-6 py-3 rounded-full text-sm font-medium font-[family-name:var(--font-geist-sans)] mb-8">
              <Compass className="w-5 h-5" />
              <span>Our Journey Through Time</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight font-[family-name:var(--font-merienda)] text-foreground pb-10">
              Where{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Tradition
              </span>{" "}
              Meets{" "}
              <span className="bg-gradient-to-r from-primary/80 via-primary to-primary/90 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <div className="relative">
              <Quote className="absolute -top-4 -left-2 sm:-left-8 w-8 h-8 text-primary/30" />
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)] italic">
                In the bustling streets of Dubai, where cultures converge and
                stories unfold, we discovered the soul of authentic Karak—a
                tradition that transcends time and touches hearts.
              </p>
              <Quote className="absolute -bottom-4 -right-2 sm:-right-4 w-8 h-8 text-primary/30 rotate-180" />
            </div>
          </div>
        </div>
        {/* Story Flow - Unique Timeline Layout */}
        <div className="mb-24">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/30 via-primary/60 to-primary/30 rounded-full hidden lg:block"></div>
            {/* Timeline Items */}
            <div className="space-y-6 lg:space-y-24">
              {/* Heritage Story - Left Side */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="flex-1">
                  <div className="group bg-background/80 dark:bg-muted/80 shadow-sm relative overflow-hidden backdrop-blur-md border border-border/40 rounded-3xl p-8 transition-all duration-300 cursor-pointer">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl">
                          <Globe className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground font-[family-name:var(--font-merienda)]">
                            Rich Heritage
                          </h3>
                          <p className="text-start text-primary font-medium">
                            Where it all began
                          </p>
                        </div>
                      </div>
                      <p className="text-start text-lg text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                        In the heart of Dubai&apos;s bustling streets, where the
                        aroma of spices dances through the air, we discovered
                        the timeless art of Karak brewing. Each recipe, passed
                        down through generations, carries the soul of authentic
                        street culture—a heritage we proudly preserve and honor.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="hidden lg:flex w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10 flex-shrink-0"></div>
                <div className="flex-1 lg:block hidden"></div>
              </div>
              {/* Quality Mission - Right Side */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="flex-1 lg:block hidden"></div>
                {/* Timeline Dot */}
                <div className="hidden lg:flex w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="shadow-sm group relative overflow-hidden bg-background/80 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-3xl p-8 transition-all duration-300 cursor-pointer">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl">
                          <Award className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground font-[family-name:var(--font-merienda)]">
                            Quality Mission
                          </h3>
                          <p className="text-primary font-medium">
                            Excellence in every sip
                          </p>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                        Our quest for perfection led us across continents to
                        source the finest Indian tea leaves. Combined with
                        purified water and traditional brewing techniques, we
                        ensure every cup delivers an uncompromising experience
                        of premium quality and authentic taste.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Community Focus - Left Side */}
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="flex-1">
                  <div className="shadow-sm group relative overflow-hidden bg-background/80 dark:bg-muted/80 backdrop-blur-md border border-border/40 rounded-3xl p-8 transition-all duration-300 cursor-pointer">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-4 rounded-2xl">
                          <Users className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground font-[family-name:var(--font-merienda)]">
                            Community Heart
                          </h3>
                          <p className="text-primary font-medium">
                            Bringing people together
                          </p>
                        </div>
                      </div>
                      <p className="text-start text-lg text-muted-foreground leading-relaxed font-[family-name:var(--font-geist-sans)]">
                        We believe Karak is more than a beverage—it&apos;s a
                        bridge that connects hearts and cultures. By positioning
                        ourselves in vibrant markets and festivals, we become
                        part of the community&apos;s daily rhythm, creating
                        moments of connection and shared joy.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Timeline Dot */}
                <div className="hidden lg:flex w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10 flex-shrink-0"></div>
                <div className="flex-1 lg:block hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
