import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Components
import Header from "../Components/Header";
import StarRating from "../Components/starRating.jsx";
import NewsletterSignup from "../Components/subscribePage.jsx";

// Styles
import "../styles/Header.css";
import "../App.css";

// Images
import Gondar1 from "../assets/images/Gondar/gondar1.jpg";
import Semen from "../assets/images/semen/semen5.jpg";
import Lalibela from "../assets/images/Lalibela/lalibela2.jpg";
import Omo from "../assets/images/omo/omo6.jpg";
import AxumImage from "../assets/images/Axum/axum1.jpg";
import BahirdarImage from "../assets/images/Bahirdar/bahirdar1.jpg";
import HararImage from "../assets/images/Harar/harar4.jpg";
import TigrayImage from "../assets/images/Tgiray/tigray1.jpg";
import DanakilDepressionImage from "../assets/images/Denakil/denakil2.jpg";
import OgadenImage from "../assets/images/Ogaden/ogaden.jpg";
import AwashImage from "../assets/images/Awash/awash2.jpg";
import BaleImage from "../assets/images/Bale/bale1.jpg";
import RiftImage from "../assets/images/RiftValley/rift2.jpg";
import AfderaImage from "../assets/images/Afdera/afdera.jpg";
import BlueNileImage from "../assets/images/BlueNile/bluenile1.jpg";
import DebreDamoImage from "../assets/images/DebreDamo/debredamo1.jpg";
import AddisAbabaImage from "../assets/images/AddisAbaba/addisAbabaCity2.jpg";
import MedhaneAlemImage from "../assets/images/Medhanealem/medhanealem1.jpg";
import DebreLibanosImage from "../assets/images/debreLibanos/debrelibanoe.jpg";

// Testimonials images
import MessiImage from "../assets/images/customers/messi.jpg";
import RonaldoImage from "../assets/images/customers/ronaldo.jpg";
import PutinImage from "../assets/images/customers/putin.jpg";
import SmithImage from "../assets/images/customers/messi2.jpg";
import DoeImage from "../assets/images/customers/ronaldo2.jpg";

