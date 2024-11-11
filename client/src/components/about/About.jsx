import React from 'react';
import classes from './about.module.css';  // You will need a separate CSS file for the About page

const About = () => {
  return (
    <div className={classes.aboutPage}>
      <div className={classes.wrapper}>
        {/* Main Title Section */}
        <section className={classes.mainTitle}>
          <h1>About Us</h1>
          <p className={classes.subtitle}>
            Learn more about our mission, vision, and values.
          </p>
        </section>

        {/* About Content */}
        <section className={classes.content}>
          <div className={classes.contentLeft}>
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula interdum dui, et consequat urna consequat eget. Cras a ante id purus feugiat auctor non vel lorem. Vivamus nec magna ut felis hendrerit eleifend.
            </p>
          </div>

          <div className={classes.contentRight}>
            <h2>Our Vision</h2>
            <p>
              Fusce vitae vehicula odio. Curabitur pharetra ligula vitae nisl suscipit, ut pretium enim dictum. Integer vestibulum sapien in ante lacinia, eu facilisis libero fermentum. In id magna et sem rhoncus pharetra.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className={classes.team}>
          <h2>Our Team</h2>
          <div className={classes.teamMembers}>
            <div className={classes.teamMember}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className={classes.teamImage}
              />
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>

            <div className={classes.teamMember}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className={classes.teamImage}
              />
              <h3>Jane Smith</h3>
              <p>Lead Developer</p>
            </div>

            <div className={classes.teamMember}>
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className={classes.teamImage}
              />
              <h3>Emily Johnson</h3>
              <p>Designer</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
