<script>
  import { Link } from "svelte-routing";
  import marked from "marked";

  import { onMount, afterUpdate } from "svelte";
  onMount(mounted);

  let article = "";
  let articleLinks = [];

  async function mounted() {
    const response = await fetch("/how-i-made-my-own-cryptocurrency.md");
    const articleMD = await response.text();

    const renderer = new marked.Renderer();
    renderer.link = (href, title, text) =>
      `<a target="_blank" href="${href}" title="${title}">${text}</a>`;

    article = marked(articleMD, { renderer });
  }

  afterUpdate(() => {
    const headings = document.querySelectorAll("h2");
    articleLinks = [...headings].map((heading) => ({
      label: heading.innerText,
      link: `#${heading.id}`,
    }));
  });
</script>

<main class="bg-gray-50 dark:bg-gray-800 pt-32 pb-24 px-5 lg:px-10 flex gap-5">
  <div class="sticky top-16 text-gray-100 hidden lg:block ml-auto self-start">
    {#each articleLinks as articleLink}
      <a class="article-content-link" href={articleLink.link}
        >{articleLink.label}</a
      >
    {/each}
  </div>
  <article class="max-w-3xl mx-auto text-gray-700 dark:text-white">
    <h1 class="text-3xl lg:text-5xl font-bold mb-4">
      How I Made My Own Cryptocurrency
    </h1>
    <p class="text-gray-500 dark:text-gray-300 mb-3">
      by Ng Bob Shoaun &nbsp;∙&nbsp; 2 August 2021 &nbsp;∙&nbsp; 8 minute read
    </p>
    <hr class="mb-5 border-gray-400 " />

    <Link
      to="/"
      class="px-4 py-2 inline-block leading-4 border-green-400 border bg-green-200 hover:bg-green-300 rounded-none mr-3 text-gray-700 font-mono"
    >
      <p class="text-gray-700 font-bold font-mono">
        <i class="fas fa-arrow-left mr-3" />Go Back
      </p></Link
    >

    <div class="article-content">
      {@html article}
    </div>
  </article>
</main>

<style>
</style>
