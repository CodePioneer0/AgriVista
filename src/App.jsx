
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
      url: "https://www.youtube.com/embed/bsLEvQVc9lk?si=aJkQBrbxEWL2arey", 
    },
    {
      title: "Irrigation Management Practices",
      url: "https://www.youtube.com/embed/JrDxPWZSE2U?si=WdDVwzWzFgbuy_Bf", 
    },
    {
      title: "Organic Farming Basics",
      url: "https://www.youtube.com/embed/v5JeoXtqk2s?si=0QEkGINwzIvM-4fx",
    },
    {
      title: "Crop Rotation Strategies", 
      url: "https://www.youtube.com/embed/XeNA6XdMoF8?si=CZ0kpXJzNS7jDi5O",
    },
    {
      title: "Soil Health Management",   
      url: "https://www.youtube.com/embed/7slM-rdtSsQ?si=ode5qE_yOPqCeExZ", 
    },
    {
      title: "Pest Management Techniques",
      url: "https://www.youtube.com/embed/Wf0ONrMY_fo?si=h31_gAB-uqFgSsJ5",
    },
    {
      title: "Sustainable Livestock Farming",
      url: "https://www.youtube.com/embed/7uGJTvn-h_k?si=cknL7wNIMyLylYf3", 
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
      imageUrl: "https://th.bing.com/th/id/R.6025e8af02d404c3d764f55b0de39b79?rik=hQ8S51Ui2oDnaA&riu=http%3a%2f%2fcdn.statcdn.com%2fInfographic%2fimages%2fnormal%2f24416.jpeg&ehk=ehYbpbvW56hpYeGGKrkCk6Wxfe9DE6C4Z%2blB9Wpo9jM%3d&risl=&pid=ImgRaw&r=0",
      link: "https://www.thehindu.com/business/budget/budget-2024-agriculture-gets-higher-allocation-fertilizer-food-subsidies-slashed-farmers-express-concern/article68437665.ece"
    },
    {
      title: "Weather Advisory for Farmers",
      description: "Farmers are advised to take precautions due to heavy rainfall in the upcoming weeks.",
      imageUrl: "https://th.bing.com/th/id/OIP.Ah2i8M9fOs2sJwApSYE1NAAAAA?rs=1&pid=ImgDetMain", 
      link: "https://www.downtoearth.org.in/agriculture/hyper-local-weather-advisories-help-bengal-farmers-cut-costs-84226",
    {
      title: "New Pest Control Guidelines",
      description: "Updated guidelines for pest management are now available.",
      imageUrl: "https://5.imimg.com/data5/SELLER/Default/2024/8/439479541/PQ/WN/UK/162243507/pest-management-500x500.jpeg",
      link: "https://ppqs.gov.in/divisions/integrated-pest-management/instruction-safe-use-pesticide" 
    },
    {
      title: "Irrigation Assistance Program",
      description: "Farmers can now apply for assistance in irrigation projects.",
      imageUrl: "https://fdp.com.pk/wp-content/uploads/2018/11/irrigation-services-in-arizona-southwest-irrigation.jpg", 
      link: "https://www.worldbank.org/en/news/press-release/2023/06/09/world-bank-approves-148-million-financing-for-minor-irrigation-project-to-support-water-availability-increase-food-secur#:~:text=WASHINGTON%2C%20June%209%2C%202023%E2%80%94,benefit%20people%20in%20rural%20areas." 
    },
    {
      title: "Soil Health Initiative Launched",
      description: "A new initiative aimed at improving soil health is now in effect.",
      imageUrl: "https://tneaonline.in/wp-content/uploads/2021/09/Soil-Health-Card-Scheme.jpg", 
      link: "https://www.outlookbusiness.com/news/ground-breaking-agri-initiatives-for-soil-health-farmer-empowerment-launched-news-417185"
    },
    {
      title: "Market Prices Update",
      description: "Current market prices for major crops have been updated.",
      imageUrl: "https://th.bing.com/th/id/OIP.1beFJteJb6VVlBH8OGnzAgAAAA?rs=1&pid=ImgDetMain", 
      link: "https://agmarknet.gov.in/PriceAndArrivals/DatewiseCommodityReport.aspx", 
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
