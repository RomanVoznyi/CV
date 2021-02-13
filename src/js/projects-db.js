import filmoteka from '../images/screenshots/filmoteka-screenshot.jpg';
import barberShop from '../images/screenshots/barber-screenshot.jpg';
import phoneBook from '../images/screenshots/phoonebook-screenshot.jpg';
import movieFinder from '../images/screenshots/moviefinder-screenshot.jpg';
import imageFinder from '../images/screenshots/imagefinder-screenshot.jpg';
import webStudio from '../images/screenshots/webstudio-screenshot.jpg';
import description from '../images/description.svg';
import tools from '../images/tools.svg';

export const teamProjects = [
  {
    name: 'Filmoteka',
    url: 'https://romanvoznyy.github.io/final-project-js',
    screenshot: filmoteka,
    description: 'movie search and storage app (role: team leader)',
    stack:
      'JS, SCSS, HTML, Handlebars, Parcel, REST API, AJAX, GIT, Figma, Trello',
    icons: { description, tools },
  },
  {
    name: 'BarberShop',
    url: 'https://theneonwhale.github.io/final-project-group-11',
    screenshot: barberShop,
    description: 'landing page for hair salon for men (role: developer)',
    stack: 'HTML, CSS, JS, Parcel, GIT, Figma, Trello',
    icons: { description, tools },
  },
];

export const ownProjects = [
  {
    name: 'PhoneBook',
    url: 'https://rv-goit-react-hw-08-phonebook.netlify.app',
    screenshot: phoneBook,
    description: 'app for working with private collections of contacts',
    stack: 'React, Redux, JS, SCSS, HTML, REST API, AJAX, Netlify',
    icons: { description, tools },
  },
  {
    name: 'MovieFinder',
    url: 'https://rv-goit-react-hw-05-movies.netlify.app',
    screenshot: movieFinder,
    description: 'movie finder app with actors details and reviews',
    stack: 'React, JS, CSS, HTML, REST API, AJAX, Netlify',
    icons: { description, tools },
  },
  {
    name: 'ImageFinder',
    url: 'https://romanvoznyy.github.io/goit-react-hw-04-hooks-images-fix-ver',
    screenshot: imageFinder,
    description: 'images and photos search app',
    stack: 'React, JS, HTML, CSS, REST API, AJAX, GIT',
    icons: { description, tools },
  },
  {
    name: 'WebStudio',
    url: 'https://romanvoznyy.github.io/goit-markup-hw-08/index.html',
    screenshot: webStudio,
    description: 'app for a web studio',
    stack: 'HTML, SCSS, JS, GIT, Figma',
    icons: { description, tools },
  },
];
