import p1 from "../assets/agri.jpeg";
import p2 from "../assets/book.jpeg";
import p3 from "../assets/chatt.png";
import ecommerceImg from "../assets/eda.jpg";
import image3 from "../assets/exp.jpeg";
import image4 from "../assets/flowerapp.jpeg";

export const projects = [
  {
    id: 1,
    title: 'Full AI-Powered Analytics Dashboard',
    category: 'data-science',
    tags: ['Python', 'React', 'Machine Learning', 'TensorFlow'],
    image: p1, // Image from imported assets
    description: 'An analytics dashboard with AI-powered insights and predictions.',
    fullDescription: 'A full-scale analytics dashboard that integrates machine learning models to provide real-time data insights, predictions, and visualizations. Built using React for the frontend and Python (Flask) for the backend, with TensorFlow handling the ML models.',
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [p2, p3], // Gallery images imported
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    category: 'web-development',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    image: ecommerceImg, // Updated to use an imported asset
    description: 'A full-featured e-commerce platform with payment integration.',
    fullDescription: 'A robust e-commerce platform with integrated payment processing, user authentication, and product management. Built with Next.js, Node.js, and MongoDB for the backend, and integrated Stripe for payment handling.',
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [image3, image4], // Gallery images imported
  },
];