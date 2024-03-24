import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Offering", href: "#" },
  { label: "Selection Process", href: "#" },
  { label: "Why Join?", href: "#" },
  { label: "Join Now", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Dynamic Community",
    description:
      " Join an exclusive community dedicated to nurturing startup enthusiasts in Bangalore.",
  },
  {
    icon: <Fingerprint />,
    text: "Career Opportunities",
    description:
      "Explore various career paths including co-founder roles, project management, graphic design, and more!",
  },
  {
    icon: <ShieldHalf />,
    text: "Access to PedalStart Meetups",
    description:
      "Get exclusive access to offline meetups and online events organized by PedalStart.",
  },
  {
    icon: <BatteryCharging />,
    text: "Connect with Startups",
    description:
      " Network and connect with accelerated startups and cohorts within the startup ecosystem.",
  },
  {
    icon: <PlugZap />,
    text: "Collaborative Projects",
    description:
      "Participate in projects, hackathons, and initiatives with fellow members. Pool together expertise, creativity, and passion to tackle real-world challenges, innovate, and make a meaningful impact.",
  },
  {
    icon: <GlobeLock />,
    text: "Mentorship Programs",
    description:
      "Access exclusive mentorship programs and guidance from seasoned entrepreneurs and industry experts. Benefit from their invaluable insights, advice, and experience as you navigate the challenges and opportunities of the startup ecosystem.",
  },
];

export const checklistItems = [
  {
    title: "Form Screening",
    description:
      "Complete a simple form expressing your interest in joining PedalConnect",
  },
  {
    title: "One-on-One Interaction",
    description:
      " Engage in a personalized interaction to understand your aspirations and interests.",
  },
  {
    title: "Express Your Interest",
    description:
      "Kickstart your journey by filling out a brief form expressing your interest in joining PedalConnect. Tell us about yourself, your passions, and what you hope to achieve within the community.",
  },
  {
    title: "Personalized Interaction",
    description:
      "Experience a personalized one-on-one interaction with our team. Dive deeper into your aspirations, goals, and interests. We're here to understand your unique journey and how PedalConnect can support you along the way.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
