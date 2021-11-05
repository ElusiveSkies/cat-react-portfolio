const projects = [
    {
        id: 1,
        title: 'Trailr',
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
        title: 'Quiz',
        description: 'A timed quiz web application using Javascript. Users input their responses and the score responds appropriately. The user continues until time runs out or all the questions have been answered.',
        tools: {
            development: 'HTML, CSS, Javascript',
        },
        link: {
            deploy: 'https://elusiveskies.github.io/Code_Quiz/',
            repository: 'https://github.com/elusiveskies/Code_Quiz/'
        },
        img: {
            static: './images/quiz.png',
            animated: './images/quiz-active.gif',
        }
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description: 'A weather dashbord application calling a third party API. Users input will call the weely forcast for the location selected.',
        tools: {
            development: 'HTML, CSS, Javascript',
        },
        link: {
            deploy: 'https://elusiveskies.github.io/Weather_Dashboard/',
            repository: 'https://github.com/elusiveskies/Weather_Dashboard/'
        },
        img: {
            static: './images/weather.png',
            animated: './images/weather-active.gif',
        }
    },
    {
        id: 4,
        title: 'Team Profile Generator',
        // eslint-disable-next-line no-multi-str
        description: 'An application that prompts for user input to create a team containing manager(s), engineer(s), and intern(s). Using the input data an html file will be dynamically generated.\
        After the values have been entered, meeting the required validation parameters, a page will be displayed with the details of each team member. The email address(es) will open in the default email program. All github profiles will open a new tab for the user\'s profile.',
        tools: {
            development: 'Javascript, HTML, CSS, Jest, Inquirer',
        },
        link: {
            repository: 'https://github.com/ElusiveSkies/team-profile'
        },
        img: {
            static: './images/TeamProfileGen.png',
            animated: './images/TeamProfileGen-active.gif',
        }
    },
    {
        id: 5,
        title: 'Employee Tracker',
        description: 'An application that allows a user to view and edit employees, titles, departments, and salaries.',
        tools: {
            development: 'Javascript, MySQL2, Inquirer',
        },
        link: {
            deploy: 'https://elusiveskies.github.io/employee_tracker/',
            repository: 'https://github.com/elusiveskies/employee_tracker/'
        },
        img: {
            static: './images/emp_tracker.png',
            animated: './images/emp_tracker-active.gif',
        }
    },
    {
        id: 6,
        title: 'Farmers Market',
        description: 'User will navigate from the landing page to the login/sign-up page. From here the user can create a new account or log in to an existing account. Once logged in the user will be able to view existing farmers markets, search for farmer\'s markets via zip code, and remove markets that they have created.',
        tools: {
            development: 'Javascript, HTML, CSS, MySQL2, Handlebars, Node.js, Express.js, Sequelize.js',
        },
        link: {
            deploy: 'https://still-tor-25996.herokuapp.com/',
            repository: 'https://github.com/ElusiveSkies/Farmers-Market-Search'
        },
        img: {
            static: './images/emp_tracker.png',
            animated: './images/emp_tracker-active.gif',
        }
    },

]

export default projects;