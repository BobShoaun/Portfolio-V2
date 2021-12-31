<script>
  import Navbar from "./components/Navbar.svelte";
  import Main from "./pages/Main.svelte";
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

<div class="{theme === 'dark' ? 'dark' : ''} flex flex-col">
  <Navbar bind:theme on:toggleTheme={toggleTheme} />
  <Router {url}>
    <Route path="/">
      <Main bind:theme />
    </Route>

    <Route path="resume" component={Resume} />
    <Route path="Resume" component={Resume} />

    <Route
      path="articles/how-i-made-my-own-cryptocurrency"
      component={Article}
    />

    <Route path="Facts" component={FunFacts} />
    <Route path="facts" component={FunFacts} />
  </Router>
  <Footer />
</div>
