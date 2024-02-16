import './style.scss'

document.querySelector<HTMLBodyElement>('#app')!.innerHTML = /*html*/ `
<h1 class="text-2xl mb-3">Vite JS-DOM Site</h1>
<p>Welcome to this site.</p>
<ul class="list-disc ml-6">
	<li>one</li>
	<li>two</li>
	<li>three</li>
</ul>
`;