# TravelAlaska

A visually appealing, mobile-responsive single-page website that introduces visitors to the wonders of traveling around Alaska. This site highlights popular tours, beautiful imagery, contact information, and more.

---

## Table of Contents

1. [Overview](#overview)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Folder Structure](#folder-structure)  
5. [Installation & Usage](#installation--usage)  
6. [Customization](#customization)  
7. [License](#license)

---

## Overview

**TravelAlaska** is a single-page HTML/CSS project showcasing an Alaska travel guide. It provides:

- A dropdown navigation menu.  
- Interactive carousel of images.  
- Full-width background images for each section.  
- Detailed tours, experiences, stats, and testimonials.  
- A contact form for inquiries.

This README will guide you on how to set up, run, and extend this project.

---

## Features

- **Dropdown Menu** – Hover to reveal a simple dropdown navigation.  
- **Hero Sections** – Multiple “pages” (sections) with large, full-width background images.  
- **Image Carousel** – A responsive carousel to showcase beautiful images of Alaska.  
- **Contact Form** – A sample form allowing visitors to submit inquiries.  
- **Responsive Design** – Adapts to various screen sizes.

---

## Technologies Used

- **HTML5** – Structuring and content.  
- **CSS3** – Layout and visual styling.  
- **JavaScript** (Optional if needed) – Carousel interactivity.

---

## Folder Structure

Below is an example of my project might is structured:

.
├── images
│   ├── anchorage-brews-tour.jpeg
│   ├── anchorage-city-tour.jpg
│   ├── anchorage-museum.jpg
│   ├── backgroundpg1.webp
│   ├── bears-trains-icebergs.jpg
│   ├── contact-us.jpeg
│   ├── deer.webp
│   ├── experience-kenai.jpg
│   ├── image-carousel-1.jpg
│   ├── image-carousel-2.jpg
│   ├── image-carousel-3.jpg
│   ├── image-carousel-4.jpeg
│   ├── image-carousel-5.jpeg
│   ├── instagram.png
│   ├── facebook.png
│   ├── linkedin.png
│   ├── numbers.avif
│   ├── pinterest.png
│   ├── lets-start.webp
│   ├── testamonial-person.jpg
│   ├── trip-to-alaska.jpg
│   ├── twitter.png
│   └── wolf.webp
├── index.html
├── styles.css
├── script.js
└── README.md



> Make sure to place all images in the `images` folder with the correct filenames referenced in your HTML and CSS if doing this locally.

---

## Installation & Usage

1. **Clone or Download**  
   - Via HTTPS:  
     ```bash
     git clone https://github.com/YourUsername/TravelAlaska.git
     ```  
   - Or download the ZIP file and extract it locally.

2. **Open the Project**  
   - Open the `index.html` file in your preferred web browser.

3. **View & Navigate**  
   - Use scroll or the dropdown links to navigate.  
   - The carousel arrows are clickable for viewing different images.

> *Optional:* For a local development server, use a tool like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code or [http-server](https://www.npmjs.com/package/http-server). This allows you to view the site at `http://localhost:8080` (or another port).


## Customization

- **Changing Images**  
  - Update image files in the `images` folder and ensure filenames match what’s in `index.html` and `styles.css`.

- **Editing Colors & Fonts**  
  - In `styles.css`, modify colors (e.g., `rgb(231, 195, 51)`) or add custom fonts via Google Fonts.

- **Dropdown Navigation**  
  - To update navigation items, edit the `<li>` entries in `.dropdown-content` within `index.html`.

- **Carousel Settings**  
  - To adjust how many images show at once, edit `.carousel-track img` width in `styles.css` or adjust any JS if you have a `script.js`.

---


## License

This project is licensed under the [MIT License](LICENSE). You’re free to use and modify this code for personal or commercial projects.

---

Enjoy building **TravelAlaska**! If you have questions or feedback, please open a GitHub issue or reach out. Safe travels!
