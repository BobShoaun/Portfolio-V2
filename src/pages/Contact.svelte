<script>
  import { copyToClipboard } from "../helper";
  import SectionNumber from "../components/SectionNumber.svelte";
  import TextReveal from "../components/TextReveal.svelte";

  async function submitForm() {
    let contactForm = document.querySelector("form");

    const formData = new FormData(contactForm);
    let res = await fetch(contactForm.getAttribute("action"), {
      method: "POST",
      headers: {
        Accept: "application/x-www-form-urlencoded;charset=UTF-8",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams(formData).toString(),
    });

    if (res.ok) {
      alert(
        "Thank you for your message! I will get back to you as soon as I can."
      );
      contactForm.reset();
    } else {
      alert(
        "Uh oh... message failed to send. You can email me directly at ngbobshoaun2000@gmail.com"
      );
    }
  }
</script>

<section
  id="contact"
  class="main overflow-hidden relative bg-gray-100 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900"
>
  <div
    data-aos="slide-down"
    data-aos-delay="900"
    data-aos-duration="700"
    class="absolute background left-0 w-2/5 h-full moving-gradient-1"
  />

  <SectionNumber
    right
    number="110"
    shaftClasses="bg-gray-700 dark:bg-gray-50"
    textClasses="text-gray-700 dark:text-gray-50"
  />

  <section class="section relative">
    <div
      class="bg-gray-50 dark:bg-gray-900 shadow-2xl px-5 md:px-7 py-10 lg:px-10 lg:py-14 mb-16"
    >
      <div>
        <div
          data-aos="flip-up"
          data-aos-delay="600"
          data-aos-duration="700"
          class="bg-purple-400 dark:bg-purple-300 shadow-purple-300/60 shadow-lg w-8 h-1.5 lg:w-10 lg:h-2 ml-0.5 mb-6"
        />
      </div>
      <div class="lg:flex gap-10">
        <div class="basis-2/5">
          <h2
            class="text-gray-700 dark:text-gray-200 inline-block tracking-wide text-4xl md:text-5xl lg:text-6xl font-black mb-2"
          >
            <TextReveal text="CONTACT ME" />
          </h2>

          <h5 data-aos="fade" class="text-gray-500 dark:text-gray-300 mb-7">
            Shoot me a message and I will get back to you as soon as I can. My
            emails are
            <button
              class="text-gray-700 dark:text-gray-100 underline"
              on:click={() => copyToClipboard("ngbobshoaun2000@gmail.com")}
              >ngbobshoaun2000@gmail.com</button
            >
            and
            <button
              class="text-gray-700 dark:text-gray-100 underline"
              on:click={() => copyToClipboard("bobshoaun.ng@mail.utoronto.ca")}
              >bobshoaun.ng@mail.utoronto.ca</button
            >
          </h5>
        </div>

        <form
          aria-label="contact form"
          data-aos="fade"
          data-aos-duration="700"
          data-aos-delay="200"
          on:submit|preventDefault={submitForm}
          name="contact"
          action="action"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="basis-3/5"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label for="bot-field" class="hidden"
            >Don’t fill this out if you’re human: <input
              name="bot-field"
            /></label
          >
          <div class="flex flex-col md:flex-row lg:flex-col">
            <input
              name="name"
              class="w-full mb-3 md:mb-4 mr-4 px-4 py-2 bg-gray-300 dark:bg-gray-600 dark:text-gray-50"
              type="text"
              placeholder="Your name"
              required
            />
            <input
              name="email"
              class="w-full mb-3 md:mb-4 px-4 py-2 bg-gray-300 dark:bg-gray-600 dark:text-gray-50"
              type="email"
              placeholder="Your email"
              required
            />
          </div>

          <textarea
            name="message"
            class="w-full px-4 py-2 mb-4 min-h-1/4 bg-gray-200 dark:bg-gray-700 dark:text-gray-50"
            placeholder="Tell me what you think!"
            rows="6"
            required
          />
          <button
            type="submit"
            class="transition-colors bg-purple-200 shadow-purple-300/20 shadow-lg rounded-sm border border-purple-400 hover:bg-purple-300 text-gray-700 py-1 px-4 flex items-center gap-3 ml-auto"
            ><i class="far fa-paper-plane text-xs" />
            <p class="font-semibold font-mono">Send</p>
          </button>
        </form>
      </div>
    </div>
  </section>

  <button
    title="Back to top"
    aria-label="Back to top"
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-duration="700"
    on:click={() => window.scrollTo(0, 0)}
    class="text-xl lg:text-3xl text-gray-700 dark:text-white w-14 mx-auto text-center absolute bottom-20 right-0 left-0"
  >
    <i class="hover-vertical fas fa-angle-up" />
  </button>
</section>

<style>
</style>
