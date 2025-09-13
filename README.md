


# v

Ethiopia_Tourism is an all-in-one travel platform built to enrich the tourism experience in Ethiopia. It provides a simple and secure registration and login system, allowing travelers to manage their bookings with ease. The platform opens doors to Ethiopia’s diverse cultural heritage and stunning natural scenery through an intuitive interface. With reliable authentication and user-friendly features, Ethiopia_Tourism makes every traveler’s journey smooth, engaging, and memorable.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Payment Integration](#payment-integration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

Ethiopia_Tourism is a MERN stack web application developed with Vite powering the frontend and Nodemon supporting the backend. The platform offers comprehensive destination pages across Ethiopia, showcasing history, major attractions, cultural highlights, accommodations, and more. Beyond travel details, it also explores Ethiopia’s rich heritage through dedicated sections on music, cuisine, and cinema. To enhance usability, the site integrates a registration and payment system via Chapa, ensuring a smooth and secure booking experience.

## Features

- **Destination Pages**: Each destination includes:
  - About it
  - History
  - Top Attractions
  - Getting There
  - Culture and Traditions
  - Accommodations (hotels and restaurants)
  - Best Time to Visit
  - FAQ with answers
  - Google Map integration
  - Images and videos showcasing main areas and places

- **Additional Sections**:
  - About Us
  - Contact Us
  - Services Offered
  - Ask a Question Page
  - Cultural Insights (music, food, dressings, films)

- **User Registration and Payment**: Users can register and make payments through the
integrated Chapa payment system.

## Technologies Used

- **Frontend**: 
  - React (with Vite for faster development)

- **Backend**:
  - Node.js
  - Express
  - MongoDB (with Mongoose)

- **Development Tools**:
  - Nodemon for automatic server restarts
  - dotenv for managing environment variables

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Bharani127/ethiopia_tourism.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd ethiopia_tourism
   ```

3. **Install Dependencies**:
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```
   - For the backend:
     ```bash
     cd backend
     npm install
     ```

4. **Set Up Environment Variables**:
   - Create a `.env` file in the `backend` directory and add the necessary environment variables
   -  (e.g., database connection string, Chapa API keys).

5. **Run the Development Server**:
   - Start the backend server:
     ```bash
     cd backend
     npm run start
     ```
   - Start the frontend development server:
     ```bash
     cd frontend
     npm run dev
     ```

## Usage

- Visit `http://localhost:4000` (or the specified port) to access the application in your web browser.
- Explore the various destination pages and additional sections.

## Environment Variables

The following environment variables are required for the project to function correctly:

- `MONGO_URI`: MongoDB connection string
- `CHAPA_API_KEY`: Your Chapa API key

## Payment Integration

Payments are processed using the Chapa payment gateway. Ensure that your API keys are correctly set in the `.env` file for testing.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Create a pull request.


## Contact

For any questions or inquiries, feel free to reach out:

- **Your Name**: [bharanichappidi2006@gmail.com](mailto:bharanichappidi2006@gmail.com)
- **GitHub**: https://github.com/Bharani127
```

