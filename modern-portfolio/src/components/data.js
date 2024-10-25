import ip1 from "../assets/ipld3.jpg"
import ip2 from "../assets/id1.png";
import ip3 from "../assets/ip2.png";
import ip4 from "../assets/ip3.png";
import ip5 from "../assets/ip4.png";
import ip6 from "../assets/ip5.png";
import ip7 from "../assets/ip6.png";
import ip8 from "../assets/ip7.png";
import ip9 from "../assets/ip8.png";
import ip10 from "../assets/ip9.png";
import ip11 from "../assets/ip10.png";
import ip12 from "../assets/ip11.png";
import ip13 from "../assets/ip12.png";
import ip14 from "../assets/ip13.png";
import ip15 from "../assets/ip14.png";
import agri1 from "../assets/agri.jpeg";
import agri2 from "../assets/agri1.png";
import agri3 from "../assets/agri21.png";
import agri4 from "../assets/agri22.png";
import agri5 from "../assets/agri23.png";
import agri6 from "../assets/agri24.png";
import agri7 from "../assets/agri25.png";
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
import ad1 from "../assets/ad1.png";
import ad2 from "../assets/ad2.png";
import ad3 from "../assets/ad3.png";
import ad4 from "../assets/ad4.png";
import ad5 from "../assets/ad5.png";
import ss1 from "../assets/superstore.jpeg";
import ss2 from "../assets/ss1.png";
import ss3 from "../assets/ss2.png";
import ss4 from "../assets/ss3.png";
import ss5 from "../assets/ss4.png";
import ss6 from "../assets/ss5.png";
import ss7 from "../assets/ss6.png";
import ats1 from "../assets/ats1.png";
import ats2 from "../assets/ats2.png";
import ats3 from "../assets/ats3.png";
import ats4 from "../assets/ats4.png";
import coffee from "../assets/coffee sales.png";
import hr from "../assets/hrdash.jpeg";
import p1 from "../assets/freshershub1.png";
import p2 from "../assets/pintrest1.jpeg";
import p3 from "../assets/pintrest2.jpeg";
const projects = [
  {
    id: 1,
    title: 'Data Genie',
    category: 'data-analytics',
    tags: ['Streamlit', 'Pandas', 'Plotly'],
    image: da1,
    description: 'Interactive data exploration and visualization platform for efficient analysis.',
    fullDescription: 'Data Genie is a comprehensive data analysis tool that simplifies the process of exploring and visualizing datasets. Built with Streamlit and powered by Pandas, it offers an intuitive interface for data analysis, making it accessible for users to derive meaningful insights without complex coding.',
    points: [
      'Automated data cleaning and preprocessing capabilities',
      'Interactive visualization suite with customizable charts',
      'Statistical analysis tools for quick insights',
      'Correlation analysis and pattern detection',
      'Export functionality for processed datasets',
      'Dynamic filtering and data exploration features',
      'Comprehensive data summary generation'
    ],
    demoLink: 'https://datageniebyms.streamlit.app/',
    githubLink: 'https://github.com/example',
    gallery: [da2, da3, da4, da5, da6],
  },
  {
    id: 2,
    title: 'Adidas Sales Dashboard',
    category: 'data-analytics',
    tags: ['Streamlit', 'Plotly', 'Pandas'],
    image: ad1,
    description: 'Comprehensive analytics dashboard for Adidas sales data visualization.',
    fullDescription: 'An interactive dashboard that transforms Adidas sales data into actionable insights. This platform provides detailed analysis capabilities across multiple dimensions of sales data, enabling data-driven decision making for business stakeholders.',
    points: [
      'Detailed retailer performance analysis',
      'Interactive time series visualization of sales trends',
      'State-wise sales analysis with dual-axis charting',
      'Regional sales distribution using treemaps',
      'Monthly sales performance tracking',
      'Raw data export functionality',
      'Dynamic filtering options',
      'Responsive design for all devices'
    ],
    demoLink: 'https://addidasdashboard-by-dmkr.streamlit.app/',
    githubLink: 'https://github.com/example',
    gallery: [ad2, ad3, ad4, ad5],
  },
  {
    id: 3,
    title: 'Superstore Analytics',
    category: 'data-analytics',
    tags: ['Streamlit', 'Plotly', 'Pandas'],
    image: ss1,
    description: 'Interactive analytics platform for Superstore data analysis.',
    fullDescription: 'A comprehensive analytics tool that provides deep insights into Superstore operations. This interactive platform enables users to explore sales patterns, customer behavior, and product performance through intuitive visualizations.',
    points: [
      'Flexible data upload and validation system',
      'Multi-level filtering for detailed analysis',
      'Dynamic visualization suite with various charts',
      'Time series analysis of sales trends',
      'Geographic visualization of sales data',
      'Segment and category performance metrics',
      'Custom report generation capabilities',
      'Data export functionality'
    ],
    demoLink: 'https://superstorebyms.streamlit.app/',
    githubLink: 'https://github.com/example',
    gallery: [ss2, ss3, ss4, ss5, ss6, ss7],
  },
  {
    id: 4,
    title: 'Agriculture Insights',
    category: 'data-analytics',
    tags: ['Streamlit', 'Plotly', 'Pandas', 'Seaborn'],
    image: agri1,
    description: 'Interactive dashboard for Indian agricultural data analysis.',
    fullDescription: 'A detailed analytics dashboard that provides comprehensive insights into Indian agricultural patterns and trends. This tool helps stakeholders understand crop production patterns and make informed decisions about resource allocation.',
    points: [
      'State and district-level data visualization',
      'Crop-wise production analysis tools',
      'Seasonal trend visualization',
      'Production metrics comparison',
      'Interactive charts and graphs',
      'Custom report generation',
      'Data export features',
      'Historical trend analysis'
    ],
    demoLink: 'https://cropanalysis.streamlit.app/',
    githubLink: 'https://github.com/example',
    gallery: [agri2, agri3, agri4, agri5, agri6, agri7],
  },
  {
    id: 5,
    title: 'IPL Guru',
    category: 'data-analytics',
    tags: ['Python', 'MySQL', 'Plotly', 'Data Analysis'],
    image: ip1,
    description: 'Comprehensive IPL cricket data analysis platform (2008-2023).',
    fullDescription: 'A detailed cricket analytics platform focusing on IPL history, player performance, and team statistics. This Tableau-powered dashboard provides comprehensive analysis tools for cricket enthusiasts and sports analysts.',
    points: [
      'Detailed player performance metrics',
      'Team performance tracking and comparison',
      'Match statistics and analysis',
      'Head-to-head team analysis',
      'Player statistics visualization',
      'Venue-specific performance data',
      'Tournament progression tracking',
      'Historical trend analysis'
    ],
    demoLink: 'https://iplguru.streamlit.app/',
    githubLink: 'https://github.com/example',
    gallery: [ip2, ip3, ip4, ip5, ip6, ip7, ip8, ip9, ip10, ip11, ip12, ip13, ip14, ip15],
  },
  {
    id: 6,
    title: 'Floral Classification',
    category: 'machine-learning',
    tags: ['TensorFlow', 'CNN', 'Streamlit'],
    image: flow1,
    description: 'Image-based flower species classification system.',
    fullDescription: 'A flower recognition system using Convolutional Neural Networks for accurate species identification. The application provides species classification with detailed botanical information.',
    points: [
      'Image-based flower species identification',
      'Real-time classification results',
      'Detailed botanical information display',
      'Support for multiple image formats',
      'User-friendly interface with preview',
      'Classification confidence scores',
      'Image preprocessing capabilities',
      'Botanical database integration'
    ],
    demoLink: 'https://madhukar-reddy2002-streamlitflowersapp-app-kx1vpn.streamlit.app/',
    githubLink: 'https://github.com/example',
    gallery: [flow2, flow3, flow4],
  },
  {
    id: 7,
    title: 'TaskFinance',
    category: 'web-development',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
    image: exp1,
    description: 'Combined task and finance management application.',
    fullDescription: 'An integrated solution for personal task and finance management. Built with Next.js and Firebase, this application helps users manage both their daily tasks and financial activities in one platform.',
    points: [
      'Task tracking with priority settings',
      'Financial planning and budgeting tools',
      'Customizable dashboard interface',
      'Expense categorization features',
      'Goal tracking visualization',
      'Calendar integration',
      'Financial report generation',
      'Dark/light theme support'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [exp4, exp2, exp3],
  },
  {
    id: 8,
    title: 'ChatterBox',
    category: 'web-development',
    tags: ['React.js', 'Firebase', 'WebRTC'],
    image: chatt1,
    description: 'Real-time chat application with video calling.',
    fullDescription: 'A modern chat application featuring text, voice, and video communication. Built with React.js and Firebase, it provides a seamless communication experience with real-time message delivery.',
    points: [
      'Real-time messaging system',
      'Video and voice calling features',
      'Group chat functionality',
      'File sharing capabilities',
      'Emoji and sticker support',
      'Message search functionality',
      'Read receipts',
      'Online status indicators'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [chatt2, chatt3, chatt4],
  },
  {
    id: 9,
    title: 'BookTracker',
    category: 'web-development',
    tags: ['Next.js', 'MongoDB', 'TailwindCSS'],
    image: book1,
    description: 'Personal library management and reading tracker.',
    fullDescription: 'A comprehensive reading platform that helps readers organize their library, track reading progress, and discover new books through curated recommendations.',
    points: [
      'Reading progress tracking',
      'Personal library management',
      'Reading goal setting',
      'Note-taking system',
      'Reading statistics dashboard',
      'Book review management',
      'Custom book lists creation',
      'Reading history tracking'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [book2, book3, book4],
  },
  {
    id: 10,
    title: 'Weather360',
    category: 'web-development',
    tags: ['React.js', 'OpenWeather API', 'Chart.js'],
    image: w1,
    description: 'Detailed weather forecasting application.',
    fullDescription: 'A comprehensive weather application providing detailed weather information and forecasts. Built with React.js and integrated with weather APIs, it offers extensive weather data visualization.',
    points: [
      'Real-time weather updates',
      'Interactive weather maps',
      'Hourly and weekly forecasts',
      'Air quality information',
      'Weather alerts system',
      'Location management',
      'Historical weather data',
      'Weather trend visualization'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [w2, w3],
  },
  {
    id: 11,
    title: 'SentimentAnalyzer',
    category: 'machine-learning',
    tags: ['NLTK', 'React.js', 'FastAPI'],
    image: s1,
    description: 'Text sentiment analysis tool with visualization.',
    fullDescription: 'A sentiment analysis tool that analyzes the emotional tone of text content. This application provides detailed sentiment breakdown and visualization of emotional patterns in text.',
    points: [
      'Text sentiment classification',
      'Emotion intensity scoring',
      'Bulk text processing',
      'Sentiment trend visualization',
      'Language detection',
      'Export analysis results',
      'Real-time analysis',
      'User-friendly interface'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [s2],
  },
  {
    id: 12,
    title: 'FinanceFlow',
    category: 'web-development',
    tags: ['FastAPI', 'React.js', 'Chart.js', 'MongoDB'],
    image: b1,
    description: 'Personal finance management system.',
    fullDescription: 'A comprehensive personal finance management platform that helps users track expenses, manage budgets, and visualize financial patterns. Built with FastAPI and React.js.',
    points: [
      'Expense tracking and categorization',
      'Budget planning tools',
      'Financial goal setting',
      'Expense reports generation',
      'Multi-currency support',
      'Bank transaction import',
      'Bill payment tracking',
      'Financial insights dashboard'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [b2, b3, b4, b5, b6, b7],
  },
  {
  id: 13,
    title: 'ATS Resume Checker',
    category: 'data-science',
    tags: ['Python', 'Streamlit', 'PyPDF2', 'python-docx', 'Matplotlib'],
    image: ats1,
    description: 'A tool to optimize resumes for ATS, helping job seekers stand out.',
    fullDescription: 'The ATS Resume Checker is a Streamlit-based app designed to analyze resumes against job descriptions, providing insights on skill matching and optimization suggestions for job seekers.',
    points: [
    'Keyword matching with job description',
    'Weighted ATS scoring',
    'Visual insights of matched and missing keywords',
    'Resume length analysis',
    'Copy-protection for focused editing'
    ],
    demoLink: 'https://atsscorechecker.streamlit.app/',
    githubLink: 'https://github.com/example',
    gallery: [ats2, ats3, ats4],
    },
    
    {
    id: 14,
    title: 'Coffee Shop Sales Dashboard',
    category: 'data-analytics',
    tags: ['Excel', 'Data Analysis', 'Data Visualization'],
    image: coffee,
    description: 'Interactive dashboard analyzing coffee shop sales data across locations.',
    fullDescription: 'An Excel-based interactive dashboard created to analyze sales data of a coffee shop chain, offering insights into sales patterns, customer behavior, and top products.',
    points: [
    'Total sales and customer traffic insights',
    'Store-wise performance comparison',
    'Size preference analysis',
    'Top products by revenue',
    'Day and time-based order patterns'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [],
    },
    
    {
    id: 15,
    title: 'Social Snap',
    category: 'web-development',
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'Bootstrap'],
    image: p2,
    description: 'Social media platform for image sharing and connecting with friends.',
    fullDescription: 'Social Snap is a social media web app allowing users to create profiles, upload images, and explore a personalized feed, built with Node.js, Express, and React.',
    points: [
  'User profiles with customized feed',
  'Image and video uploading',
  'Real-time updates on a scrollable feed',
  'User authentication for security',
  'Interactive and user-friendly design'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [p1, p3],
    },
    
    {
    id: 16,
    title: 'HR Attrition Analysis Dashboard',
    category: 'data-analytics',
    tags: ['Tableau', 'Data Analysis', 'HR Analytics'],
    image: hr,
    description: 'Interactive dashboard analyzing employee attrition patterns.',
    fullDescription: 'Built with Tableau, this HR dashboard uncovers key attrition patterns and provides strategic insights for managing employee retention across various demographics.',
    points: [
    'Gender and department-wise attrition analysis',
    'Educational background impact',
    'Age group vulnerability assessment',
    'Interactive filtering capabilities',
    'Real-time attrition rate calculations'
    ],
    demoLink: 'https://demo.example.com',
    githubLink: 'https://github.com/example',
    gallery: [],
    }    
];

export default projects;