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
			alert("Message sent!");
			contactForm.reset();
		} else {
			alert("Message failed to send...");
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

	<div class="hidden lg:block absolute right-14 top-0">
		<div class="w-5 h-28 bg-gray-800 dark:bg-gray-50 mb-6" />

		<p class="text-gray-800 dark:text-gray-50 font-mono font-bold text-4xl right-0 absolute">100</p>
	</div>
	<section class="section relative">
		<div class="bg-gray-50 dark:bg-gray-900 shadow-2xl px-5 py-10 lg:px-10 lg:py-20 mb-16">
			<h2 data-aos="zoom-in-right" class="title mb-4 heading font-mono">Contact(Me);</h2>
			<h5 data-aos="zoom-in-right" class="subtitle mb-10">
				Shoot me a message and I will get back to you as soon as I can. <br />
				My emails are
				<span
					class="cursor-pointer bg-green-300 dark:text-gray-800"
					on:click={() => copyToClipboard("ngbobshoaun2000@gmail.com")}>ngbobshoaun2000@gmail.com</span
				>
				and
				<span
					class="cursor-pointer bg-blue-300 dark:text-gray-800"
					on:click={() => copyToClipboard("bobshoaun.ng@mail.utoronto.ca")}
					>bobshoaun.ng@mail.utoronto.ca</span
				>
			</h5>

			<form
				data-aos="zoom-in-right"
				data-aos-duration="700"
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
				<div class="flex flex-col md:flex-row">
					<input
						name="name"
						class="w-full mb-3 md:mb-4 mr-4 px-4 py-2 bg-gray-300 dark:bg-gray-600 dark:text-gray-50"
						type="text"
						placeholder="Name..."
						required
					/>
					<input
						name="email"
						class="w-full mb-3 md:mb-4 px-4 py-2 bg-gray-300 dark:bg-gray-600 dark:text-gray-50"
						type="text"
						placeholder="Email..."
						required
					/>
				</div>

				<textarea
					name="message"
					class="w-full px-4 py-2 mb-2 min-h-1/4 bg-gray-200 dark:bg-gray-700 dark:text-gray-50"
					placeholder="Message..."
					rows="10"
					required
				/>
				<button
					data-aos="fade-right"
					class="bg-purple-200 border border-purple-400 hover:bg-purple-400 text-gray-700 py-1 px-4 float-right rounded-sm font-semibold font-mono"
					><i class="far fa-paper-plane mr-3" />Send</button
				>
				<div class="clear-right" />
			</form>
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