const HomePage = () => {
  // States
  const [showMore, setShowMore] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [ratings, setRatings] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch subscriber count on mount
  useEffect(() => {
    const fetchSubscriberCount = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/subscribers/count"
        );
        setSubscriberCount(response.data.count);
      } catch (err) {
        console.error("Failed to fetch subscriber count", err);
      }
    };

    fetchSubscriberCount();
  }, []);

  const handleWatchVideo = () => setShowVideo(true);

  const handleRating = (name, rating) => {
    setRatings({ ...ratings, [name]: rating });
  };

  const featuredDestinations = [
    {
      name: "Simien Mountains",
      description: "Explore the breathtaking landscapes of the Simien Mountains.",
      imageUrl: Semen,
      link: "/destination/semen",
    },
    {
      name: "Lalibela",
      description: "Visit the ancient rock-hewn churches of Lalibela.",
      imageUrl: Lalibela,
      link: "/destination/lalibela",
    },
    {
      name: "Omo Valley",
      description: "Experience the diverse cultures and tribes of the Omo Valley.",
      imageUrl: Omo,
      link: "/destination/omo",
    },
    {
      name: "Axum",
      description: "Discover the ancient ruins and obelisks of Axum.",
      imageUrl: AxumImage,
      link: "/destination/axum",
    },
    {
      name: "Bahirdar",
      description: "Enjoy the beautiful landscapes and Lake Tana in Bahirdar.",
      imageUrl: BahirdarImage,
      link: "/destination/bahirdar",
    },
    {
      name: "Harar",
      description: "Explore the walled city and vibrant markets of Harar.",
      imageUrl: HararImage,
      link: "/destination/harar",
    },
    {
      name: "Tigray",
      description:
        "Visit the rock-hewn churches and rugged landscapes of Tigray.",
      imageUrl: TigrayImage,
      link: "/destination/tigray",
    },
  ];

  const additionalFeaturedDestinations = [
    {
      name: "Danakil Depression",
      description:
        "Experience one of the hottest places on Earth with unique landscapes in the Danakil Depression.",
      imageUrl: DanakilDepressionImage,
      link: "/destination/danakil",
    },
    {
      name: "Ogaden",
      description: "Explore the vast and scenic Ogaden region.",
      imageUrl: OgadenImage,
      link: "/destination/ogaden",
    },
    {
      name: "Awash National Park",
      description:
        "Discover the diverse wildlife and stunning landscapes of Awash National Park.",
      imageUrl: AwashImage,
      link: "/destination/awash",
    },
    {
      name: "Bale Mountains",
      description: "Trek through the beautiful and biodiverse Bale Mountains.",
      imageUrl: BaleImage,
      link: "/destination/bale",
    },
    {
      name: "Rift Valley",
      description: "Explore the unique geological formations of the Rift Valley.",
      imageUrl: RiftImage,
      link: "/destination/rift-valley",
    },
    {
      name: "Lake Afdera",
      description: "Relax by the beautiful and saline Lake Afdera.",
      imageUrl: AfderaImage,
      link: "/destination/afdera",
    },
    {
      name: "Blue Nile Falls",
      description: "Witness the majestic Blue Nile Falls.",
      imageUrl: BlueNileImage,
      link: "/destination/blue-nile",
    },
    {
      name: "Debre Damo",
      description: "Visit the ancient Debre Damo Monastery atop a sheer cliff.",
      imageUrl: DebreDamoImage,
      link: "/destination/debre-damo",
    },
    {
      name: "Medhane Alem",
      description: "See the magnificent Medhane Alem Cathedral.",
      imageUrl: MedhaneAlemImage,
      link: "/destination/medhane-alem",
    },
    {
      name: "Debre Libanos",
      description: "Explore the historical Debre Libanos Monastery.",
      imageUrl: DebreLibanosImage,
      link: "/destination/debre-libanos",
    },
    {
      name: "Addis Ababa",
      description: "Discover the beauty of Addis Ababa, capital of Africa",
      imageUrl: AddisAbabaImage,
      link: "/destination/Addis-Ababa",
    },
  ];

  const featuredActivities = [
    {
      name: "Hiking",
      description: "Enjoy scenic hiking trails in the Ethiopian highlands.",
      icon: "🥾",
      link: "/todo/Hiking",
    },
    {
      name: "Wildlife Safaris",
      description: "Experience the rich wildlife in national parks.",
      icon: "🦁",
      link: "/todo/Wildlife",
    },
    {
      name: "Cultural Tours",
      description: "Engage with local tribes and their cultures.",
      icon: "🌍",
      link: "/todo/Cultural Tours",
    },
    {
      name: "Historical Sites",
      description: "Visit ancient ruins and historical landmarks.",
      icon: "🏛️",
      link: "/todo/Photography",
    },
  ];

  const testimonials = [
    {
      quote:
        "Ethiopia offers an unforgettable experience with its rich history and stunning landscapes. A must-visit destination!",
      author: "John Doe",
      image: DoeImage,
    },
    {
      quote:
        "Ethiopia's landscapes are stunning, from the Simien Mountains to the Danakil Depression.",
      author: "Jane Smith",
      image: SmithImage,
    },
    {
      quote:
        "Exploring Ethiopia's ancient history and rich traditions is an unforgettable experience.",
      author: "Lionel Messi",
      image: MessiImage,
    },
    {
      quote:
        "The hospitality of the Ethiopian people is heartwarming and unforgettable.",
      author: "Cristiano Ronaldo",
      image: RonaldoImage,
    },
    {
      quote:
        "Ethiopia offers a unique blend of history, culture, and natural beauty.",
      author: "Vladimir Putin",
      image: PutinImage,
    },
  ];

  return (
    <div className="HomeBody">
      <Header />
      <main className="mainHomePage">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Wander Ethio</h1>
            <p className="home-p">Discover the beauty and culture of Ethiopia</p>
            <Link to="destination/lalibela">
              <button className="loginbtn">Explore Now</button>
            </Link>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="featured-destinations">
          <h2>Featured Destinations</h2>
          <div className="destination-list">
            {(showMore
              ? featuredDestinations.concat(additionalFeaturedDestinations)
              : featuredDestinations.slice(0, 6)
            ).map((destination) => (
              <div key={destination.name} className="destination">
                <img src={destination.imageUrl} alt={destination.name} />
                <div className="destination-info">
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <Link to={destination.link}>
                    <button className="discover-more-btn">Discover More</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setShowMore(!showMore)} className="discover-more-btn">
            {showMore ? "Show Less" : "Show More"}
          </button>
        </section>

        {/* Featured Activities */}
        <section className="featured-activities">
          <h2>Featured Activities</h2>
          <div className="activity-list">
            {featuredActivities.map((activity) => (
              <div key={activity.name} className="activity">
                <span>{activity.icon}</span>
                <h3>{activity.name}</h3>
                <p>{activity.description}</p>
                <StarRating
                  rating={ratings[activity.name] || 0}
                  onRating={(rating) => handleRating(activity.name, rating)}
                />
                <Link to={activity.link}>
                  <button className="discover-more-btn">Discover More</button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="customer-reviews">
          <h2>Customer Reviews</h2>
          <div className="testimonial-list">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="testimonial">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="testimonial-image"
                />
                <p>
                  <strong>- {testimonial.author}</strong>
                </p>
                <p>"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterSignup
          email={email}
          setEmail={setEmail}
          subscribed={subscribed}
          setSubscribed={setSubscribed}
          subscriberCount={subscriberCount}
          setSubscriberCount={setSubscriberCount}
          error={error}
          setError={setError}
          loading={loading}
          setLoading={setLoading}
        />

        {/* Watch Video */}
        <section className="watch-video-section">
          <button className="watchVideoBtn" onClick={handleWatchVideo}>
            Watch Video
          </button>
          {showVideo && (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/2xW9mTStyhM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </section>
      </main>

      {/* Map */}
      <h3>Discover Destinations Through Map</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6653800.665497483!2d35.05125522235854!3d10.957888173200095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slalibela%20%2C%20axum%2C%20gondar%2C%20seimen%20mountains%2C%20bahirdar%2C%20omo%20%2C%20awash%20%2C%20bale%20mountains%2C%20addis%20ababa%2C%20harar%20%2C%20%20Danakil%20Depression%2COgaden%2CRift%20Valley%2CLake%20Afdera%2CDebre%20Damo%2Cre%20Libanos!5e1!3m2!1sen!2set!4v1718563805507!5m2!1sen!2set"
        width="75%"
        height="450"
        style={{ margin: "auto", display: "block" }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default HomePage;
