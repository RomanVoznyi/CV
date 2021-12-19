import tpl from '../partials/templates/projects.hbs';
import { teamProjects, ownProjects } from './projects-db';
import { addBackToTop } from 'vanilla-back-to-top';
addBackToTop({
  diameter: 56,
  backgroundColor: '#1e2939',
  textColor: '#fff',
});

const refs = {
  team: document.querySelector('.js-team'),
  own: document.querySelector('.js-own'),
  sertif: document.querySelector('.sertificate'),
  popup: document.querySelector('.popup'),
};

refs.team.innerHTML = tpl(teamProjects);
refs.own.innerHTML = tpl(ownProjects);

refs.sertif.addEventListener('click', toggleHidden);
refs.popup.addEventListener('click', toggleHidden);

function toggleHidden() {
  refs.popup.classList.toggle('visually-hidden');
}
