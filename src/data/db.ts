import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Cocktail web app with Zustand, API and OpenRouter AI",
    image: "/cocktail-zustand.png",
    description: "A modern cocktail recipe search application built with React, TypeScript, and Zustand for state management. Users can search for cocktail recipes using TheCocktailDB API and receive AI-powered cocktail suggestions via OpenRouter integration. Features responsive design with TailwindCSS and leverages serverless functions on Netlify for enhanced performance.",
    link: "https://cocktail-drinks-alex.netlify.app/"
  },
  {
    title: "Patient Management System with React Hook Form, Zustand, and Tailwind",
    image: "/patient-administrator.png",
    description: "A full-featured patient appointment management system. Utilizes React Hook Form for robust form handling and validation, Zustand for global state management, and TailwindCSS for a sleek, responsive UI. Enables users to add, edit, and delete patient records easily.",
    link: "https://meva1997.github.io/pacientes-zustand-alex/"
  },
  {
    title: "React Budget Administrator with Context API",
    image: "/budget-contextapi.png",
    description: "Intuitive budgeting app built in React that helps users track expenses and manage their budget in real time. Uses the Context API to manage application state, providing a seamless user experience. Includes features for adding, editing, and filtering expenses.",
    link: "https://meva1997.github.io/control-gastos-contextapi-alex/"
  },
  {
    title: "Weather App with React, OpenWeather API, TypeScript and Zod",
    image: "/weather-app.png",
    description: "A responsive weather dashboard built with React and TypeScript. Fetches real-time weather data from the OpenWeather API. Implements Zod for input validation, ensuring robust and safe data handling. Users can search by city for current conditions and forecasts.",
    link: "https://resonant-pothos-7d5d06.netlify.app/"
  },
  {
    title: "React Calorie Tracker",
    image: "/calorie-tracker.png",
    description: "A calorie tracking app developed in React, allowing users to log daily calorie intake and calories burned. Features intuitive input forms, daily summaries, and visual feedback to help users maintain their health and fitness goals.",
    link: "https://meva1997.github.io/calorie-tracker-alex/"
  },
  {
    title: "React Tip Calculator",
    image: "/tip-calculator.png",
    description: "A simple and effective tip calculator built with React, utilizing the useReducer hook for state management. Users can quickly estimate tips and total amounts for bills, with a clean and user-friendly interface.",
    link: "https://meva1997.github.io/calculadora-propinas-alex/"
  },
  {
    title: "JavaScript Budget Administrator",
    image: "/budget-js.png",
    description: "A straightforward budgeting tool built with vanilla JavaScript, HTML, and CSS. Users can manage expenses and keep track of their budget, with data persistence enabled through localStorage.",
    link: "https://meva1997.github.io/cotizador-presupuesto/"
  },
  {
    title: "Patient Management System",
    image: "/patient-admin.png",
    description: "A classic patient record management system using only HTML, CSS, and JavaScript. Allows the creation, editing, and deletion of patient records—ideal for learning basic CRUD functionality on the web.",
    link: "https://meva1997.github.io/paciente-medicina/"
  },
  {
    title: "JavaScript PokeApi",
    image: "/poke-api.png",
    description: "A fun Pokédex-style app that consumes the PokeAPI to let users browse and search Pokémon data. Built with JavaScript, it features a clean interface, search/filter options, and dynamic content loading.",
    link: "https://meva1997.github.io/Poke-api/"
  }
];