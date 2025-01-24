import React, { useState } from 'react';
import { Moon, Sun, Download, Menu, X } from 'lucide-react';

const apps = [
  {
    id: 1,
    name: "PhotoEdit Pro",
    description: "Professional photo editing suite with advanced filters and AI-powered enhancements",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80",
    category: "Photography"
  },
  {
    id: 2,
    name: "FitTrack",
    description: "Complete fitness tracking solution with personalized workout plans and nutrition guidance",
    image: "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?w=500&q=80",
    category: "Health & Fitness"
  },
  {
    id: 3,
    name: "MindfulMoments",
    description: "Meditation and mindfulness app with guided sessions and sleep stories",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&q=80",
    category: "Lifestyle"
  },
  {
    id: 4,
    name: "TaskMaster",
    description: "Powerful task management and productivity tool for professionals",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&q=80",
    category: "Productivity"
  },
  {
    id: 5,
    name: "WeatherLens",
    description: "Accurate weather forecasting with beautiful visualizations and alerts",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&q=80",
    category: "Weather"
  },
  {
    id: 6,
    name: "SoundScape",
    description: "Premium music streaming with AI-powered recommendations",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80",
    category: "Music"
  },
  {
    id: 7,
    name: "RecipeGuide",
    description: "Discover and create delicious recipes with step-by-step instructions",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=500&q=80",
    category: "Food & Drink"
  },
  {
    id: 8,
    name: "TravelBuddy",
    description: "Your personal travel companion with itinerary planning and local guides",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&q=80",
    category: "Travel"
  },
  {
    id: 9,
    name: "LearnLingo",
    description: "Language learning made fun with interactive lessons and games",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&q=80",
    category: "Education"
  },
  {
    id: 10,
    name: "WalletWise",
    description: "Smart personal finance management with budgeting and investment tracking",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80",
    category: "Finance"
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(apps.map(app => app.category))];
  const filteredApps = selectedCategory === 'All' 
    ? apps 
    : apps.filter(app => app.category === selectedCategory);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`fixed w-full z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              AppStore
            </h1>
            
            <div className="hidden md:flex space-x-8">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300'
                  } hover:text-blue-500 transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${
                  darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'
                } hover:bg-opacity-80 transition-colors`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="md:hidden"
              >
                {mobileMenu ? (
                  <X className={darkMode ? 'text-white' : 'text-gray-800'} />
                ) : (
                  <Menu className={darkMode ? 'text-white' : 'text-gray-800'} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className={`fixed inset-0 z-40 ${darkMode ? 'bg-gray-800' : 'bg-white'} pt-16`}>
          <div className="container mx-auto px-4 py-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setMobileMenu(false);
                }}
                className={`block w-full text-left py-2 ${
                  selectedCategory === category
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 h-[500px]" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Discover Amazing Mobile Apps
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Find and download the best mobile applications for your needs
            </p>
          </div>
        </div>
      </div>

      {/* Apps Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApps.map(app => (
            <div
              key={app.id}
              className={`group rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {app.name}
                  </h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
                    {app.category}
                  </span>
                </div>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {app.description}
                </p>
                <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                  <Download size={20} />
                  <span>Download Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} py-12`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                About Us
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Discover and download the best mobile applications for your daily needs.
              </p>
            </div>
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Categories
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {categories.slice(1).map(category => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Support
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Newsletter
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className={`mt-8 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 AppStore. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;