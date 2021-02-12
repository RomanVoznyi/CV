import filmoteka from '../images/screenshots/filmoteka-screenshot.jpg';
import barberShop from '../images/screenshots/barber-screenshot.jpg';
import phoneBook from '../images/screenshots/phoonebook-screenshot.jpg';
import movieFinder from '../images/screenshots/moviefinder-screenshot.jpg';
import imageFinder from '../images/screenshots/imagefinder-screenshot.jpg';
import webStudio from '../images/screenshots/webstudio-screenshot.jpg';

export const teamProjects = [
  {
    name: 'Filmoteka',
    url: 'https://romanvoznyy.github.io/final-project-js',
    screenshot: filmoteka,
    description: 'movie search and storage application (role: team leader)',
    stack:
      'JS, SCSS, HTML, Handlebars, Parcel, REST API, AJAX, GIT, Figma, Trello',
  },
  {
    name: 'BarberShop',
    url: 'https://theneonwhale.github.io/final-project-group-11',
    screenshot: barberShop,
    description: 'landing page for hair salon for men (role: developer)',
    stack: 'HTML, CSS, JS, Parcel, GIT, Figma, Trello',
  },
];

export const ownProjects = [
  {
    name: 'PhoneBook',
    url: 'https://rv-goit-react-hw-08-phonebook.netlify.app',
    screenshot: phoneBook,
    description:
      'aplication with the ability to register users and work with private collections of contacts',
    stack:
      'React (hooks, router, lazy), Redux Toolkit, JS, SCSS, HTML, REST API, AJAX, Netlify',
  },
  {
    name: 'MovieFinder',
    url: 'https://rv-goit-react-hw-05-movies.netlify.app',
    screenshot: movieFinder,
    description: 'movie finder application with actors details and reviews',
    stack: 'React (hooks, router), JS, CSS, HTML, REST API, AJAX, Netlify',
  },
  {
    name: 'ImageFinder',
    url: 'https://romanvoznyy.github.io/goit-react-hw-04-hooks-images-fix-ver',
    screenshot: imageFinder,
    description: 'images and photos search application',
    stack: 'React (hooks), JS, HTML, CSS, REST API, AJAX, GIT',
  },
  {
    name: 'WebStudio',
    url: 'https://romanvoznyy.github.io/goit-markup-hw-08/index.html',
    screenshot: webStudio,
    description:
      'app for a web studio (team, portfolio, partners, order form etc.)',
    stack: 'HTML, SCSS, JS, GIT, Figma',
  },
];
