// data/content.ts — single source of truth for all portfolio content

export const meta = {
  name: "Darshika Vijaykumar",
  tagline: "Undergraduate in Business Management",
  email: "vijaykumardarshika@gmail.com",
  phone: "075-351 7933",
  location: "Wellampitiya, Sri Lanka",
  cvPath: "/darshika-cv.pdf",
  profileImage: "/profile.jpg",
};

export const about = {
  heading: "Professional Profile",
  body: `A driven and dedicated second-year Business Management undergraduate at SLIIT City Uni, with a strong academic foundation and a genuine interest in business and professional development. Developed communication, teamwork, problem-solving and organisational skills through academic projects and collaborative activities. Proficient in Microsoft Office applications, adaptable to dynamic environments, and committed to learning, contributing and completing responsibilities efficiently.`,
};

export const education = [
  {
    id: "sliit",
    institution: "SLIIT City Uni",
    degree: "Bachelor of Business Management",
    period: "2024 – Present",
    detail: "Cumulative GPA 3.68",
  },
  {
    id: "al",
    institution: "G.C.E. Advanced Level 2022",
    degree: "ARTS Stream",
    period: "2022",
    detail: "General English S · Political Science S · Sinhala & Literature S",
  },
  {
    id: "ol",
    institution: "G.C.E. Ordinary Level 2019",
    degree: "",
    period: "2019",
    detail: "1A · 1B · 3C passes",
  },
];

export const skills = [
  { id: "time", label: "Time Management", icon: "⏱" },
  { id: "ms", label: "MS Office", icon: "💼" },
  { id: "mgmt", label: "Management Skills", icon: "📊" },
  { id: "team", label: "Teamwork & Collaboration", icon: "🤝" },
  { id: "adapt", label: "Adaptability", icon: "🔄" },
  { id: "org", label: "Organisation & Attention to Detail", icon: "✅" },
];

export const projects = [
  {
    id: "p1",
    title: "Digital Marketing Campaign",
    subtitle: "\"Frame Your Moment with Udarata\"",
    category: "Marketing",
    color: "#C9A227",
  },
  {
    id: "p2",
    title: "CSR Project at Gamini Matha Elder's Home",
    subtitle: "\"Moments of Grace\"",
    category: "CSR",
    color: "#1E2A47",
  },
  {
    id: "p3",
    title: "Customer Satisfaction Study",
    subtitle: "Statistical study on major supermarket chains in Sri Lanka",
    category: "Research",
    color: "#2D3E6A",
  },
  {
    id: "p4",
    title: "AI & Robotics in Manufacturing",
    subtitle: "Research on advancements in manufacturing factories",
    category: "Research",
    color: "#3A2D1F",
  },
  {
    id: "p5",
    title: "Monetary Policy & SME Growth",
    subtitle: "Effectiveness of Monetary Policy on Inflation Control in Sri Lanka: 2019–2024",
    category: "Economics",
    color: "#1A3A2D",
  },
];

export const leadership = [
  { id: "art", role: "Leader", org: "School Art Union", icon: "🎨" },
  { id: "leo", role: "Member", org: "Leo Club", icon: "🦁" },
  {
    id: "sports",
    role: "Consistent Participant",
    org: "Inter-school sports & academic competitions",
    icon: "🏅",
  },
];

export const languages = [
  { id: "en", name: "English", proficiency: 85 },
  { id: "si", name: "Sinhala", proficiency: 95 },
  { id: "ta", name: "Tamil", proficiency: 60 },
];
