<script>
  import { slide } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
  let open = false;
  export let dark = false;

  function toggleTheme() {
    dark = !dark;
    if (dark) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  }

</script>

<header class="flex items-center justify-between px-10 py-5 bg-white dark:bg-gray-900 shadow-md fixed w-full z-50">
	<div class="logo font-semibold">
		<div class="bg-purple-400 w-4 h-4 mr-3 inline-block" />
		<a href="#home" class="hover:no-underline inline-block"
			><p class="text-gray-800 dark:text-gray-50">Ng Bob Shoaun</p></a
		>
	</div>
	<nav class="hidden lg:flex links justify-between items-center space-x-10">
		<a href="#about"><p class="text-gray-800 dark:text-gray-50 font-light text-lg">About</p></a>
		<a href="#web-development"><p class="text-gray-800 dark:text-gray-50 font-light text-lg">Web dev</p></a>
		<a href="#graphic-design"><p class="text-gray-800 dark:text-gray-50 font-light text-lg">Design</p></a>
		<a href="#game-development"><p class="text-gray-800 dark:text-gray-50 font-light text-lg">Game dev</p></a>
		<a href="#contact"><p class="text-gray-800 dark:text-gray-50 font-light text-lg">Contact</p></a>
    <button on:click={toggleTheme} class="border-gray-500 border-2 py-1 px-3 dark:text-gray-50"><i class="{dark ? 'fa fa-sun' : 'far fa-moon'} mr-2"></i>{dark ? 'Light' : 'Dark'}</button>
  </nav>
  

	<button class="lg:hidden border-none">
		<button on:click={() => (open = !open)} class="border-none text-lg dark:text-white"><i class="fas fa-bars" /></button>

		{#if open}
			<div
				on:click={() => (open = false)}
				class="bg-transparent w-full h-full fixed top-0 left-0"
			/>
			<div transition:slide={{duration: 500}} class="fixed top-0 left-0 shadow-2xl w-full bg-white dark:bg-gray-900 pt-4 pb-6">
				<button
					on:click={() => (open = false)}
					class="text-right text-lg text-gray-800 dark:text-gray-50 float-right bg-gray-50 dark:bg-gray-800 px-4 py-2 mb-4 mr-4 border-none"
					><i class="fas fa-times" /></button
				>
				<div class="clear-right" />
				<nav class="py-3 mb-5">
					<a on:click={() => (open = false)} class="block mb-2  bg-gray-50 dark:bg-gray-800 p-5" href="#about">
						<p class="text-gray-800 dark:text-gray-50 font-light text-xl text-left">
							<i class="far fa-smile-wink mr-3" />About Me
						</p>
					</a>
					<a
						on:click={() => (open = false)}
						class="block mb-2  bg-gray-50 dark:bg-gray-800 p-5"
						href="#web-development"
						><p class="text-gray-800 dark:text-gray-50 font-light text-xl text-left">
							<i class="fas fa-code mr-3" />Web Development
						</p></a
					>
					<a
						on:click={() => (open = false)}
						class="block mb-2   bg-gray-50 dark:bg-gray-800 p-5"
						href="#graphic-design"
						><p class="text-gray-800 dark:text-gray-50 font-light text-xl text-left">
							<i class="fas fa-vector-square mr-3" />Graphic Design
						</p></a
					>
					<a
						on:click={() => (open = false)}
						class="block mb-2   bg-gray-50 dark:bg-gray-800 p-5"
						href="#game-development"
						><p class="text-gray-800 dark:text-gray-50 font-light text-xl text-left">
							<i class="fas fa-gamepad mr-3" />Game Development
						</p></a
					>
					<a on:click={() => (open = false)} class="block  bg-gray-50 dark:bg-gray-800 p-5" href="#contact"
						><p class="text-gray-800 dark:text-gray-50 font-light text-xl text-left">
							<i class="far fa-paper-plane mr-3" />Contact Me
						</p></a
          >
          
				</nav>
        <button on:click={toggleTheme} class="border-gray-500 border-2 py-2 px-4 text-xl dark:text-gray-50"><i class="{dark ? 'fa fa-sun' : 'far fa-moon'} mr-2"></i>{dark ? 'Light' : 'Dark'}</button>
			</div>
		{/if}
	</button>
</header>
