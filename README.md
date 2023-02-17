### Disclaimer: This app was created as part of a final project for learning and educational purposes, under guidance of LightHouse Labs. It is not ready or indended for production.

## Project title

     ### REMAX - "Maximize your rewards"

## Description

There are many credit cards out there these days and it can get overwhelming. REMAX helps users decide which credit cards to get the most cashback value. Our app allows clients to maximize cashback from their credit card purchases, by showcasing popular credit cards and their rewards in a clear and concise manner. The app features a clean interface with dark mode option and was built with responsive design for ease of use on mobile devices. The home page showcases the featured cards and vendors. A navigation bar is displayed at all times to allow users to navigate the entire app conviniently, in addition to a search bar. Data is persisted with the help of a database. Some features are displayed but not functional, such as the Footer section, Register, Login and About page.

The final app is deployed on Vercel and can be accessed here: https://remax-lhl.vercel.app/

## Target audience

Anyone that uses a credit card.

## Features

A user can:

- View featured cards and vendors on the home page.
- Click on "View All Cards" and "View All Vendors" to view all avilable cards and vendors, respectively.
- Click on a card to view card details and click on a vendor to view cards that offer cashback that apply to that vendor.
- Use the navigation bar to view cards that offer cashback rewards for a specific purchasing category, such as Grocery, Entertainment, Reoccurring Bill etc. Cards are listed in descending order of cashback % with highest cashback % on top.
- Use the navigation bar to view list of cards that offer cashback rewards for a specific vendor and bank.
- Click on any of these cards to view the specifc rewards offered by that card, along with other card details.
- View the $ amount of cashback for each category of spending by using a slider or enter the amount spent.
- Also use the navigation bar to view a specific card directly.
- Use search bar to perform a global search, or filter the search by banks cards and vendors.
- Enable dark mode.
- Use the app on a mobile device due to responsive design.

## Stack

- Front-End: React/Next.js
- Back-End: Next.js
- Database: PostgreSQL, hosted on Railway.app
- Styling: TailwindCSS

## Team members

- Aingaran Thirunadadarajah (aingaran.thirunadarajah@telus.com)
- Lian Chan (lian.chan@telus.com)
- Raheel Bennett (raheel.bennett@telus.com,)

## Setup

---

### Creating The DB

From the terminal type `psql -U labber` command to login to the PostgreSQL server with the username `labber` and password `labber`. This command **MUST** be run in a vagrant terminal, we are using the PostgreSQL installation provided in the vagrant environment.

Create a database with the command `CREATE DATABASE remax;`.

Copy the `.env.example` file to `.env` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

```
DB_HOST=localhost
DB_USER=labber
DB_NAME=remax
DB_PASS=labber
DB_PORT=5432
```

The variables can be updated to work with your local psql setup or db hosted on a server.

---

- Install dependencies with `npm install`.
- After creating the databse(Creating The DB above), create schemas and seed the database with `npm reset`.
- View app in development mode `npm run dev`.
- From the browser go to `http://localhost:3000/`.

## Future Development

Future development of the apps aim to:

- Have a user Register and Sign-in.
- Have a user save favorite cards or add their own cards
- Have admin add, remove or edit cards.
- Fetch data from API rather than a database.
- Add an about page.
- Enable links in the footer section.

## App Interface
