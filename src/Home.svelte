<script>
	import { Link } from "svelte-routing";
	import { blur, slide } from "svelte/transition";
	import { onMount } from "svelte";

	let ready = false;
	onMount(() => {
		setTimeout(() => (ready = true), 200);
	});

  export let dark;

  $: welcomeMessage = dark ? "Hey there." : "Hello there.";
</script>

<main id="home" class="relative bg-gray-50 dark:bg-gray-700 h-screen flex">
	<!-- <div class="background absolute bg-gray-100" /> -->

	<!-- <section class="min-h-screen flex"> -->
	<section class="">
		<div class="bg-purple-400 w-7 h-1.5 lg:w-12 lg:h-3 ml-0.5 mb-2" />
		{#if ready}
			<h1
				transition:blur={{}}
				class="text-5xl lg:text-7xl font-semibold text-gray-600 dark:text-white mb-2"
			>
				{welcomeMessage}
			</h1>
			<p transition:slide={{}} class="lg:text-2xl mb-10 text-gray-500 dark:text-gray-300 ml-1">
				I am Ng Bob Shoaun. I write good code with good designs.
			</p>
		{/if}
		<!-- <a
				type="button"
				href="/images/resume.pdf"
				target="_blank"
				class="ml-1 py-2 px-4 border-green-400 border bg-green-200 hover:bg-green-300 rounded-none mr-3">
				<p class="text-gray-700 font-mono">View resume</p>
      </a> -->
		<div class="">
			<Link
				to="resume"
				class="px-4 py-2 mb-3 lg:ml-1 inline-block leading-4 border-green-400 border bg-green-200 hover:bg-green-300 rounded-none mr-3 text-gray-700 font-mono"
				noroute
			>
				<p class="text-gray-700 font-bold font-mono">View resume</p></Link
			>
			<a
				type="button"
				href="#contact"
				class="px-4 py-2 inline-block border-blue-400 border bg-blue-200 hover:bg-blue-300 rounded-none"
				><p class="text-gray-700 font-bold font-mono leading-4">Let's talk</p></a
			>
		</div>
	</section>
	<!-- </section> -->
</main>

<style>
	.background {
		transform: rotate(45deg);
		height: 2000px;
		width: 250px;
		right: 500px;
		top: -500px;
		z-index: -1;
	}
</style>
