<main id="game-development" class="main">
    <h1 class="text-5xl font-light mb-3">Game development</h1>
    <p class="font-mono">
        Here are some game development projects i have worked on.
    </p>
    <div class="flex justify-between space-x-28">
        <GameDevProject
        image={'images/doodle jump.gif'}
        name={'Assembly Doodle Jump'}
        collaborators={'by myself'}
        description={'Here are some web development projects i have worked on. Here are some web development projects i have worked on.'}
        technologies={['mips assembly', 'mars simulator']} />
        <GameDevProject
        image={'images/doodle jump.gif'}
        name={'Assembly Doodle Jump'}
        collaborators={'by myself'}
        description={'Here are some web development projects i have worked on. Here are some web development projects i have worked on.'}
        technologies={['mips assembly', 'mars simulator']} />
    </div>
   
</main>

<script>
    import GameDevProject from "./GameDevProject.svelte";
</script>
