const projects = [
    {
        id: 1,
        title: 'trailr',
        description: 'A Front-End web application for searching for movies. Users can search a movie by title, select which movie they are interested in, and view information related to the movie.',
        tools: {
        development: 'HTML, CSS, Javascript',
        framework: 'Materialize',
        },
        link: {
            deploy: 'https://elusiveskies.github.io/trailr/',
            repository: 'https://github.com/elusiveskies/trailr/'
        },
        img: {
            static: './images/trailr.png',
            animated: './images/trailr-active.gif',
        }
    },
    {
        id: 2,
        title: 'project',
        tools: {
            development: 'HTML, CSS, Javascript',
            framework: 'N/A',
            },
        link: {
            deploy: 'link',
            repository: 'repo link'
        },
        img: {
            static: 'staticImg',
            animated: 'animatedImg',
        }
    }
]

export default projects;