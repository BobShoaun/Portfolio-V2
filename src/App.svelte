<script>
	import Navbar from "./Navbar.svelte";
	import Home from "./Home.svelte";
	import About from "./About.svelte";
	import WebDev from "./WebDev.svelte";
	import Designs from "./Designs.svelte";
	import GameDev from "./GameDev.svelte";
	import Contact from "./Contact.svelte";
	import Footer from "./Footer.svelte";
	import Resume from "./Resume.svelte";
	import FunFacts from "./FunFacts.svelte";

	import { Router, Route } from "svelte-routing";
	export let url = ""; //This property is necessary declare to avoid ignore the Router

	// first time visitors
	if (!("theme" in localStorage)) {
		localStorage.theme = window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	}

  // document.querySelector('#remove-me').remove();

	// On page load or when changing themes, best to add inline in `head` to avoid FOUC
	let dark = localStorage.theme === "dark";
</script>

<main class={dark ? "dark" : ""}>
	<Router {url}>
		<!-- <nav>
      <Link to="/" noroute>Home</Link>
      <Link to="about" noroute>About</Link>
      <Link to="resume" noroute>Resume</Link>
    </nav> -->
		<Route path="/">
			<Navbar bind:dark />
			<Home />
			<About />
			<WebDev />
			<Designs />
			<GameDev />
			<Contact />
			<Footer />
		</Route>
		<Route path="about" component={About} />
		<Route path="About" component={About} />
		<Route path="resume" component={Resume} />
		<Route path="Resume" component={Resume} />
		<Route path="Facts" component={FunFacts} />
		<Route path="facts" component={FunFacts} />
	</Router>
</main>
