<script>
  import Hero from "./pages/Hero.svelte";
  import About from "./pages/About.svelte";
  import Experience from "./pages/Experience.svelte";
  import WebDev from "./pages/WebDev.svelte";
  import Designs from "./pages/Designs.svelte";
  import GameDev from "./pages/GameDev.svelte";
  import Contact from "./pages/Contact.svelte";

  export let theme;
</script>

<main class="snap-y">
  <Hero bind:theme />
  <About />
  <Experience />
  <WebDev />
  <GameDev />
  <Designs />
  <Contact />
</main>
