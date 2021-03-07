<script>
	export let secondary = false;
</script>

<main>
	{#if secondary}
		<div class="bg-gradient-to-br from-purple-400 to-red-400 rounded-sm shadow-3xl">
			<slot />
		</div>
	{:else}
		<div class="bg-gradient-to-br from-green-300 to-blue-300 rounded-sm shadow-3xl">
			<slot />
		</div>
	{/if}
</main>
