<script>
	import { slide } from "svelte/transition";
	import { onMount } from "svelte";
	import { links, Router, link } from "svelte-routing";

	let open = false;
	export let dark = false;

	let scrollThreshold = 10;

	function toggleTheme() {
		dark = !dark;
		if (dark) localStorage.theme = "dark";
		else localStorage.theme = "light";
	}

	onMount(() => {
		/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
		let prevScrollpos = window.pageYOffset;
		let navbar = document.getElementById("navbar");

		window.onscroll = () => {
			let currentScrollPos = window.pageYOffset;
			// console.log(currentScrollPos, prevScrollpos);
			if (prevScrollpos > currentScrollPos) {
				navbar.style.top = "0";
			} else {
				navbar.style.top = `-${navbar.offsetHeight}px`;
			}
			// navbar.style.top = prevScrollpos > currentScrollPos ? "0" : `-${navbar.offsetHeight}px`;
			prevScrollpos = currentScrollPos;
		};

		// show navbar when hover over
		onmousemove = e => {
			if (e.clientY < navbar.offsetHeight) navbar.style.top = "0";
		};
	});
</script>

<header
	id="navbar"
	class="flex items-center justify-between px-6 lg:px-10 py-4 top-0 bg-white dark:bg-gray-900 shadow-md fixed w-full z-50"
>
	<div class="logo flex items-center">
		<a
			href="/#home"
			data-aos="flip-up"
			data-aos-duration="700"
			class="bg-gradient-to-br from-purple-400 to-red-400 w-6 h-6 mr-5 relative"
		>
			<!-- <div class="logo-element bg-gray-900 w-1 h-5"></div> -->
			<p class="logo-type text-white dark:text-gray-900 text-3xl font-black absolute bottom-0">B</p>
		</a>
		<a href="/#home" data-aos="flip-up" class="hover:no-underline"
			><p class="nav-text-home">Ng Bob Shoaun</p></a
		>
	</div>
	<nav use:links class="hidden lg:flex links justify-between items-center space-x-12">
		<Router>
			<a href="/#about" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="700" noroute
				><p class="nav-text">About</p></a
			>
			<a
				href="/#web-development"
				data-aos="zoom-in"
				data-aos-delay="200"
				data-aos-duration="700"
				noroute><p class="nav-text">Web dev</p></a
			>
			<!-- <a href="/#graphic-design" noroute><p class="text-gray-800 dark:text-gray-50 font-mono ">Design</p></a> -->
			<a
				href="/#game-development"
				data-aos="zoom-in"
				data-aos-delay="300"
				data-aos-duration="700"
				noroute><p class="nav-text">Game dev</p></a
			>
			<a href="/#contact" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="700" noroute
				><p class="nav-text">Contact</p></a
			>

			<a href="/resume" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="700"
				><p class="nav-text">Resume</p></a
			>
		</Router>
		<button
			data-aos="flip-up"
			data-aos-delay="600"
			data-aos-duration="700"
			on:click={toggleTheme}
			class="border-gray-500 border-2 py-1 px-3 dark:text-gray-50 rounded-md focus:outline-none"
			><i class="{dark ? 'fa fa-moon' : 'far fa-sun'} mr-2" />{dark ? "Dark" : "Light"}</button
		>
	</nav>

	<button class="lg:hidden border-none">
		<button on:click={() => (open = !open)} class="text-lg dark:text-white focus:outline-none"
			><i class="fas fa-bars" /></button
		>

		{#if open}
			<div
				on:click={() => (open = false)}
				class="bg-transparent w-full h-full fixed top-0 left-0"
			/>
			<div
				transition:slide={{ duration: 500 }}
				class="fixed top-0 left-0 shadow-2xl w-full bg-white dark:bg-gray-900 pt-4 pb-6"
			>
				<button
					on:click={() => (open = false)}
					class="text-right text-lg text-gray-800 dark:text-gray-50 float-right bg-gray-50 dark:bg-gray-800 px-3 py-1 mb-2 mr-4 focus:outline-none"
					><i class="fas fa-times fa-sm" /></button
				>
				<div class="clear-right" />
				<nav class="mb-3">
					<a
						on:click={() => (open = false)}
						data-aos="slide-left"
						data-aos-delay="200"
						class="block mb-2  bg-gray-50 dark:bg-gray-800 p-5"
						href="/#about"
					>
						<p class="text-gray-800 dark:text-gray-50 font-mono text-center">
							<!-- <i class="far fa-smile-wink mr-3" /> -->
							About Me
						</p>
					</a>
					<a
						on:click={() => (open = false)}
						data-aos="slide-right"
						data-aos-delay="200"
						class="block mb-2  bg-gray-50 dark:bg-gray-800 p-5"
						href="/#web-development"
						><p class="text-gray-800 dark:text-gray-50 font-mono text-center">
							<!-- <i class="fas fa-code mr-3" /> -->
							Web Development
						</p></a
					>
					<!-- <a
						on:click={() => (open = false)}
						class="block mb-2   bg-gray-50 dark:bg-gray-800 p-5"
						href="/#graphic-design"
						><p class="text-gray-800 dark:text-gray-50 font-mono text-center">
						
							Graphic Design
						</p></a
					> -->
					<a
						on:click={() => (open = false)}
						data-aos="slide-left"
						data-aos-delay="200"
						class="block mb-2   bg-gray-50 dark:bg-gray-800 p-5"
						href="/#game-development"
						><p class="text-gray-800 dark:text-gray-50 font-mono text-center">
							<!-- <i class="fas fa-gamepad mr-3" /> -->
							Game Development
						</p></a
					>
					<a
						on:click={() => (open = false)}
						data-aos="slide-right"
						data-aos-delay="200"
						class="block mb-2 bg-gray-50 dark:bg-gray-800 p-5"
						href="/#contact"
						><p class="text-gray-800 dark:text-gray-50 font-mono text-center">
							<!-- <i class="far fa-paper-plane mr-3 text-left" /> -->
							Contact Me
						</p></a
					>

					<a
						on:click={() => (open = false)}
						use:link
						data-aos="slide-left"
						data-aos-delay="200"
						class="block bg-gray-50 dark:bg-gray-800 p-5"
						href="/resume"
						><p class="text-gray-800 dark:text-gray-50 font-mono text-center">Resume</p></a
					>
				</nav>
				<button
					data-aos="flip-up"
					data-aos-delay="400"
					on:click={toggleTheme}
					class="border-gray-500 border-2 py-2 px-4 dark:text-gray-50 rounded-md focus:outline-none outline-none"
					><i class="{dark ? 'fa fa-moon' : 'far fa-sun'} mr-2" />{dark ? "Dark" : "Light"}</button
				>
			</div>
		{/if}
	</button>
</header>

<style>
	#navbar {
		transition: top 0.3s; /* Transition effect when sliding down (and up) */
	}
	.logo-type {
		bottom: -0.7rem;
		left: -0.46rem;
		font-size: 2rem;
	}
	/* .logo-element {
    margin-left: 1.29rem;
    width: .21rem;
  } */
</style>
