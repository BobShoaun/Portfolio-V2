<script>
  import Navbar from "./components/Navbar.svelte";
  import Hero from "./pages/Hero.svelte";
  import About from "./pages/About.svelte";
  import Experience from "./pages/Experience.svelte";
  import WebDev from "./pages/WebDev.svelte";
  import Designs from "./pages/Designs.svelte";
  import GameDev from "./pages/GameDev.svelte";
  import Contact from "./pages/Contact.svelte";
  import Footer from "./components/Footer.svelte";
  import Resume from "./pages/Resume.svelte";
  import FunFacts from "./pages/FunFacts.svelte";
  import Article from "./pages/Article.svelte";

  import { Router, Route } from "svelte-routing";
  export let url = ""; //This property is necessary declare to avoid ignore the Router

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  let theme = "dark";

  const setTheme = (newTheme) => {
    theme = newTheme;
    localStorage.theme = newTheme;
    document.documentElement.style.setProperty("--theme", newTheme);
  };

  if ("theme" in localStorage) setTheme(localStorage.theme);
  else {
    // new visitor
    // localStorage.theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    // 	? "dark"
    // 	: "light";
    setTheme("dark"); // force dark theme cuz its nicer
  }

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
</script>

<main class="{theme === 'dark' ? 'dark' : ''} flex flex-col">
  <Navbar bind:theme on:toggleTheme={toggleTheme} />
  <Router {url}>
    <Route path="/">
      <Hero bind:theme />
      <About />
      <Experience />
      <WebDev />
      <GameDev />
      <Designs />
      <Contact />
    </Route>

    <Route path="resume" component={Resume} />
    <Route path="Resume" component={Resume} />

    <!-- <Route path="hello">
      <Route path="how-i-made-my-own-cryptocurrency" component={Article} />
    </Route> -->
    <Route
      path="articles/how-i-made-my-own-cryptocurrency"
      component={Article}
    />

    <!-- <Route path="articles/:title" component={Article} /> -->
    <!-- <Route path="Articles/:title" component={Article} /> -->

    <Route path="Facts" component={FunFacts} />
    <Route path="facts" component={FunFacts} />
  </Router>
  <Footer />
</main>

<style>
</style>
