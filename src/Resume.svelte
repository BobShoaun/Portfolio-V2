<script>
	let skills = [
		"Vue",
		"Javascript",
		"Git",
		"Unity",
		"C#",
		"Svelte",
		"Java",
		"C++",
		"SQL",
		"Illustrator",
	];
	let languages = ["English", "Mandarin", "Cantonese", "Malay"];
</script>

<main class="bg-gray-500 flex justify-items-center items-center">
	<section class="resume bg-white">
		<aside class="sidebar bg-red-50 px-5 pt-10 pb-14 border-red-400 border-t-4">
			<h1 class="text-gray-700 text-6xl font-bold mb-3">Ng Bob Shoaun</h1>
			<h3 class="text-red-400 font-semibold text-xl mb-5">Software Developer / Designer</h3>
			<div class="info">
				<i class="text-gray-700 text-center fas fa-envelope" />
				<p class="text-gray-700 text-sm">ngbobshoaun2000@gmail</p>
				<i class="text-gray-700 text-center fab fa-linkedin" />
				<p class="text-gray-700 text-sm">linkedin.com/in/ngbobshoaun</p>
				<i class="text-gray-700 text-center fab fa-github" />
				<p class="text-gray-700 text-sm">github.com/BobShoaun</p>
				<i class="text-gray-700 text-center fas fa-map-marker-alt" />
				<p class="text-gray-700 text-sm">Toronto, Canada.</p>
				<i class="text-gray-700 text-center fas fa-home" />
				<p class="text-gray-700 text-sm">Selangor, Malaysia.</p>
			</div>
		</aside>

		<article class="content">
			<h2
				class="text-red-400 bg-red-50 w-full border-red-400 pl-4 py-1 border-l-4 font-light text-2xl mb-2"
			>About Me</h2>
			<p class="text-gray-600 text-sm mb-10">
				“Highly skilled and diligent programmer, always seeks to learn, and improve on existing
				ways. Extremely resourceful and an avid self-learner, have been practicing coding since the
				age of 14 years old.”
			</p>

			<h2
				class="text-red-400 bg-red-50 w-full border-red-400 pl-4 py-1 border-l-4 font-light text-2xl mb-2"
			>Education</h2>
			<h3 class="text-gray-700 text-lg font-bold">University of Toronto</h3>
			<p class="text-sm text-gray-400 float-right text-right">09/2019 - Present</p>
			<p class="text-sm text-gray-400 mb-2 italic">Computer Science Specialist</p>
      <ul class="dash text-gray-600 pl-5 text-sm mb-10">
				<li>Programming in C++</li>
				<li>Computer Programming - Java</li>
				<li>Object-Oriented Programming (C++)</li>
			</ul>

			<h2
				class="text-red-400 bg-red-50 w-full border-red-400 pl-4 py-1 border-l-4 font-light text-2xl mb-2"
			>Experience</h2>
			<h3 class="text-gray-700 text-lg font-bold">Administrative Assistant</h3>
			<p class="text-sm text-gray-400 float-right text-right">12/2016 - 02/2017</p>
			<p class="text-sm text-gray-400 mb-2 italic">Sri Emas International School</p>
			<ul class="dash text-gray-600 pl-5 text-sm mb-10">
				<li>Scrutinized the workings of their proprietary school management system. (SchoolHub)</li>
				<li>Reported bugs and inconsistencies to developers.</li>
				<li>Suggested UX refinements for ease of use from an administrator’s perspective.</li>
				<li>Formulated a guidebook for new users of the school management system.</li>
			</ul>

			<h2
				class="text-red-400 bg-red-50 w-full border-red-400 pl-4 py-1 border-l-4 font-light text-2xl mb-2"
			>Projects</h2>
			<div class="flex justify-between items-baseline">
				<h3 class="text-gray-700 text-lg font-bold">Maze Runner Game</h3>
				<p class="text-sm text-gray-400 italic">Final academic project</p>
			</div>
			<ul class="dash text-gray-600 pl-5 text-sm mb-5">
				<li>Created a game within the time frame of 2 days.</li>
				<li>
					As a team leader, delegated tasks according to groupmate’s strengths and weaknesses.
				</li>
			</ul>

			<div class="flex justify-between items-baseline">
				<h3 class="text-gray-700 text-lg font-bold">Course Checker</h3>
				<p class="text-sm text-gray-400 italic">Personal project</p>
			</div>
			<ul class="dash text-gray-600 pl-5 text-sm mb-5">
				<li>Vision to improve university’s course pre-registration process.</li>
				<li>
					Helps students plan their courses for the upcoming semester by generating a visual
					timetable.
				</li>
			</ul>

			<div class="flex justify-between items-baseline">
				<h3 class="text-gray-700 text-lg font-bold">Fishackathon 2018</h3>
				<p class="text-sm text-gray-400 italic">by HackerNest</p>
			</div>
			<ul class="dash text-gray-600 pl-5 text-sm mb-5">
				<li>Built an andriod app to generate awareness of region specific fishing laws.</li>
				<li>Presented to judges working in the fishing industry.</li>
			</ul>
		</article>

		<section class="stats relative">
			<h2
				class="text-red-400 bg-red-50 w-full border-red-400 pl-4 py-1 border-l-4 font-light text-2xl mb-4"
			>Skills</h2>
			<div class="flex flex-wrap justify-start mb-8">
				{#each skills as skill}
					<h4 class="bg-red-400 px-3 py-1.5 mb-2.5 mr-2.5 font-bold text-sm text-white">
						{skill}
					</h4>
				{/each}
			</div>

			<h2
				class="text-red-400 bg-red-50 w-full border-red-400 pl-4 py-1 border-l-4 font-light text-2xl mb-4"
			>Languages</h2>
			<div class="flex flex-wrap justify-start mb-8">
				{#each languages as language}
					<h4 class="bg-red-400 px-3 py-1.5 mb-2.5 mr-2.5 font-bold text-sm text-white">
						{language}
					</h4>
				{/each}
			</div>

			<div class="bg-red-50 border-red-400 border-b-4 px-5 pt-5 pb-5 absolute bottom-0">
				<h3 class="text-red-400 text-sm">Designed and built by Ng Bob Shoaun</h3>
			</div>
		</section>
	</section>
</main>

<style>
	.resume {
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-template-rows: auto 1fr;
		grid-template-areas:
			"sidebar content"
			"stats content";
		column-gap: 2.5em;
		row-gap: 2.5em;

		width: 21cm;
		height: 29.7cm;

		box-sizing: border-box;
		margin: 100px auto;
		padding: 3em;
	}

	.info {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: repeat(4, 1fr);
		column-gap: 0.7rem;
		row-gap: 0.5rem;
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
  
  ul.dash {
    list-style: none;
    margin-left: 0;
    padding-left: 1em;
}
ul.dash > li:before {
    display: inline-block;
    content: "-";
    width: 1em;
    margin-left: -1em;
}
</style>
