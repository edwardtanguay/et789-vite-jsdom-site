import './style.scss';
import skills from './data/skills.json';
import { Header } from './components/Header';

skills.sort((a,b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)

document.querySelector<HTMLBodyElement>('#app')!.innerHTML = /*html*/ `

${Header()}

<h2 class="text-xl mt-4 text-yellow-300">${skills.length} Web Developer Skills</h2>
<ul class="list-disc ml-6">
	${skills.map(skill => {
		return /*html*/ `
			<li><span class="text-orange-400 font-semibold">${skill.name}</span> - ${skill.description}</li>
		`;
	}).join('')}
</ul>
`;