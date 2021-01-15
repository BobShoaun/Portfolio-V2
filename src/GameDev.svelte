<script>
	import GameDevProject from "./GameDevProject.svelte";
	import WebDevProject from "./WebDevProject.svelte";
</script>

<main id="game-development" class="main">
	<h1 class="text-5xl font-semibold text-gray-600 mb-3">Game development</h1>
	<p class="text-gray-500 text-xl">Fun fact: game development was what got me into coding in the first place.</p>
	<div class="flex justify-between space-x-28">
		<GameDevProject
			image={"images/doodle jump.gif"}
			name={"Assembly Doodle Jump"}
			collaborators={"by myself"}
			description={"Doodle jump game recreated using assembly language. It features different types of platforms, and powerups like springs and jetpacks. This was a final project for my CSC258 course."}
			technologies={["mips assembly", "mars simulator"]}
			github={"https://github.com/BobShoaun/Assembly-Doodle-Jump"}
		/>
		<GameDevProject
			image={"images/maze-runner.jpg"}
			name={"Maze Runner"}
			collaborators={"with some friends"}
			description={"A game made entirely with ascii graphics to display in the console, with the help of a console game engine. The game features local multiplayer with two players, a runner and a chaser."}
			technologies={["c++", "visual studio"]}
			github={"https://github.com/BobShoaun/Assembly-Doodle-Jump"}
		/>
    </div>
    
    <div class="flex justify-center">
        <GameDevProject
        image={"images/doxel-core.png"}
        name={"Doxel Core Unity Package"}
        collaborators={"by myself"}
        description={"Here are some web development projects i have worked on. Here are some web development projects i have worked on."}
        technologies={["unity", "c#"]}
        github={"https://github.com/BobShoaun/Assembly-Doodle-Jump"}
    />
    </div>

</main>
