<script>
  import { copyToClipboard } from "../helper";

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

<main
  id="contact"
  class="main relative bg-gray-100 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900"
>
  <div
    data-aos="slide-down"
    data-aos-delay="900"
    data-aos-duration="700"
    class="absolute background left-0 w-2/5 h-full moving-gradient-1"
  />

  <!-- <div
    data-aos="slide-down"
    data-aos-offset="200"
    class="hidden lg:block absolute left-14 top-0"
  >
    <div class="w-5 h-28 bg-gray-50 dark:bg-gray-800 mb-4" />
    <p
      class="text-gray-100 dark:text-gray-800 font-mono font-bold text-4xl left-0 absolute"
    >
      101
    </p>
  </div> -->

  <div
    data-aos="slide-down"
    data-aos-offset="200"
    class="hidden lg:block absolute right-14 top-0"
  >
    <div class="w-5 h-28 bg-gray-800 dark:bg-gray-50 mb-4" />
    <p
      class="text-gray-800 dark:text-gray-50 font-mono font-bold text-4xl right-0 absolute"
    >
      110
    </p>
  </div>

  <section class="section relative">
    <div
      class="bg-gray-50 dark:bg-gray-900 shadow-2xl px-5 md:px-7 py-10 lg:px-10 lg:py-14 mb-16"
    >
      <div>
        <div
          data-aos="flip-up"
          data-aos-delay="600"
          data-aos-duration="700"
          class="bg-purple-400 dark:bg-purple-300 shadow-purple-300/60 shadow-lg w-8 h-1.5 lg:w-10 lg:h-2 ml-0.5 mb-8"
        />
      </div>
      <div class="lg:flex gap-10">
        <div class="basis-2/5">
          <h2 data-aos="fade" class="title mb-4 font-mono">Contact(Me)</h2>
          <h5
            data-aos="fade"
            class="text-gray-500 dark:text-gray-300 mb-7 lg:mb-10"
          >
            Shoot me a message and I will get back to you as soon as I can. My
            emails are
            <span
              class="cursor-pointer text-gray-700 dark:text-gray-100 underline"
              on:click={() => copyToClipboard("ngbobshoaun2000@gmail.com")}
              >ngbobshoaun2000@gmail.com</span
            >
            and
            <span
              class="cursor-pointer text-gray-700 dark:text-gray-100 underline"
              on:click={() => copyToClipboard("bobshoaun.ng@mail.utoronto.ca")}
              >bobshoaun.ng@mail.utoronto.ca</span
            >
          </h5>
        </div>

        <form
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
          <p class="hidden">
            <label
              >Don’t fill this out if you’re human: <input
                name="bot-field"
              /></label
            >
          </p>
          <div class="flex flex-col md:flex-row lg:flex-col">
            <input
              name="name"
              class="w-full mb-3 md:mb-4 mr-4 px-4 py-2 bg-gray-300 dark:bg-gray-600 dark:text-gray-50 focus:outline-none"
              type="text"
              placeholder="Your name"
              required
            />
            <input
              name="email"
              class="w-full mb-3 md:mb-4 px-4 py-2 bg-gray-300 dark:bg-gray-600 dark:text-gray-50 focus:outline-none"
              type="text"
              placeholder="Your email"
              required
            />
          </div>

          <textarea
            name="message"
            class="w-full px-4 py-2 mb-4 min-h-1/4 bg-gray-200 dark:bg-gray-700 dark:text-gray-50 focus:outline-none"
            placeholder="Tell me what you think!"
            rows="6"
            required
          />
          <button
            type="submit"
            class="transition-colors bg-purple-200 shadow-purple-300/20 shadow-lg rounded-sm border border-purple-400 hover:bg-purple-300 text-gray-700 py-1 px-4 flex items-center gap-2 ml-auto"
            ><i class="far fa-paper-plane text-xs" />
            <p class="font-semibold font-mono">Send</p>
          </button>
        </form>
      </div>
    </div>
  </section>
  <p
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-duration="700"
    on:click={() => window.scrollTo(0, 0)}
    class="text-xl lg:text-3xl text-gray-700 dark:text-white cursor-pointer text-center absolute bottom-20 right-0 left-0"
  >
    <i class="hover-vertical fas fa-angle-up" />
  </p>
</main>

<style>
</style>
