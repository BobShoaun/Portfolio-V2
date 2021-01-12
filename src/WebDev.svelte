<script>
    import WebDevProject from "./WebDevProject.svelte";
</script>

<main id="web-development" class="main">
    <h1 class="text-5xl font-light mb-3">Web development</h1>
    <p class="font-mono">
        Here are some web development projects i have worked on.
    </p>
    <WebDevProject
        image={'images/pathforge.png'}
        name={'Pathforge'}
        collaborators={'with pathforge team'}
        description={'Here are some web development projects i have worked on. Here are some web development projects i have worked on.'}
        technologies={['vue', 'buefy', 'graphql', 'postgres']}
        website={'https://pathforge-v1.et.r.appspot.com/'} />
    <WebDevProject
        image={'images/course-checker 2.png'}
        name={'ADP Timetabler (Course Checker)'}
        collaborators={'by myself'}
        description={'Here are some web development projects i have worked on. Here are some web development projects i have worked on.'}
        technologies={['html', 'css', 'unity', 'c#', 'webGL']}
        github={'https://github.com/BobShoaun/Course-Checker'}
        website={'https://bobshoaun.github.io/Course-Checker/'}
        right />
    <WebDevProject
        image={'images/todo app 2.png'}
        name={'things to do'}
        collaborators={'by myself'}
        description={'Here are some web development projects i have worked on. Here are some web development projects i have worked on.'}
        technologies={['vue', 'tailwind css', 'firebase']}
        github={'https://github.com/BobShoaun/Vue-Todo-App'}
        website={'https://bobshoaun.github.io/Vue-Todo-App/#/'} />

    <button class="py-2 px-4 bg-green-200 rounded-none block mx-auto mt-10">
        See More
    </button>
</main>
