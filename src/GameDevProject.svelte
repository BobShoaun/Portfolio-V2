<script>
	import Image from "./Image.svelte";
	import Border from "./Border.svelte";
	export let image = "images/pathforge.png";
	export let video = null;
	export let name = "awesome website";
	export let collaborators = "with some people";
	export let description = "none.";
	export let technologies = ["svelte", "tailwind css"];
	export let github = null;
	export let website = null;
</script>

<main class="py-16">
	<div data-aos="fade-right" class="mb-10">
		{#if video}
    <Border>

			<video autoplay loop muted playsinline src={video} class="p-4" />
    </Border>
		{:else}
			<Border>
        <img src={image} class="p-4 rounded-2xl" alt={name} />
      </Border>
			<!-- <Image src={image} alt={name} /> -->
			<!-- <img src={image} class="object-contain" alt={name} /> -->
		{/if}
	</div>

	<div class="">
		<h1 data-aos="fade-left" class="font-bold text-2xl lg:text-3xl dark:text-gray-50">{name}</h1>
		<p
			data-aos="fade-left"
			data-aos-delay="100"
			class="font-bold font-mono text-sm text-purple-700 mb-3 dark:text-purple-400"
		>
			{collaborators}
		</p>
		<p
			data-aos="fade-left"
			data-aos-delay="200"
			class="text-md mb-3 text-gray-700 dark:text-gray-300"
		>
			{description}
		</p>
		<p
			data-aos="fade-left"
			data-aos-delay="300"
			class="text-md font-semibold font-mono mb-4 dark:text-gray-50"
		>
			{technologies.join(" // ")}
		</p>
		{#if github || website}
			<div data-aos="fade-left" data-aos-delay="400" class="float-right">
				{#if github}
					<a href={github} target="_blank"
						><i class="text-gray-800 dark:text-gray-50 fab fa-lg fa-github mr-4" /></a
					>
				{/if}
				{#if website}
					<a href={website} target="_blank"
						><i class="text-gray-800 dark:text-gray-50 fas fa-lg fa-external-link-alt" /></a
					>
				{/if}
			</div>
			<div class="clear-right" />
		{/if}
	</div>
</main>
