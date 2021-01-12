<script>
    import WebDevProject from "./WebDevProject.svelte";
</script>

<main class="main">
    <h1 class="text-5xl font-light mb-3">Web development</h1>
    <p class="font-mono">
        Here are some web development projects i have worked on.
    </p>
    <WebDevProject
        image={'images/pathforge.png'}
        name={'Pathforge'}
        collaborators={'with pathforge team'}
        description={'Here are some web development projects i have worked on. Here are some web development projects i have worked on.'}
        technologies={['vue', 'buefy', 'graphql', 'postgres']} />
    <WebDevProject
        image={'images/course-checker 2.png'}
        name={'ADP Timetabler (Course Checker)'}
        collaborators={'by myself'}
        description={'Here are some web development projects i have worked on. Here are some web development projects i have worked on.'}
        technologies={['html', 'css', 'unity', 'webGL']}
        right />
    <WebDevProject
        image={'images/todo app 2.png'}
        name={'things to do'}
        collaborators={'by myself'}
        description={'Here are some web development projects i have worked on. Here are some web development projects i have worked on.'}
        technologies={['vue', 'tailwind css', 'firebase']} />
</main>
