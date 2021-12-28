<script>
  import { copyToClipboard } from "../helper";
</script>

<main
  class="main shadow-2xl z-50 bg-gray-50 dark:bg-gray-700 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900"
>
  <section class="py-32">
    <div data-aos="fade-down" class="text-center space-x-8 mb-8">
      <a href="https://github.com/BobShoaun" target="_blank"
        ><i class="text-gray-700 dark:text-gray-50 fab fa-github fa-lg" /></a
      >
      <a href="https://www.linkedin.com/in/ngbobshoaun/" target="_blank">
        <i
          class="text-gray-700 dark:text-gray-50 fab fa-linkedin-in fa-lg"
        /></a
      >

      <span
        on:click={() => copyToClipboard("ngbobshoaun2000@gmail.com")}
        class="cursor-pointer"
      >
        <i class="text-gray-700 dark:text-gray-50 far fa-envelope fa-lg" />
      </span>

      <!-- <a href="https://www.instagram.com/n.bob.s/" target="_blank"
        ><i class="text-gray-800 dark:text-gray-50 fab fa-instagram fa-lg" /></a
      > -->

      <a href="https://codepen.io/bobshoaun" target="_blank"
        ><i class="text-gray-700 dark:text-gray-50 fab fa-codepen fa-lg" /></a
      >
    </div>

    <p
      data-aos="-fade-up"
      class="text-sm font-semibold font-mono text-center text-gray-700 dark:text-gray-50"
    >
      Created by Ng Bob Shoaun. &copy; 2021
    </p>
  </section>
</main>
