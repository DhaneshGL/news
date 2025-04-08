import React from 'react';

const About = ({ mode }) => {
  const dmode = { backgroundColor: '#1a1a2e', color: ' white', borderColor: 'white' };
  const wmode = { backgroundColor: '#f0f0f0', color: ' black', borderColor: 'black' };
  const bdmode = { backgroundColor: '#293551', color: ' white', borderColor: 'white' };
  const bwmode = { backgroundColor: 'white', color: ' black', borderColor: 'black' };

  return (
    <div>
      <div className="accordion my-5 mx-5" id="accordionExample">
        <div className="accordion-item" style={mode === 'on' ? bdmode : wmode}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={mode === 'on' ? dmode : bwmode}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Stay Informed with the Latest News
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Get real-time updates on the most current events from around the world. Our website, powered by the News API, brings you a diverse range of news articles, from politics and business to entertainment and technology. Dive deep into the stories that matter with in-depth analysis and comprehensive coverage, keeping you informed and engaged.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mode === 'on' ? bdmode : wmode}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mode === 'on' ? dmode : bwmode}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Explore the World Through News
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Discover a world of knowledge at your fingertips. With our News API-driven website, you can explore a vast array of news topics, from global affairs to local happenings. Delve into rich and informative articles that provide context and insight into the stories shaping our world. Stay curious and well-informed with our diverse news collection.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mode === 'on' ? bdmode : wmode}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mode === 'on' ? dmode : bwmode}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Your Source for Timely and Reliable News
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Count on us for accurate and timely news reporting. Our website, utilizing the News API, offers a reliable source for the latest news across various categories. Whether you're interested in health, science, sports, or any other subject, we deliver in-depth articles that keep you updated and informed. Trust us to be your go-to destination for staying ahead of the news curve.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;