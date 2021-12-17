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
};

refs.team.innerHTML = tpl(teamProjects);
refs.own.innerHTML = tpl(ownProjects);
