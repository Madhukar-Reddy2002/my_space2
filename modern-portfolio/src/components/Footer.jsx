const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com/your_profile" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Twitter
            </a>
            <a href="https://github.com/your_profile" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
            <a href="https://linkedin.com/in/your_profile" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
          </div>
          <p className="mt-4 text-center text-gray-500">© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;  