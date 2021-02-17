<script>
	import WebDevProject from "./WebDevProject.svelte";

	function more() {
		alert("more coming soon!");
	}
</script>

<main id="web-development" class="main dark:bg-gray-700">
	<section class="section">
		<h2 data-aos="fade-in" class="title mb-2">
			Web development
    </h2>
		<h5 data-aos="fade-in" class="subtitle mb-20">
			Here are some web development projects i have worked on.
    </h5>

		<div class="mb-20">
			<WebDevProject
				image={"images/pathforge.png"}
				name={"Pathforge"}
				collaborators={"with pathforge team"}
				description={"An elearning site that aims to redefine the self learning experience. It provides a community for online learners to help eachother out and step through the materials together."}
				technologies={["vue", "buefy", "graphql", "postgres"]}
				website={null}
			/>
		</div>
		<div class="mb-20">
			<WebDevProject
				image={"images/course-checker 2.png"}
				name={"ADP Timetabler (aka Course Checker)"}
				collaborators={"by myself"}
				description={"A web application for students in the ADP program of Taylor’s university to generate a visually appealing timetable based on courses they want to take for their next semester."}
				technologies={["html", "css", "unity", "c#", "webGL"]}
				github={"https://github.com/BobShoaun/Course-Checker"}
				website={"https://bobshoaun.github.io/Course-Checker/"}
				right
			/>
		</div>

		<div class="mb-20">
			<WebDevProject
				image={"images/todo app 2.png"}
				name={"things to do"}
				collaborators={"by myself"}
				description={"A simple and elegant to do list application built as practice while learning the vue framework and firebase firestore."}
				technologies={["vue", "tailwind css", "firebase"]}
				github={"https://github.com/BobShoaun/Vue-Todo-App"}
				website={"https://bobshoaun.github.io/Vue-Todo-App/#/"}
			/>
		</div>

		<button
			on:click={more}
			class="py-2 px-4 bg-purple-400 text-white rounded-none block mx-auto mt-10 font-bold font-mono"
		>
			See More
		</button>
	</section>
</main>
