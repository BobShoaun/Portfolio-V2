<script>
  import Navbar from "./Navbar.svelte";
  import Home from "./Home.svelte";
  import About from "./About.svelte";
  import WebDev from "./WebDev.svelte";

  export let name;
</script>

<style>
  /* * {
    margin: 0;
    padding: 0;
  } */
  /* main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  } */

  /* h1 {
    color: lightgreen;
    text-transform: lowercase;
    font-size: 4em;
    font-weight: 100;
  } */

  /* @media (min-width: 640px) {
    main {
      max-width: none;
    }
  } */
</style>

<main class="">
  <Navbar />
  <div class="lg:p-20 p-5 lg:mx-20 h-full space-y-52">
    <Home />
    <About />
    <WebDev />
  </div>
</main>
