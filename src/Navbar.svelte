<script>
	import { slide } from "svelte/transition";
	import { onMount } from "svelte";
	import { Link } from "svelte-routing";
	import { links, Router } from "svelte-routing";

	let open = false;
	export let dark = false;

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
			navbar.style.top = prevScrollpos > currentScrollPos ? "0" : `-${navbar.offsetHeight}px`;
			prevScrollpos = currentScrollPos;
		};
	});
</script>

<header
	id="navbar"
	class="flex items-center justify-between px-6 lg:px-10 py-5 bg-white dark:bg-gray-900 shadow-md fixed w-full z-50"
>
	<div class="logo font-semibold">
		<div class="bg-purple-400 w-4 h-4 mr-3 inline-block" />
		<a href="#home" class="hover:no-underline inline-block"
			><p class="text-gray-800 dark:text-gray-50">Ng Bob Shoaun</p></a
		>
	</div>
	<nav use:links class="hidden lg:flex links justify-between items-center space-x-12">
		<Router>
			<a href="/#about" noroute><p class="text-gray-800 dark:text-gray-50 font-mono ">About</p></a>
			<a href="/#web-development" noroute
				><p class="text-gray-800 dark:text-gray-50 font-mono ">Web dev</p></a
			>
			<!-- <a href="/#graphic-design" noroute><p class="text-gray-800 dark:text-gray-50 font-mono ">Design</p></a> -->
			<a href="/#game-development" noroute
				><p class="text-gray-800 dark:text-gray-50 font-mono ">Game dev</p></a
			>
			<a href="/#contact" noroute
				><p class="text-gray-800 dark:text-gray-50 font-mono">Contact</p></a
			>

			<a href="/resume"><p class="text-gray-800 dark:text-gray-50 font-mono">Resume</p></a>
		</Router>
		<button
			on:click={toggleTheme}
			class="border-gray-500 border-2 py-1 px-3 dark:text-gray-50 rounded-md"
			><i class="{dark ? 'fa fa-sun' : 'far fa-moon'} mr-2" />{dark ? "Light" : "Dark"}</button
		>
	</nav>

	<button class="lg:hidden border-none">
		<button on:click={() => (open = !open)} class="border-none text-lg dark:text-white"
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
					class="text-right text-lg text-gray-800 dark:text-gray-50 float-right bg-gray-50 dark:bg-gray-800 px-3 py-1 mb-2 mr-2 border-none"
					><i class="fas fa-times fa-sm" /></button
				>
				<div class="clear-right" />
				<nav class="mb-3">
					<a
						on:click={() => (open = false)}
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
						class="block mb-2   bg-gray-50 dark:bg-gray-800 p-5"
						href="/#game-development"
						><p class="text-gray-800 dark:text-gray-50 font-mono text-center">
							<!-- <i class="fas fa-gamepad mr-3" /> -->
							Game Development
						</p></a
					>
					<a
						on:click={() => (open = false)}
						class="block mb-2 bg-gray-50 dark:bg-gray-800 p-5"
						href="/#contact"
						><p class="text-gray-800 dark:text-gray-50 font-mono text-center">
							<!-- <i class="far fa-paper-plane mr-3 text-left" /> -->
							Contact Me
						</p></a
					>

					<a
						on:click={() => (open = false)}
						class="block bg-gray-50 dark:bg-gray-800 p-5"
						href="/resume"
						><p class="text-gray-800 dark:text-gray-50 font-mono text-center">Resume</p></a
					>
				</nav>
				<button
					on:click={toggleTheme}
					class="border-gray-500 border-2 py-2 px-4 dark:text-gray-50 rounded-md"
					><i class="{dark ? 'fa fa-sun' : 'far fa-moon'} mr-2" />{dark ? "Light" : "Dark"}</button
				>
			</div>
		{/if}
	</button>
</header>

<style>
	#navbar {
		transition: top 0.3s; /* Transition effect when sliding down (and up) */
	}
</style>
