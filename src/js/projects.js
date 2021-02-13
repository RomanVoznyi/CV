import tpl from '../partials/templates/projects.hbs';
import { teamProjects, ownProjects } from './projects-db';

const refs = {
  team: document.querySelector('.js-team'),
  own: document.querySelector('.js-own'),
};

refs.team.innerHTML = tpl(teamProjects);
refs.own.innerHTML = tpl(ownProjects);
