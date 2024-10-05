
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import { useState } from 'react';

function Home() {
  return <>
  <div className="hero-section">
      <div className="container text-center text-light">
        <h1 className="display-4">EMPOWERING FARMS</h1>
        <p className="lead">Transforming NASA data into actionable insights</p>
      </div>
    </div>
    <section className="about-agri">
        <div className="container">
          <h2 className="my-4">About AgriVista</h2>
          <p className="lead text-dark">
            Welcome to AgriVista—your go-to for turning NASA data into actionable farming insights. We offer:
          </p>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Data Exploration:</strong> Visualize key datasets on weather, soil moisture, and precipitation.
            </li>
            <li className="list-group-item">
              <strong>Analytical Tools:</strong> Analyze trends and generate custom reports for better decision-making.
            </li>
            <li className="list-group-item">
              <strong>Decision Support:</strong> Get recommendations on irrigation, crop management, and pest control.
            </li>
            <li className="list-group-item">
              <strong>Alerts & Notifications:</strong> Receive timely updates on weather extremes and pest outbreaks.
            </li>
            <li className="list-group-item">
              <strong>Educational Resources:</strong> Access guides and tutorials to enhance your data usage.
            </li>
          </ul>
          <p className="mt-4 text-bold">
            We’re committed to empowering farmers with the insights needed for smarter, more resilient farming.
          </p>
        </div>
      </section>
      <section className="services">
        <div className="container text-center">
          <h2 className="my-4">Our Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Trend Tracking</h5>
                  <p className="card-text">
                    Stay informed with our advanced tools that track and visualize key trends in your data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Custom Reports</h5>
                  <p className="card-text">
                    Generate custom reports tailored to your specific needs for more accurate decision-making.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Data-Driven Decisions</h5>
                  <p className="card-text">
                    Leverage data insights to make informed decisions that enhance your farming operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>;
}

function Resources() {
  const videos = [
    {
      title: "Introduction to Sustainable Agriculture",
      url: "https://www.youtube.com/embed/iloAQmroRK0?si=MhDlxVmwKV64-8Ps"
    },
    {
      title: "Precision Agriculture Techniques",
      url: "https://www.youtube.com/embed/bsLEvQVc9lk?si=aJkQBrbxEWL2arey", // Replace with actual video ID
    },
    {
      title: "Irrigation Management Practices",
      url: "https://www.youtube.com/embed/VIDEO_ID_3", // Replace with actual video ID
    },
    {
      title: "Organic Farming Basics",
      url: "https://www.youtube.com/embed/VIDEO_ID_4", // Replace with actual video ID
    },
    {
      title: "Crop Rotation Strategies",
      url: "https://www.youtube.com/embed/VIDEO_ID_5", // Replace with actual video ID
    },
    {
      title: "Soil Health Management",
      url: "https://www.youtube.com/embed/VIDEO_ID_6", // Replace with actual video ID
    },
    {
      title: "Pest Management Techniques",
      url: "https://www.youtube.com/embed/VIDEO_ID_7", // Replace with actual video ID
    },
    {
      title: "Sustainable Livestock Farming",
      url: "https://www.youtube.com/embed/VIDEO_ID_8", // Replace with actual video ID
    },
  ];

  const [visibleVideos, setVisibleVideos] = useState(2); // Initially show 2 videos

  const loadMoreVideos = () => {
    setVisibleVideos((prev) => prev + 2); // Load 2 more videos
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Resources to help you learn!</h2>
      <div className="row">
        {videos.slice(0, visibleVideos).map((video, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <iframe
                  width="100%"
                  height="315"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleVideos < videos.length && (
        <div className="text-center">
          <button className="btn btn-success" onClick={loadMoreVideos}>
            Load More...
          </button>
        </div>
      )}
    </div>
  );
}

function Alerts() {
  const alerts = [
    {
      title: "New Crop Subsidy Announced",
      description: "The government has announced new subsidies for wheat and rice crops.",
      imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
      link: "https://example.com/alert1" // Replace with actual link
    },
    {
      title: "Weather Advisory for Farmers",
      description: "Farmers are advised to take precautions due to heavy rainfall in the upcoming weeks.",
      imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
      link: "https://example.com/alert2" // Replace with actual link
    },
    {
      title: "New Pest Control Guidelines",
      description: "Updated guidelines for pest management are now available.",
      imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
      link: "https://example.com/alert3" // Replace with actual link
    },
    {
      title: "Irrigation Assistance Program",
      description: "Farmers can now apply for assistance in irrigation projects.",
      imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
      link: "https://example.com/alert4" // Replace with actual link
    },
    {
      title: "Soil Health Initiative Launched",
      description: "A new initiative aimed at improving soil health is now in effect.",
      imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
      link: "https://example.com/alert5" // Replace with actual link
    },
    {
      title: "Market Prices Update",
      description: "Current market prices for major crops have been updated.",
      imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
      link: "https://example.com/alert6" // Replace with actual link
    },
  ];

  const [visibleAlerts, setVisibleAlerts] = useState(3); // Initially show 3 alerts

  const loadMoreAlerts = () => {
    setVisibleAlerts((prev) => prev + 3); // Load 3 more alerts
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Here's all you need to stay updated!</h2>
      <div className="row">
        {alerts.slice(0, visibleAlerts).map((alert, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={alert.imageUrl} className="card-img-top" alt={alert.title} />
              <div className="card-body">
                <h5 className="card-title">{alert.title}</h5>
                <p className="card-text">{alert.description}</p>
                <a href={alert.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Read More...
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleAlerts < alerts.length && (
        <div className="text-center">
          <button className="btn btn-success" onClick={loadMoreAlerts}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

function App() {
  return ( <>
    <Router>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">AgriVista</Link>
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <Link className="nav-link" to="/about">Analyze</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Explore</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/alerts">Alerts</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </Router>
    <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p className="mb-0">&copy; {new Date().getFullYear()} AgriVista. All rights reserved.</p>
        </div>
      </footer>
    
    </>
  );
}

export default App;
