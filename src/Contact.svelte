<script>
	import { copyEmail } from "./helper.svelte";
	import { onMount } from "svelte";

	onMount(() => {
		// let contactForm = document.querySelector("form");
		// contactForm.addEventListener("submit", submitForm);
	});

	async function submitForm(e) {
		let contactForm = document.querySelector("form");
		e.preventDefault();

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

<main id="contact" class="bg-gray-100 dark:bg-gray-800">
	<section class="section">
		<h2 class="title mb-2">Contact me</h2>
		<h5 class="subtitle mb-16">
			Shoot me a message and I will get back to you as soon as I can. My email is:
			<span class="cursor-pointer" on:click={copyEmail}>ngbobshoaun2000@gmail.com</span>.
		</h5>
		<form
			on:submit={submitForm}
			name="contact"
			action="action"
			method="POST"
			data-netlify="true"
			netlify-honeypot="bot-field"
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
			<button class="bg-green-200 py-1 px-4 float-right rounded-none font-semibold font-mono"
				><i class="far fa-paper-plane mr-3" />Send</button
			>
			<div class="clear-right" />
		</form>
	</section>
</main>
