<script>
	import { copyEmail } from "./helper.svelte";

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
			alert("Message sent!");
			contactForm.reset();
		} else {
			alert("Message failed to send...");
		}
	}
</script>

<main id="contact" class="main relative bg-gray-100 dark:bg-gray-800">
	<section class="section">
		<h2 data-aos="zoom-in-right" class="title mb-2 heading">Contact me</h2>
		<h5 data-aos="zoom-in-right" class="subtitle mb-16">
			Shoot me a message and I will get back to you as soon as I can. My email is:
			<span class="cursor-pointer" on:click={copyEmail}>ngbobshoaun2000@gmail.com</span>.
		</h5>
		<form
			data-aos="zoom-in-right"
			on:submit|preventDefault={submitForm}
			name="contact"
			action="action"
			method="POST"
			data-netlify="true"
			netlify-honeypot="bot-field"
			class=""
		>
			<input type="hidden" name="form-name" value="contact" />
			<p class="hidden">
				<label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
			</p>
			<div class="flex">
				<input
					name="name"
					class="w-full mb-4 mr-4 px-4 py-2 dark:bg-gray-600 dark:text-gray-50"
					type="text"
					placeholder="Name..."
					required
				/>
				<input
					name="email"
					class="w-full mb-4 px-4 py-2 dark:bg-gray-600 dark:text-gray-50"
					type="text"
					placeholder="Email..."
					required
				/>
			</div>

			<textarea
				name="message"
				class="w-full px-4 py-2 mb-3 min-h-1/4 dark:bg-gray-600 dark:text-gray-50"
				placeholder="Message..."
				rows="10"
				required
			/>
			<button
				data-aos="fade-right"
				class="bg-green-200 border border-green-500 hover:bg-green-400 text-gray-700 py-1 px-4 float-right rounded-sm font-semibold font-mono"
				><i class="far fa-paper-plane mr-3" />Send</button
			>
			<div class="clear-right" />
		</form>
	</section>
  <p
    data-aos="fade-up"
    data-aos-offset="200"
    on:click={() => window.scrollTo(0, 0)}
    class="text-xl lg:text-3xl text-gray-700 dark:text-white cursor-pointer text-center absolute bottom-5 right-0 left-0"
  >
    <i class="hover-vertical fas fa-angle-up" />
  </p>
</main>

<style>
</style>
