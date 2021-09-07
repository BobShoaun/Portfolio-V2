<script>
  import { Link } from "svelte-routing";
  import Footer from "./Footer.svelte";
  import marked from "marked";

  import { onMount } from "svelte";
  onMount(mounted);

  let article = "";

  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) =>
    `<a target="_blank" href="${href}" title="${title}">${text}</a>`;

  async function mounted() {
    const response = await fetch("how-i-made-my-own-cryptocurrency.md");
    article = await response.text();
  }
</script>

<main class="bg-gray-50 dark:bg-gray-800 pt-32 pb-24 px-5 lg:px-10 flex gap-5">
  <div class="sticky top-16 text-gray-100 hidden lg:block ml-auto self-start">
    <a class="article-content-link" href="#what-is-bobcoin">What is Bobcoin?</a>
    <a class="article-content-link" href="#what-is-it-used-for"
      >What is it used for?</a
    >
    <a class="article-content-link" href="#how-is-bobcoin-decentralized"
      >How is bobcoin decentralized?</a
    >
    <a class="article-content-link" href="#the-blockchain">The blockchain</a>
    <a class="article-content-link" href="#the-bobcoin-address"
      >The bobcoin address</a
    >
    <a class="article-content-link" href="#transactions-and-utxos"
      >Transactions and UTXOs</a
    >
    <a class="article-content-link" href="#bobcoin-wallet">Bobcoin wallet</a>
    <a class="article-content-link" href="#coin-economics">Coin economics</a>
    <a class="article-content-link" href="#scalability">Scalability</a>
    <a class="article-content-link" href="#summary--conclusion"
      >Summary / Conclusion</a
    >
  </div>
  <article class="max-w-3xl mx-auto text-gray-700 dark:text-white">
    <h1 class="text-3xl lg:text-5xl font-bold mb-4">
      How I made my own cryptocurrency
    </h1>
    <p class="text-gray-500 dark:text-gray-300 mb-7">
      by Ng Bob Shoaun &nbsp;∙&nbsp; 2 August 2021 &nbsp;∙&nbsp; 5 minute read
    </p>
    <hr class="mb-5 bg-gray-300 dark:bg-gray-800" />

    <Link
      to="/"
      class="px-4 py-2 inline-block leading-4 border-green-400 border bg-green-200 hover:bg-green-300 rounded-none mr-3 text-gray-700 font-mono"
    >
      <p class="text-gray-700 font-bold font-mono">
        <i class="fas fa-arrow-left mr-3" />Go Back
      </p></Link
    >

    <div class="article-content">
      {@html marked(article, { renderer: renderer })}
    </div>
  </article>
</main>
<Footer />

<style>
</style>
