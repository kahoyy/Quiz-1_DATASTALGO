// Dummy data for SimDrei ComShop - Internet Café
export const businessData = {
  name: 'SimDrei ComShop',
  tagline: 'Premier Internet Café & Gaming Lounge',
  description: 'SimDrei ComShop is a modern internet café offering high-performance gaming stations, comfortable workspaces, and a vibrant community environment for gamers, students, and professionals.',
  foundedYear: 2018,
  location: 'Tech City, Digital District',
  email: 'info@simdrei-comshop.com',
  phone: '+1-800-COMSHOP',
  address: '123 Gaming Avenue, Tech City, TC 12345',
};

export const teamMembers = [
  {
    id: 1,
    name: 'Michael Richardson',
    title: 'Founder & CEO',
    bio: 'Gaming enthusiast with 15+ years of experience in internet cafés and digital entertainment.',
    specialty: 'Business Strategy & Customer Experience',
    image: 'https://via.placeholder.com/150?text=Michael+R',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    title: 'Operations Manager',
    bio: 'Expert in facility management and ensuring optimal gaming experience for all customers.',
    specialty: 'Operations & Station Management',
    image: 'https://via.placeholder.com/150?text=Sarah+C',
  },
  {
    id: 3,
    name: 'David Martinez',
    title: 'Gaming Events Coordinator',
    bio: 'Passionate about organizing tournaments and gaming events for the community.',
    specialty: 'Events & Community Engagement',
    image: 'https://via.placeholder.com/150?text=David+M',
  },
  {
    id: 4,
    name: 'Emily Foster',
    title: 'Customer Service Manager',
    bio: 'Dedicated to providing exceptional customer service and technical support.',
    specialty: 'Customer Support & Relations',
    image: 'https://via.placeholder.com/150?text=Emily+F',
  },
];

export const productCategories = [
  {
    id: 1,
    name: 'Ultra Gaming',
    icon: '🎮',
    description: 'Top-tier gaming stations for competitive gaming',
    stations: [
      { id: 101, name: 'Ultimate Rig #1', specs: 'RTX 4090, i9-13900K, 64GB RAM, 240Hz Monitor', pricePerHour: 12.99, availability: true },
      { id: 102, name: 'Ultimate Rig #2', specs: 'RTX 4090, i9-13900K, 64GB RAM, 240Hz Monitor', pricePerHour: 12.99, availability: true },
      { id: 103, name: 'Ultimate Rig #3', specs: 'RTX 4090, i9-13900K, 64GB RAM, 240Hz Monitor', pricePerHour: 12.99, availability: false },
      { id: 104, name: 'Ultimate Rig #4', specs: 'RTX 4090, i9-13900K, 64GB RAM, 240Hz Monitor', pricePerHour: 12.99, availability: true },
    ],
  },
  {
    id: 2,
    name: 'Pro Gaming',
    icon: '⚡',
    description: 'High-performance gaming stations with excellent specs',
    stations: [
      { id: 201, name: 'Pro Station #1', specs: 'RTX 4080, i7-13700K, 32GB RAM, 165Hz Monitor', pricePerHour: 8.99, availability: true },
      { id: 202, name: 'Pro Station #2', specs: 'RTX 4080, i7-13700K, 32GB RAM, 165Hz Monitor', pricePerHour: 8.99, availability: true },
      { id: 203, name: 'Pro Station #3', specs: 'RTX 4080, i7-13700K, 32GB RAM, 165Hz Monitor', pricePerHour: 8.99, availability: true },
      { id: 204, name: 'Pro Station #4', specs: 'RTX 4080, i7-13700K, 32GB RAM, 165Hz Monitor', pricePerHour: 8.99, availability: true },
    ],
  },
  {
    id: 3,
    name: 'Casual Gaming',
    icon: '🎯',
    description: 'Comfortable stations for casual gaming and browsing',
    stations: [
      { id: 301, name: 'Casual Station #1', specs: 'RTX 3070, i5-12600K, 16GB RAM, 144Hz Monitor', pricePerHour: 4.99, availability: true },
      { id: 302, name: 'Casual Station #2', specs: 'RTX 3070, i5-12600K, 16GB RAM, 144Hz Monitor', pricePerHour: 4.99, availability: true },
      { id: 303, name: 'Casual Station #3', specs: 'RTX 3070, i5-12600K, 16GB RAM, 144Hz Monitor', pricePerHour: 4.99, availability: false },
      { id: 304, name: 'Casual Station #4', specs: 'RTX 3070, i5-12600K, 16GB RAM, 144Hz Monitor', pricePerHour: 4.99, availability: true },
    ],
  },
  {
    id: 4,
    name: 'Workstations',
    icon: '💻',
    description: 'Professional workstations for students and professionals',
    stations: [
      { id: 401, name: 'Work Desk #1', specs: 'RTX 2080, i7-11700, 16GB RAM, Dual 27" Monitors', pricePerHour: 5.99, availability: true },
      { id: 402, name: 'Work Desk #2', specs: 'RTX 2080, i7-11700, 16GB RAM, Dual 27" Monitors', pricePerHour: 5.99, availability: true },
      { id: 403, name: 'Work Desk #3', specs: 'RTX 2080, i7-11700, 16GB RAM, Dual 27" Monitors', pricePerHour: 5.99, availability: true },
      { id: 404, name: 'Work Desk #4', specs: 'RTX 2080, i7-11700, 16GB RAM, Dual 27" Monitors', pricePerHour: 5.99, availability: true },
    ],
  },
  {
    id: 5,
    name: 'VIP Booths',
    icon: '👑',
    description: 'Premium private gaming booths with max comfort',
    stations: [
      { id: 501, name: 'VIP Booth #1', specs: 'RTX 4090, i9-13900K, 64GB RAM, 360Hz Monitor, Private Booth', pricePerHour: 19.99, availability: true },
      { id: 502, name: 'VIP Booth #2', specs: 'RTX 4090, i9-13900K, 64GB RAM, 360Hz Monitor, Private Booth', pricePerHour: 19.99, availability: true },
      { id: 503, name: 'VIP Booth #3', specs: 'RTX 4090, i9-13900K, 64GB RAM, 360Hz Monitor, Private Booth', pricePerHour: 19.99, availability: false },
    ],
  },
  {
    id: 6,
    name: 'Streaming Zones',
    icon: '📡',
    description: 'Equipped with streaming setup and green screen',
    stations: [
      { id: 601, name: 'Stream Studio #1', specs: 'RTX 3090 Ti, i9-12900K, 64GB RAM, Streaming Equipment', pricePerHour: 14.99, availability: true },
      { id: 602, name: 'Stream Studio #2', specs: 'RTX 3090 Ti, i9-12900K, 64GB RAM, Streaming Equipment', pricePerHour: 14.99, availability: true },
      { id: 603, name: 'Stream Studio #3', specs: 'RTX 3090 Ti, i9-12900K, 64GB RAM, Streaming Equipment', pricePerHour: 14.99, availability: true },
    ],
  },
];

