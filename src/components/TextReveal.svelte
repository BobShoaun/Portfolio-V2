<script>
  export let text = "";
  export let delay = 200;
  export let once = false;
  import { onMount } from "svelte";

  let textReveal;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (once) {
          if (entry.isIntersecting) entry.target.classList.add("reveal");
        } else entry.target.classList.toggle("reveal", entry.isIntersecting);
      });
    });
    observer.observe(textReveal);
  });
</script>

<div bind:this={textReveal} class="relative inline-block">
  <h1 id="text" class="opacity-0" style="animation-delay: {delay}ms">
    {text}
  </h1>
  <div class="absolute overflow-hidden inset-0">
    <div
      id="cover"
      class="absolute inset-0 bg-current transform-gpu -translate-x-[101%]"
      style="animation-delay: {delay}ms"
    />
  </div>
</div>
