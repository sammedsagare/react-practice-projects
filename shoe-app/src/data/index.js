import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  airmax1,
  yeezy500,
  ajlegacy312,
  nb650,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: airmax1,
    name: "Nike Air Max 1",
    price: "$200.20",
    rating: "4.9",
  },
  {
    imgURL: yeezy500,
    name: "Yeezy 500",
    price: "$310.20",
    rating: "4.0",
  },
  {
    imgURL: ajlegacy312,
    name: "Nike Air Jordan Legacy 312",
    price: "$520.20",
    rating: "4.7",
  },
  {
    imgURL: nb650,
    name: "New Balance 650R",
    price: "$730.20",
    rating: "4.5",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Oliver Anderson",
    rating: 4.7,
    feedback:
      "Got some killer shoes from this store! Quality is A+, and the Special Offer made it a steal. Highly recommended for both style and savings.",
  },
  {
    imgURL: customer2,
    customerName: "Mia Rodriguez",
    rating: 4.6,
    feedback:
      "Absolutely love my new shoes! Amazing variety and unbeatable prices. Great find for anyone who wants style without breaking the bank.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@easysole.com", link: "mailto:customer@easysole.com" },
      { name: "+1 (555) 123-4567", link: "tel:+1 (555) 555-1234" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
