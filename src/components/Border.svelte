<script>
  export let type = 0;
</script>

<main>
  {#if type === 1}
    <div
      class="bg-gradient-to-br from-purple-400 to-red-300 shadow-3xl overflow-hidden rounded-sm"
    >
      <slot />
    </div>
  {:else if type === 2}
    <div
      class="bg-gradient-to-br from-purple-300 to-red-200 shadow-3xl overflow-hidden rounded-sm"
    >
      <slot />
    </div>
  {:else}
    <div
      class="bg-gradient-to-br from-green-300 to-blue-300 shadow-3xl overflow-hidden rounded-sm"
    >
      <slot />
    </div>
  {/if}
</main>
