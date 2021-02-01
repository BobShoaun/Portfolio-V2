<script>
	let frameworks = ["Vue", "Unity Engine", "Git", "Svelte", "Node.js", "Figma", "Illustrator"];
	let codingLanguages = ["JS", "HTML", "(S)CSS", "C#", "C++", "SQL", "Python", "Java"];
	let interests = ["Drums", "PC Building", "Ukulele", "Table Tennis"];
	let languages = ["English", "Chinese", "Malay"];

	async function copyEmail() {
		await navigator.clipboard.writeText("ngbobshoaun2000@gmail.com");
		alert("copied to clipboard!");
	}
</script>

<main class="bg-blue-200 py-32 overflow-auto">
	<!-- <div class="mx-auto">
		<button class="py-1 px-4 border-green-400 border bg-green-200 hover:bg-green-300 rounded-none"
			>Print</button
		>
	</div> -->
	<section class="resume bg-white shadow-xl mx-auto">
		<aside class="sidebar bg-red-50 px-5 pt-5 pb-6 border-red-400 border-t-4">
			<h1 class="text-gray-700 text-5xl font-bold mb-1">Ng Bob Shoaun</h1>
			<h3 class="text-red-400 font- text-xl mb-2">Software Developer <br />& Designer</h3>
			<div class="info">
				<i class="text-gray-700 text-center fas fa-phone" />
				<p class="text-gray-700 text-sm">+60 18-2943 168</p>
				<i class="text-gray-700 text-center fas fa-envelope" />
				<p class="text-gray-700 text-sm cursor-pointer" on:click={copyEmail}>
					ngbobshoaun2000@gmail
				</p>
				<i class="text-gray-700 text-center fab fa-linkedin" />
				<a
					href="https://www.linkedin.com/in/ngbobshoaun/"
					target="_blank"
					class="text-gray-700 text-sm">linkedin.com/in/ngbobshoaun</a
				>
				<i class="text-gray-700 text-center fab fa-github" />
				<a href="https://github.com/BobShoaun" target="_blank" class="text-gray-700 text-sm"
					>github.com/BobShoaun</a
				>
				<i class="text-gray-700 text-center fas fa-map-marker-alt" />
				<p class="text-gray-700 text-sm">Toronto, Canada.</p>
				<i class="text-gray-700 text-center fas fa-home" />
				<p class="text-gray-700 text-sm">Selangor, Malaysia.</p>
			</div>
		</aside>

		<article class="content flex flex-col justify-between">
			<div>
				<h2 class="text-red-400 bg-red-50 w-full border-red-400 pl-4 py-1 border-l-4 text-xl mb-2">
					About Me
				</h2>
				<p class="text-gray-600 text-sm">
					<q
						>Skilled and diligent programmer with an eye for good designs. Always seeking to learn
						and improve on existing ways. A resourceful and avid self-learner passionate in coding
						since the age of 14.</q
					>
				</p>
			</div>

			<div>
				<h2 class="text-red-400 bg-red-50 w-full border-red-400 pl-4 py-1 border-l-4 text-xl mb-2">
					Education
				</h2>

				<div class="flex justify-between items-baseline mb-0">
					<h3 class="text-gray-700 text-lg font-bold">University of Toronto</h3>
					<p class="text-sm text-gray-700">CGPA: 3.93</p>
				</div>

				<p class="text-sm text-gray-400 float-right text-right">Sept 2019 - Present</p>
				<p class="text-sm text-gray-400 mb-1 italic">Computer Science Specialist (2nd year)</p>
				<ul class="list-square text-gray-700 pl-5 text-sm mb-1">
					<li>
						MAT137: Calculus!
						<p class="float-right">A+</p>
					</li>
					<li>
						CSC207: Software Design <p class="float-right">A &nbsp;</p>
					</li>
					<li>
						CSC236: Intro to the Theory of Computation
						<p class="float-right">A &nbsp;</p>
					</li>
					<li>
						CSC258: Computer Organization
						<p class="float-right">A+</p>
					</li>
				</ul>
			</div>

			<div>
				<h2 class="text-red-400 bg-red-50 w-full border-red-400 pl-4 py-1 border-l-4 text-xl mb-2">
					Experience
				</h2>
				<h3 class="text-gray-700 text-lg font-bold">Pathforge Pte. Ltd.</h3>
				<p class="text-sm text-gray-400 float-right text-right">Sept 2020 - Present</p>
				<p class="text-sm text-gray-400 mb-1 italic">Fullstack developer</p>
				<ul class="list-square text-gray-600 pl-5 text-sm mb-2">
					<li>Communicated with developers and designers in a startup environment.</li>
					<li>
						Conducted zoom lectures and provided mentorship to groups of learners about programming
						and web dev.
					</li>
					<li>
						Used technologies like Vue, Graphql, and Hasura to build a site that seeks to
						revolutionize self-learning.
					</li>
				</ul>
				<h3 class="text-gray-700 text-lg font-bold">N2N Berhad</h3>
				<p class="text-sm text-gray-400 float-right text-right">May - Aug 2019</p>
				<p class="text-sm text-gray-400 mb-1 italic">Intern / Frontend developer</p>
				<ul class="list-square text-gray-600 pl-5 text-sm">
					<li>Revamped the frontend for the company's internal timesheet management system.</li>
					<li>Fixed bugs and introduced new quality of life features.</li>
					<li>Presented my work during head of department meetings.</li>
				</ul>
			</div>

			<div>
				<h2 class="text-red-400 bg-red-50 w-full border-red-400 pl-4 py-1 border-l-4 text-xl mb-2">
					Projects
				</h2>
				<div class="flex justify-between items-baseline mb-1">
					<h3 class="text-gray-700 text-lg font-bold">Assembly Doodle Jump</h3>
					<p class="text-sm text-gray-400 italic">Final academic project</p>
				</div>
				<ul class="list-square text-gray-600 pl-5 text-sm mb-2">
					<li>Simple game coded from scratch using MIPS assembly as a final project for CSC258.</li>
					<li>
						Features include sound effects, powerups like springs and jetpacks, and various platform
						types.
					</li>
				</ul>

				<div class="flex justify-between items-baseline mb-1">
					<h3 class="text-gray-700 text-lg font-bold">Course Checker</h3>
					<p class="text-sm text-gray-400 italic">Personal project</p>
				</div>
				<ul class="list-square text-gray-600 pl-5 text-sm">
					<li>
						Helps students plan courses for the upcoming semester by dynamically generating a visual
						timetable.
					</li>
					<li>Made for Taylor's university ADP students.</li>
				</ul>
			</div>
		</article>

		<section class="stats relative flex flex-col justify-between">
			<div>
				<h2
					class="text-red-400 bg-red-50 w-full border-red-400 pl-4 py-1 border-l-4 text-xl mb-2.5"
				>Coding Languages</h2>
				<div class="flex flex-wrap justify-start">
					{#each codingLanguages as codingLanguage}
						<h4 class="bg-red-400 px-2.5 py-1.5 mb-1.5 mr-1.5 font-bold text-sm text-white">
							{codingLanguage}
						</h4>
					{/each}
				</div>
			</div>

			<div>
				<h2
					class="text-red-400 bg-red-50 w-full border-red-400 pl-4 py-1 border-l-4 text-xl mb-2.5"
				>Tools & Frameworks</h2>
				<div class="flex flex-wrap justify-start">
					{#each frameworks as framework}
						<h4 class="bg-red-400 px-2.5 py-1.5 mb-1.5 mr-1.5 font-bold text-sm text-white">
							{framework}
						</h4>
					{/each}
				</div>
			</div>

			<div>
				<h2
					class="text-red-400 bg-red-50 w-full border-red-400 pl-4 py-1 border-l-4 text-xl mb-2.5"
				>Interests</h2>
				<div class="flex flex-wrap justify-start">
					{#each interests as interest}
						<h4 class="bg-red-400 px-2.5 py-1.5 mb-1.5 mr-1.5 font-bold text-sm text-white">
							{interest}
						</h4>
					{/each}
				</div>
			</div>

			<div>
				<h2
					class="text-red-400 bg-red-50 w-full border-red-400 pl-4 py-1 border-l-4 text-xl mb-2.5"
				>Languages</h2>
				<div class="flex flex-wrap justify-start">
					{#each languages as language}
						<h4 class="bg-red-400 px-2.5 py-1.5 mb-1.5 mr-1.5 font-bold text-sm text-white">
							{language}
						</h4>
					{/each}
				</div>
			</div>

			<div class="bg-red-50 border-red-400 border-b-4 px-5 pt-1.5 pb-1.5 w-full">
				<h3 class="text-red-400 text-sm italic">Last updated on: 24 Jan 2021</h3>
			</div>
		</section>
	</section>
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap");

	.resume {
		font-family: "Open Sans", sans-serif;
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-template-rows: auto 1fr;
		grid-template-areas:
			"sidebar content"
			"stats content";
		column-gap: 2.5em;
		row-gap: 2em;

		/* a4 size */
		width: 21cm;
		height: 29.7cm;

		box-sizing: border-box;
		padding: 3em;
	}

	@media print {
		.resume {
			height: 100% !important;
			width: 100% !important;
			position: fixed !important;
			top: 0 !important;
			left: 0 !important;
			margin: 0 !important;
			padding: 0 !important;
			line-height: 18px;
			-webkit-print-color-adjust: exact !important;
		}
		@page {
			size: A4;
		}
	}

	.info {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: repeat(4, 1fr);
		column-gap: 0.6rem;
		row-gap: 0.6rem;
	}
	.stats {
		grid-area: stats;
	}
	.content {
		grid-area: content;
	}
	.sidebar {
		grid-area: sidebar;
	}
	a {
		color: rgba(55, 65, 81, var(--tw-text-opacity));
	}

	/* ul.dash {
		list-style: none;
		margin-left: 0;
		padding-left: 1em;
	}
	ul.dash > li:before {
		display: inline-block;
		content: "-";
		width: 1em;
		margin-left: -1em;
	} */
</style>