export const services = [
  {
    id: 1,
    name: 'Hourly Rate',
    description: 'Pay-as-you-go hourly rates for casual gaming and browsing.',
    icon: '⏱️',
    price: 'From $4.99/hr',
    features: ['Access to all public stations', 'Free WiFi', 'Comfortable seating'],
  },
  {
    id: 2,
    name: 'Daily Pass',
    description: 'Unlimited access throughout the day for serious gamers.',
    icon: '📅',
    price: '$39.99',
    features: ['8-hour unlimited access', 'Priority station booking', 'Free snacks/drinks'],
  },
  {
    id: 3,
    name: 'Monthly Membership',
    description: 'Unlimited monthly access with exclusive member benefits.',
    icon: '🎟️',
    price: '$149.99',
    features: ['Unlimited access', 'VIP booth priority', 'Monthly tournament entry', '20% café discount'],
  },
  {
    id: 4,
    name: 'Tournament Hosting',
    description: 'Host your gaming tournaments with our professional setup.',
    icon: '🏆',
    price: 'From $499',
    features: ['Full venue rental', 'Streaming setup', 'Scoreboard & commentary system', 'Event management'],
  },
  {
    id: 5,
    name: 'Private Group Sessions',
    description: 'Reserve stations for your group or team activities.',
    icon: '👥',
    price: 'From $79',
    features: ['Private station booking', 'Team coordination', 'Flexible scheduling', 'Group discounts'],
  },
  {
    id: 6,
    name: 'Food & Beverage',
    description: 'Premium snacks and energy drinks for your gaming session.',
    icon: '🍔',
    price: '$2.99 - $12.99',
    features: ['Gaming-friendly snacks', 'Energy drinks', 'Pizza & meals', 'Delivery to stations'],
  },
];

export const testimonials = [
  {
    id: 1,
    clientName: 'Alex Johnson',
    company: 'Esports Team Lead',
    message: 'SimDrei ComShop has the best gaming stations in the city. Perfect for our team practice sessions!',
    rating: 5,
  },
  {
    id: 2,
    clientName: 'Lisa Wang',
    company: 'Competitive Gamer',
    message: 'Amazing equipment, friendly staff, and great atmosphere. Best internet café Ive ever visited!',
    rating: 5,
  },
  {
    id: 3,
    clientName: 'Robert Collins',
    company: 'Student',
    message: 'Great place to work on projects and relax with friends. Their workstations are top-notch.',
    rating: 4,
  },
  {
    id: 4,
    clientName: 'Maya Patel',
    company: 'Gaming Tournament Winner',
    message: 'Hosted our tournament here last month. Professional setup and excellent customer service!',
    rating: 5,
  },
];
