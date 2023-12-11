
/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Me_work_Laptop.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Crafting & Developing Technuvibe",
    description:
      "Explore a world of possibilities with our innovative job portal. We are dedicated to connecting you with rewarding career opportunities that match your skills and aspirations..",
    url: "https://www.technuvibe.com/",
  },
  {
    title: "Manager | Sayurbox Indonesia",
    description:
      "Sayurbox is an Indonesian startup that was founded in 2016 with a mission to use technology to improve Indonesia's agricultural supply chain.",
    url: "https://www.sayurbox.com/",
  },
  {
    title: "Manager | Truemoney Indonesia",
    description:
      "TrueMoney is an electronic payment service that allows users to make all transactions through applications on mobile and EDC",
    url: "https://www.ascendmoneygroup.com/",
  },
  {
    title: "Manager | Exsamap Asia",
    description:
      "Subsidiary of Intermap Technologies Corp is a geospatial information company that provides solutions for base mapping, transportation, and environmental monitoring.",
    url: "https://www.intermap.com/",
  },
  {
    title: "Network & System Engineer | Inet Global Indo",
    description:
      "PT Inet Global Indo, is an Indonesian company based in Jakarta. It is engaged in Information Communication Technology (ICT) and is licensed as a nationwide Internet service provider. The company provides a range of ICT services and is a key player in the industry in Indonesia..",
    url: "https://www.inet.net.id/",
  },
  {
    title: "Network & System Engineer | Triyakom",
    description:
      "leading content and service developer and aggregator in Indonesia, with nearly 20 years of experience in content and mobile technology.",
    url: "https://triyakom.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
