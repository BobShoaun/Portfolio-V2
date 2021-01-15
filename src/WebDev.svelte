<script>
    import WebDevProject from "./WebDevProject.svelte";
</script>

<main id="web-development" class="main">
    <h1 class="text-5xl font-semibold text-gray-600 mb-3">Web development</h1>
    <p class="text-gray-500 text-xl">
        Here are some web development projects i have worked on.
    </p>
    <WebDevProject
        image={'images/pathforge.png'}
        name={'Pathforge'}
        collaborators={'with pathforge team'}
        description={'An elearning site that aims to redefine the self learning experience. It provides a community for online learners to help eachother out and step through the materials together.'}
        technologies={['vue', 'buefy', 'graphql', 'postgres']}
        website={null} 
        />
    <WebDevProject
        image={'images/course-checker 2.png'}
        name={'ADP Timetabler (aka Course Checker)'}
        collaborators={'by myself'}
        description={'A web application for students in the ADP program of Taylor’s university to generate a visually appealing timetable based on courses they want to take for their next semester.'}
        technologies={['html', 'css', 'unity', 'c#', 'webGL']}
        github={'https://github.com/BobShoaun/Course-Checker'}
        website={'https://bobshoaun.github.io/Course-Checker/'}
        right />
    <WebDevProject
        image={'images/todo app 2.png'}
        name={'things to do'}
        collaborators={'by myself'}
        description={'A simple and elegant to do list application built as practice while learning the vue framework and firebase firestore.'}
        technologies={['vue', 'tailwind css', 'firebase']}
        github={'https://github.com/BobShoaun/Vue-Todo-App'}
        website={'https://bobshoaun.github.io/Vue-Todo-App/#/'} />

    <button class="py-2 px-4 bg-green-200 rounded-none block mx-auto mt-10">
        See More
    </button>
</main>
