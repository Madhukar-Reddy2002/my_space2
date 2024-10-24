import ipld1 from "../assets/ipld1.jpeg"
import ipld2 from "../assets/ipld2.jpeg"
import ipld3 from "../assets/ipld3.jpg"
import agri1 from "../assets/agri.jpeg";
import agri2 from "../assets/agri.png";
import agri3 from "../assets/agri1.png";
import agri4 from "../assets/agri2.png";
import da1 from "../assets/da1.png"
import da2 from "../assets/da2.png"
import da3 from "../assets/da3.png"
import da4 from "../assets/da4.png"
import da5 from "../assets/da7.png"
import da6 from "../assets/da8.png"
import flow1 from "../assets/flowerapp.jpeg";
import flow2 from "../assets/flower1.png";
import flow3 from "../assets/flower2.png";
import flow4 from "../assets/flower3.png";
import exp1 from "../assets/exp.jpeg";
import exp2 from "../assets/exp1.png";
import chatt2 from "../assets/chatt.png";
import chatt3 from "../assets/chatt1.png";
import chatt4 from "../assets/chatt2.png";
import chatt1 from "../assets/chatty.jpeg";
import exp3 from "../assets/exp2.png"
import exp4 from "../assets/exp3.png"
import book1 from "../assets/book.jpeg";
import book2 from "../assets/book1.png";
import book3 from "../assets/book2.png";
import book4 from "../assets/book3.png";
import w1 from "../assets/weather.jpeg";
import w2 from "../assets/weather1.png";
import w3 from "../assets/weather2.png";
import s1 from "../assets/senti.jpeg";
import s2 from "../assets/sentim.png";
import b1 from "../assets/bank1.png";
import b2 from "../assets/bank2.png";
import b3 from "../assets/bank3.png";
import b4 from "../assets/bank4.png";
import b5 from "../assets/bank5.png";
import b6 from "../assets/bank6.png";
import b7 from "../assets/bank7.png";
const projects = [
  {
    id: 1,
    title: 'Data Genie',
    category: 'data-analytics',
    tags: ['Streamlit', 'Pandas'],
    image: da1,
    description: 'AI-powered assistant for data exploration and model building.',
    fullDescription: 'Data Genie transforms data exploration and model building into an intuitive, hassle-free experience. It uses Streamlit for a dynamic web app interface and Pandas for efficient data manipulation. This project reduces the complexity of analyzing data, offering a smooth user experience without writing complex code. Perfect for users looking to derive insights from data quickly.',
    points: [
      'AI-powered data exploration tool using Streamlit for UI.',
      'Empowers users to explore and analyze datasets easily.',
      'Provides real-time insights and model building features.',
      'Integrated with Pandas for handling and processing data.',
      'Intuitive, coding-free approach to data modeling and analytics.'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [da2, da3, da4, da5, da6],
  },
  {
    id: 2,
    title: 'IPL Guru',
    category: 'data-analytics',
    tags: ['Tableau'],
    image: ipld3,
    description: 'A comprehensive Tableau app exploring IPL data from 2008 to 2018.',
    fullDescription: 'IPL Guru is a deep-dive into IPL history, allowing users to explore rich insights and statistics from 2008-2018. The Tableau-based dashboard visualizes key metrics like match statistics, player performance, and team rankings. Users can filter and interact with the data, empowering them to uncover hidden stories behind the numbers.',
    points: [
      'Explores IPL history from 2008 to 2018 through a Tableau dashboard.',
      'Interactive data visualizations of match and player stats.',
      'Detailed insights into team performances across seasons.',
      'Custom filters allow for personalized data exploration.',
      'Provides rich statistics for cricket enthusiasts.'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [ipld2, ipld1],
  },
  {
    id: 3,
    title: 'Indian Agriculture Dashboard',
    category: 'data-analytics',
    tags: ['Streamlit', 'Plotly'],
    image: agri1,
    description: 'An interactive dashboard to explore Indian agriculture data.',
    fullDescription: 'This project offers an interactive platform to visualize various aspects of Indian crop production. Users can view data across states, analyze trends, and identify top-performing crops. Built with Streamlit and Plotly, the dashboard allows for smooth, real-time interactions and offers meaningful insights into agricultural trends.',
    points: [
      'Interactive data visualization dashboard built with Streamlit.',
      'Visualizes crop production trends across different Indian states.',
      'Integrates Plotly for dynamic and responsive data visualizations.',
      'Supports exploration of agricultural data over multiple years.',
      'Enables users to identify crop trends and productivity patterns.'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [agri2, agri3, agri4],
  },
  {
    id: 4,
    title: 'Floral Sorcery',
    category: 'machine-learning',
    tags: ['Streamlit', 'CNN'],
    image: flow1,
    description: 'An image-based flower recognition app using deep learning.',
    fullDescription: 'Floral Sorcery uses Convolutional Neural Networks (CNN) to predict flower species based on user-uploaded images. It provides confidence scores for each prediction, and the app is designed for easy interaction using Streamlit. Users can visualize the results and understand the model’s accuracy, making it a practical application of deep learning in image classification.',
    points: [
      'Utilizes CNN models for accurate flower type predictions.',
      'Streamlit-based user interface for easy image uploads.',
      'Provides confidence scores for each flower type prediction.',
      'Built as an interactive web app with real-time processing.',
      'Engages users with deep learning concepts applied to image classification.'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [flow2, flow3, flow4],
  },
  {
    id: 5,
    title: 'My-Mate',
    category: 'web-development',
    tags: ['Next.js', 'Firebase'],
    image: exp1,
    description: 'A task and finance management app built with Next.js and Firebase.',
    fullDescription: 'My-Mate combines task management and financial tracking into a single app. Built using Next.js for the frontend and Firebase for backend services, this project allows users to organize their tasks and manage finances efficiently. The clean and responsive design makes it easy for users to track goals, set reminders, and monitor expenses in one place.',
    points: [
      'Integrates task management and financial tracking into one application.',
      'Built using Next.js for a modern, responsive UI.',
      'Firebase powers the backend for data storage and authentication.',
      'Users can track tasks, set goals, and manage expenses seamlessly.',
      'Aimed at enhancing productivity with finance features.'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [exp4, exp2, exp3],
  },
  {
    id: 6,
    title: 'Chit-Chat',
    category: 'web-development',
    tags: ['React.js', 'Firebase'],
    image: chatt1,
    description: 'A simple chat app for connecting with friends.',
    fullDescription: 'Chit-Chat is a real-time chat application built with React.js for the frontend and Firebase for backend functionalities. Users can connect with friends and have fun while chatting. The app features instant messaging, emojis, and group chats, providing a smooth and interactive communication platform.',
    points: [
      'Real-time chat application built with React.js.',
      'Firebase integration for backend services and authentication.',
      'Supports instant messaging and group chats.',
      'Fun and interactive with emoji support and smooth UI.',
      'A simple yet functional app for staying connected with friends.'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [chatt2, chatt3, chatt4],
  },
  {
    id: 7,
    title: 'Bookworm',
    category: 'web-development',
    tags: ['Next.js'],
    image: book1,
    description: 'A platform for immersive reading experiences.',
    fullDescription: 'Bookworm is designed to enhance the reading experience by allowing users to personalize their reading journeys. Built with Next.js, the app offers a responsive interface where readers can organize their favorite books, track their reading progress, and access personalized recommendations. It also includes a feature to retain key insights from readings.',
    points: [
      'Next.js-based reading platform for personalized experiences.',
      'Users can organize and track their reading progress.',
      'Includes personalized book recommendations based on reading history.',
      'Allows readers to retain and review key insights from their readings.',
      'Modern, responsive UI for an immersive reading journey.'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [book2, book3, book4],
  },
  {
    id: 8,
    title: 'Weather360',
    category: 'web-development',
    tags: ['React.js', 'Axios'],
    image: w1,
    description: 'A global weather app for instant forecasts.',
    fullDescription: 'Weather360 provides real-time weather forecasts for any location worldwide. Built with React.js and Axios, this app fetches accurate weather data and displays it in a user-friendly interface. Users can search for cities, view temperature, humidity, and weather conditions, and receive up-to-date information on current weather.',
    points: [
      'Provides accurate, real-time weather forecasts for global locations.',
      'React.js-based frontend for smooth user interactions.',
      'Axios integration for fetching weather data from APIs.',
      'User-friendly interface with search functionality.',
      'Displays key weather metrics such as temperature and humidity.'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [w2, w3],
  },
  {
    id: 9,
    title: 'SentiSight',
    category: 'machine-learning',
    tags: ['React.js', 'Axios'],
    image: s1,
    description: 'Sentiment analysis tool for analyzing emotions in text.',
    fullDescription: 'SentiSight uses Natural Language Processing (NLP) to analyze the sentiment of user-submitted text. The app is built with React.js for the frontend, while Axios is used to fetch and process data. It identifies the emotional tone of the text, providing users with valuable insights into the sentiment behind their writing.',
    points: [
      'Sentiment analysis tool using NLP for text emotion detection.',
      'React.js frontend for an intuitive user experience.',
      'Axios fetches and processes the text sentiment data.',
      'Analyzes and displays emotional tones from user-submitted texts.',
      'Ideal for understanding the emotional impact of written content.'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [s2],
  },
  {
    id: 10,
    title: 'Personal Finance Manager',
    category: 'web-development',
    tags: ['FastAPI', 'React.js', 'Chart.js'],
    image: b1,
    description: 'Manage your finances with data-driven insights.',
    fullDescription: `
      Personal Finance Manager is a finance management app built with FastAPI for the backend and React.js for the frontend. 
      It provides users with a seamless way to track and manage their finances. Features include:
      - FastAPI-powered backend handling financial transactions and user authentication.
      - Real-time financial data visualization with Chart.js to track trends.
      - CSV export functionality for further data analysis.
      - Enhanced UX with Tailwind CSS and animations via Framer Motion.
      - Real-time notifications for transactions, powered by React Toastify.`,
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [b2, b3, b4, b5, b6, b7],
  },
];

export default projects;