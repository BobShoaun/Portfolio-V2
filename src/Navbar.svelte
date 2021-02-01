<script>
  import { slide } from 'svelte/transition';
	let open = false;
</script>

<header class="flex items-center justify-between px-10 py-5 bg-white shadow-md fixed w-full z-50">
	<div class="logo font-semibold">
		<div class="bg-purple-400 w-4 h-4 mr-3 inline-block" />
		<a href="#home" class="hover:no-underline inline-block"
			><p class="text-gray-800">Ng Bob Shoaun</p></a
		>
	</div>
	<nav class="hidden md:flex links justify-between items-center space-x-10">
		<a href="#about"><p class="text-gray-800 font-light text-lg">About</p></a>
		<a href="#web-development"><p class="text-gray-800 font-light text-lg">Web dev</p></a>
		<a href="#graphic-design"><p class="text-gray-800 font-light text-lg">Design</p></a>
		<a href="#game-development"><p class="text-gray-800 font-light text-lg">Game dev</p></a>
		<a href="#contact"><p class="text-gray-800 font-light text-lg">Contact</p></a>
	</nav>
	<button class="md:hidden border-none">
		<button on:click={() => (open = !open)} class="border-none text-lg"><i class="fas fa-bars" /></button>

		{#if open}
			<div
				on:click={() => (open = false)}
				class="bg-transparent w-full h-full fixed top-0 left-0"
			/>
			<div transition:slide={{duration: 500}} class="fixed top-0 left-0 shadow-2xl w-full bg-gray-700 pt-5 pb-5">
				<button
					on:click={() => (open = false)}
					class="text-right text-lg text-gray-50 float-right bg-gray-800 px-4 py-2 mb-4 mr-4 border-none"
					><i class="fas fa-times" /></button
				>
				<div class="clear-right" />
				<nav class="">
					<a on:click={() => (open = false)} class="block mb-2 bg-gray-800 p-5" href="#about">
						<p class="text-gray-50 font-light text-xl text-left">
							<i class="far fa-smile-wink mr-3" />About Me
						</p>
					</a>
					<a
						on:click={() => (open = false)}
						class="block mb-2  bg-gray-800 p-5"
						href="#web-development"
						><p class="text-gray-50 font-light text-xl text-left">
							<i class="fas fa-code mr-3" />Web Development
						</p></a
					>
					<a
						on:click={() => (open = false)}
						class="block mb-2  bg-gray-800 p-5"
						href="#graphic-design"
						><p class="text-gray-50 font-light text-xl text-left">
							<i class="fas fa-vector-square mr-3" />Graphic Design
						</p></a
					>
					<a
						on:click={() => (open = false)}
						class="block mb-2  bg-gray-800 p-5"
						href="#game-development"
						><p class="text-gray-50 font-light text-xl text-left">
							<i class="fas fa-gamepad mr-3" />Game Development
						</p></a
					>
					<a on:click={() => (open = false)} class="block mb-2  bg-gray-800 p-5" href="#contact"
						><p class="text-gray-50 font-light text-xl text-left">
							<i class="far fa-paper-plane mr-3" />Contact Me
						</p></a
					>
				</nav>
			</div>
		{/if}
	</button>
</header>
