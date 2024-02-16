import './style.scss';
import skills from './data/skills.json';

skills.sort((a,b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)

document.querySelector<HTMLBodyElement>('#app')!.innerHTML = /*html*/ `
<h1 class="text-2xl mb-3">Vite JS-DOM Site</h1>
<p>Welcome to this site.</p>

<h2 class="text-xl mt-4 text-yellow-300">${skills.length} Web Developer Skills</h2>
<ul class="list-disc ml-6">
	${skills.map(skill => {
		return /*html*/ `
			<li><span class="text-orange-400 font-semibold">${skill.name}</span> - ${skill.description}</li>
		`;
	}).join('')}
</ul>
`;