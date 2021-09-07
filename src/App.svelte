<script>
  import Navbar from "./components/Navbar.svelte";
  import Hero from "./pages/Hero.svelte";
  import About from "./pages/About.svelte";
  import Experience from "./pages/Experience.svelte";
  import WebDev from "./pages/WebDev.svelte";
  // import Designs from "./pages/Designs.svelte";
  import GameDev from "./pages/GameDev.svelte";
  import Contact from "./pages/Contact.svelte";
  import Footer from "./pages/Footer.svelte";
  import Resume from "./pages/Resume.svelte";
  import FunFacts from "./pages/FunFacts.svelte";
  import Article from "./pages/Article.svelte";

  import { Router, Route } from "svelte-routing";
  export let url = ""; //This property is necessary declare to avoid ignore the Router

  // first time visitors
  if (!("theme" in localStorage)) {
    // localStorage.theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    // 	? "dark"
    // 	: "light";

    localStorage.theme = "dark"; // force dark theme cuz its nicer
  }

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  let dark = localStorage.theme === "dark";
</script>

<main class="{dark ? 'dark' : ''} flex flex-col">
  <Navbar bind:dark />
  <Router {url}>
    <Route path="/">
      <Hero bind:dark />
      <About />
      <Experience />
      <WebDev />
      <!-- <Designs /> -->
      <GameDev />
      <Contact />
      <Footer />
    </Route>

    <Route path="resume" component={Resume} />
    <Route path="Resume" component={Resume} />
    <Route path="how-i-made-my-own-cryptocurrency" component={Article} />

    <!-- <Route path="articles/:title" component={Article} /> -->
    <!-- <Route path="Articles/:title" component={Article} /> -->

    <Route path="Facts" component={FunFacts} />
    <Route path="facts" component={FunFacts} />
  </Router>
</main>

<style>
</style>
