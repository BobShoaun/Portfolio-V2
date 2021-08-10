<script>
	import { onMount } from "svelte";
	onMount(mounted);

	let experiences = [];

	async function mounted() {
		let response = await fetch("experience.json");
		experiences = await response.json();
	}
</script>

<main
	id="experience"
	class="main relative bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 z-0"
>
	<div
		data-aos="slide-down"
		data-aos-delay="900"
		class="bg-gray-50 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 absolute right-0 w-1/2 h-full"
	/>

	<div
		data-aos="slide-down"
		data-aos-offset="200"
		class="hidden lg:block absolute right-14 top-0 z-0"
	>
		<div class="w-5 h-36 bg-gray-800 dark:bg-gray-50 mb-5" />
		<p
			class="text-gray-800 dark:text-gray-50 font-mono font-bold text-4xl text-right right-0 absolute"
		>
			010
		</p>
	</div>

	<section class="section relative">
		<h2 data-aos="fade-in" class="title mb-6 text-center font-mono">Experience_</h2>
		<h5 data-aos="fade-in" class="subtitle mb-20 text-center max-w-xl mx-auto">
			I currently have more than 2 years of work experience and counting. Here are some companies I
			have worked at before.
		</h5>

		<div class="grid lg:grid-cols-2 m-0 lg:m-28 shadow-2xl">
			{#each experiences as experience}
				<div class="exp flex {experience.background}">
					<img
						class="m-auto w-36 lg:w-64"
						src={experience.logo}
						alt={experience.name}
						style="mix-blend-mode: {experience.blend}"
					/>
					<div class="exp-desc bg-gray-800 p-5 lg:p-10">
						<h1 class="font-bold text-white text-base lg:text-2xl">
							{experience.position}
						</h1>
						<h1 class="font-bold {experience.highlight} text-base lg:text-2xl mb-1">
							@ {experience.name}
						</h1>
						<p class="text-gray-200 mb-4">{experience.start} - {experience.end}</p>
						<p class="text-sm lg:text-lg text-white">
							{@html experience.description}
							<!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in minus error
							cupiditate maiores voluptatibus dolorum ipsa quaerat nobis! Assumenda, nesciunt
							officiis? Voluptas vel quia dolorum aliquam dolor sed nihil. -->
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<div data-aos="slide-up" data-aos-offset="200" class="hidden lg:block absolute left-14 bottom-0">
		<div class="w-5 h-28 bg-gray-600 dark:bg-gray-300" />
	</div>
</main>

<style>
	.exp {
		aspect-ratio: 1/1;
		position: relative;
		--hover-time: 400ms;
		overflow: hidden;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
		/* background-attachment: fixed; */
	}

	.exp .exp-desc {
		position: absolute;
		inset: 0;
		opacity: 0;
		transform: translateY(100%);
		transition: all var(--hover-time) ease-out;
		overflow-y: scroll;
		z-index: 1;
		/* background: inherit; */
		overflow: hidden;
	}

	.exp .exp-desc::before {
		content: "";
		position: absolute;
		z-index: -1;
		inset: 0;
		/* background: inherit; */
		box-shadow: inset 0 0 2000px rgba(122, 122, 122, 0.486);
		background-color: rgba(31, 41, 55, 0.7);
		/* filter: blur(30px); */
		margin: -40px;
	}

	.exp:hover .exp-desc {
		transform: translateY(0);
		opacity: 1;
	}
</style>
