<script>
  import Navbar from "./Navbar.svelte";
  import Home from "./Home.svelte";
  import About from "./About.svelte";
  import WebDev from "./WebDev.svelte";
  import Designs from "./Designs.svelte";
  import GameDev from "./GameDev.svelte";
  import Contact from "./Contact.svelte";
  import Footer from "./Footer.svelte";

  import { Router, Route, Link } from "svelte-routing";
  export let url = ""; //This property is necessary declare to avoid ignore the Router
</script>

<Router {url}>
  <!-- <nav>
     <Link to="/" noroute>Home</Link>
     <Link to="about" noroute>About</Link>
   </nav> -->
  <div>
    <!-- <Route path="about" component="{About}" />  -->
    <!--for now the router just support case sensitive,
         one workaround colud be add two time the route
         Example.
        <Route path="About" component="{About}" /> 
     -->
    <!-- <Home /> -->
  </div>
</Router>

<main class="">
  <Navbar />
  <Home />
  <About />
  <WebDev />
  <Designs />
  <GameDev />
  <Contact />
  <Footer />
</main>
