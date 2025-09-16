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
    <section
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
      aria-label="EternaStay hero"
    >
  <div className="relative h-[70vh] md:h-[82vh]">
        <motion.div initial={{ scale: 1.05, opacity: 0.6 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1502920917128-1aa500764f39?q=80&w=1920&auto=format&fit=crop"
            alt="Modern coastal hotel by the ocean at sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                EternaStay — Modern Coastal Comfort in Mombasa
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
                A premium, minimalist escape on the Indian Ocean. Sunlit rooms, curated textures, and thoughtful service — designed for calm.
              </p>

              <div className="mt-8 flex gap-3">
                <Button size="lg">Check Availability</Button>
                <Button variant="ghost" size="lg">Explore Rooms</Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}>
              <Card className="mx-auto max-w-5xl rounded-2xl shadow-md backdrop-blur bg-background/85">
                <CardContent className="p-4 md:p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 items-end">
                    <div className="grid gap-1">
                      <Label htmlFor="checkin">Check-in</Label>
                      <Input id="checkin" type="date" placeholder="" className="rounded-xl" />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="checkout">Check-out</Label>
                      <Input id="checkout" type="date" placeholder="" className="rounded-xl" />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="guests">Guests</Label>
                      <select id="guests" className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option>1 Adult</option>
                        <option>2 Adults</option>
                        <option>Family (3+)</option>
                      </select>
                    </div>
                    <div className="grid gap-1">
                      <Label className="opacity-0 select-none">Continue</Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span>
                              <Button size="lg" className="w-full rounded-xl" disabled>
                                Continue
                              </Button>
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>Booking engine coming soon</TooltipContent>
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
