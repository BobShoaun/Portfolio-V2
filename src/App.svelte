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

	import { Router, Route, Link } from "svelte-routing";
	export let url = ""; //This property is necessary declare to avoid ignore the Router
</script>

<Router {url}>
	<nav>
		<Link to="/" noroute>Home</Link>
		<Link to="about" noroute>About</Link>
		<Link to="resume" noroute>Resume</Link>
	</nav>
	<Route path="/">
		<Navbar />
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
</Router>
