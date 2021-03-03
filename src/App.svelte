<script>
	import Navbar from "./Navbar.svelte";
	import Hero from "./Hero.svelte";
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

	// On page load or when changing themes, best to add inline in `head` to avoid FOUC
	let dark = localStorage.theme === "dark";
</script>

<main class="{dark ? "dark" : ""} flex flex-col" >
	<Router {url}>
		<!-- <nav>
      <Link to="/" noroute>Home</Link>
      <Link to="about" noroute>About</Link>
      <Link to="resume" noroute>Resume</Link>
    </nav> -->
    <Route path="/about">
      <About />
    </Route>

		<Route path="/">
			<Navbar bind:dark />
			<Hero bind:dark/>
			<About />
			<WebDev />
			<Designs />
			<GameDev />
			<Contact />
			<Footer />
		</Route>
   
		<!-- <Route path="about" component={About} />
		<Route path="About" component={About} /> -->
    <Route path="resume">
      <Navbar bind:dark />
      <Resume />
    </Route>
    <Route path="Resume">
      <Navbar bind:dark />
      <Resume />
    </Route>
		<!-- <Route path="resume" component={Resume} /> -->
		<!-- <Route path="Resume" component={Resume} /> -->
		<Route path="Facts" component={FunFacts} />
		<Route path="facts" component={FunFacts} />
	</Router>
</main>

<style>
  	/* @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap");

    * {
      font-family: "Open Sans", sans-serif;
    } */
</style>
