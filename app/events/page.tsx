"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Laptop,
  Bot,
  Target,
  Wrench,
  Zap,
  Mic,
  Calendar,
  Clock,
  type LucideIcon,
} from "lucide-react";

export default function EventsPage() {
  const events: Array<{
    id: string;
    title: string;
    icon: LucideIcon;
    day: string;
    date: string;
    time: string;
    description: string;
    highlights: string[];
  }> = [
    {
      id: "hackaway",
      title: "Overnight Hackathon – HackAway",
      icon: Laptop,
      day: "Day 1",
      date: "23 January 2026",
      time: "7:00 PM - 2:00 PM (Next Day)",
      description:
        "An electrifying overnight hackathon where creativity, innovation, and teamwork take center stage! Brings together software development and hardware design.",
      highlights: [
        "Build software & hardware solutions",
        "Collaborate with teammates",
        "Win exciting prizes",
        "Mentorship from experts",
      ],
    },
    {
      id: "exhibition",
      title: "Robotics Exhibition",
      icon: Bot,
      day: "Day 2",
      date: "24 January 2026",
      time: "8:00 AM - 2:00 PM",
      description:
        "Step into the world of cutting-edge technology. Witness innovative robot models, futuristic AI concepts, and automation breakthroughs designed by the club.",
      highlights: [
        "Innovative robot models",
        "Futuristic AI concepts",
        "Automation breakthroughs",
        "Interactive demonstrations",
      ],
    },
    {
      id: "blindfold",
      title: "Blindfold Droid Trooper",
      icon: Target,
      day: "Day 2",
      date: "24 January 2026",
      time: "10:00 AM - 2:00 PM",
      description:
        "A fun event where the bot handler is blindfolded and guided by teammates' voice commands through a challenging maze.",
      highlights: [
        "Team coordination challenge",
        "Voice-guided navigation",
        "Exciting maze obstacles",
        "Test your communication skills",
      ],
    },
    {
      id: "workshop",
      title: "Robotics Workshop",
      icon: Wrench,
      day: "Day 2",
      date: "24 January 2026",
      time: "3:00 PM - 7:30 PM",
      description:
        "Hands-on robotics building experience with expert mentorship. Learn the fundamentals and build your own robot!",
      highlights: [
        "Build your own robot",
        "Expert mentorship",
        "Hands-on learning",
        "Take your creation home",
      ],
    },
    {
      id: "burst-brawl",
      title: "Burst n Brawl",
      icon: Zap,
      day: "Day 3",
      date: "25 January 2026",
      time: "10:00 AM - 1:00 PM",
      description:
        "Two bots battle with 6 balloons each and a needle. 4-minute timer. The team that pops the most balloons wins!",
      highlights: [
        "Bot combat arena",
        "Strategy & precision",
        "Fast-paced action",
        "Exciting prizes",
      ],
    },
    {
      id: "speaker",
      title: "Speaker Session",
      icon: Mic,
      day: "Day 3",
      date: "25 January 2026",
      time: "3:00 PM - 5:00 PM",
      description:
        "Talk by robotics & automation experts. Learn from industry leaders about the future of robotics and AI.",
      highlights: [
        "Industry expert speakers",
        "Future of robotics & AI",
        "Q&A session",
        "Networking opportunities",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-black via-blue-950 to-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-4 h-4 bg-yellow-400 rounded-full"
            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 right-20 w-3 h-3 bg-yellow-400 rounded-full"
            animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Event <span className="text-yellow-400">Schedule</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Three days of innovation, competition, and learning. Choose your
            events and get ready to compete!
          </motion.p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-linear-to-br from-gray-900 to-black border-2 border-yellow-400/50 hover:border-yellow-400 transition-all h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <event.icon className="w-12 h-12 text-yellow-400" />
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                        {event.day}
                      </span>
                    </div>
                    <CardTitle className="text-2xl text-yellow-400 mb-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" /> {event.time}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <div className="space-y-2 mb-4">
                      {event.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-gray-400"
                        >
                          <span className="text-yellow-400 mr-2">▸</span>
                          {highlight}
                        </div>
                      ))}
                    </div>
                    {event.id === "hackaway" && (
                      <Link href="/hackaway">
                        <Button variant="pacman" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Event <span className="text-yellow-400">Timeline</span>
          </motion.h2>

          <div className="space-y-8">
            {["Day 1 - 23 Jan", "Day 2 - 24 Jan", "Day 3 - 25 Jan"].map(
              (day, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-yellow-400 pl-6 py-4"
                >
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    {day}
                  </h3>
                  {events
                    .filter((e) => e.day === `Day ${index + 1}`)
                    .map((event) => (
                      <div key={event.id} className="mb-3 text-gray-300">
                        <span className="font-semibold">{event.time}</span> -{" "}
                        {event.title}
                      </div>
                    ))}
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-yellow-400 to-yellow-500 p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold text-black mb-4">
              Ready to Participate?
            </h2>
            <p className="text-black/80 text-lg mb-8">
              Register your team now and secure your spot in RoboSaga '26!
            </p>
            <Link href="/teams">
              <button className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-colors text-lg">
                Register Team
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
