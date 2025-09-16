"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

export function HomeHero() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" aria-label="EternaStay hero">
      <div className="relative h-[72vh] md:h-[84vh]">
        <motion.div initial={{ scale: 1.04, opacity: 0.8 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
            alt="Premium coastal home with modern minimalist architecture, large glass windows, soft ambient lighting, and serene ocean-side pool area"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/35 md:bg-black/25" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }} className="max-w-3xl text-white">
              <h1 className="font-heading font-semibold tracking-tight leading-tight [letter-spacing:-0.02em] text-[clamp(2.25rem,4vw,4.5rem)]">
                Coastal Homes for Modern Living
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed max-w-2xl">
                1–3 bedroom stays in Mombasa — minimalist architecture, glass-lined spaces and calm, coastal light. Made for couples, families and groups.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" className="rounded-2xl px-6 py-3 font-semibold bg-accent text-ink hover:brightness-110 focus-visible:ring-2 focus-visible:ring-accent/60 -translate-y-0 hover:-translate-y-0.5 transition transform-gpu">
                  Check Availability
                </Button>
                <Button variant="ghost" size="lg" className="text-white/90 hover:text-white underline underline-offset-4 hover:no-underline">
                  Explore Homes
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Booking widget */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}>
              <Card className="mx-auto max-w-5xl rounded-3xl border border-white/15 dark:border-white/15 bg-white/70 dark:bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                <CardContent className="p-4 md:p-6 text-ink">
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:gap-4 items-end">
                    <div className="grid gap-1">
                      <Label htmlFor="checkin">Check-in</Label>
                      <div className="relative">
                        <Input id="checkin" type="date" className="rounded-xl bg-white focus:bg-white placeholder:text-ink/50 pr-10 text-ink" />
                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-ink/70">
                          {/* calendar icon placeholder via text */}
                          📅
                        </span>
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="checkout">Check-out</Label>
                      <div className="relative">
                        <Input id="checkout" type="date" className="rounded-xl bg-white focus:bg-white placeholder:text-ink/50 pr-10 text-ink" />
                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-ink/70">📅</span>
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="guests">Guests</Label>
                      <div className="relative">
                        <select id="guests" className="h-10 w-full rounded-xl border border-ink/10 bg-white px-3 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 pr-10 text-ink">
                          <option>1 Adult</option>
                          <option>2 Adults</option>
                          <option>Family (3+)</option>
                        </select>
                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-ink/70">👤</span>
                      </div>
                    </div>
                    <div className="grid gap-1">
                      <Label className="opacity-0 select-none">Continue</Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span>
                              <Button size="lg" className="w-full rounded-2xl bg-accent text-ink hover:brightness-110 focus-visible:ring-2 focus-visible:ring-accent/60" disabled>
                                Continue
                              </Button>
                            </span>
                          </TooltipTrigger>
                          <TooltipContent className="text-ink">Booking engine coming soon</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
