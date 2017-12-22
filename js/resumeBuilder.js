var bio = {
    name: 'Ali Mahmoud',
    role: 'Full Stack Developer',
    contacts: {
        mobile: '+20 777 777 7777',
        email: 'ce.alimahmoud@gmail.com',
        github: 'alimahmoud7',
        twitter: '@alimahmoud7',
        location: 'Minya, Egypt'
    },
    welcomeMessage: 'Hi there!',
    skills: ['Python', 'HTML', 'CSS', 'JavaScript'],
    biopic: './images/fry.jpg',
    display: function () {
        var headerSection = $('#header');
        headerSection.prepend(HTMLheaderRole.replace('%data%', bio.role));
        headerSection.prepend(HTMLheaderName.replace('%data%', bio.name));
        headerSection.append(HTMLbioPic.replace('%data%', bio.biopic));
        headerSection.append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

        if (bio.skills.length > 0) {
            headerSection.append(HTMLskillsStart);
            bio.skills.forEach(function (skill) {
                $('#skills').append(HTMLskills.replace('%data%', skill));
            });
        }

        var topAndFooterContacts = $('#topContacts, #footerContacts');
        topAndFooterContacts.append(HTMLmobile.replace('%data%', bio.contacts.mobile));
        topAndFooterContacts.append(HTMLemail.replace('%data%', bio.contacts.email));
        topAndFooterContacts.append(HTMLgithub.replace('%data%', bio.contacts.github));
        topAndFooterContacts.append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
        topAndFooterContacts.append(HTMLlocation.replace('%data%', bio.contacts.location));
    }
};

var education = {
    schools: [
        {
            name: 'Minya University',
            location: 'Minya, Egypt',
            degree: 'BA',
            majors: ['Computer Engineering'],
            dates: '2013-2018',
            url: 'http://www.example.com'
        }
    ],
    onlineCourses: [
        {
            title: 'Full-Stack Web Developer Nanodegree',
            school: 'Udacity',
            dates: '2017-2017',
            url: 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004'
        }
    ],
    display: function () {
        var educationSection = $('#education');

        education.schools.forEach(function(school) {
            educationSection.append(HTMLschoolStart);
            var educationEntry = educationSection.find('.education-entry:last');

            educationEntry.append(HTMLschoolName.replace('%data%', school.name) + HTMLschoolDegree.replace('%data%', school.degree));  // School Title
            educationEntry.append(HTMLschoolDates.replace('%data%', school.dates));  // School Date
            educationEntry.append(HTMLschoolLocation.replace('%data%', school.location));  // School Location
            educationEntry.append(HTMLschoolMajor.replace('%data%', school.majors.join(', ')));  // School Major
        });

        educationSection.append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineSchool) {
            educationSection.append(HTMLschoolStart);

            var educationEntry = educationSection.find('.education-entry:last');
            educationEntry.append(HTMLonlineTitle.replace('%data%', onlineSchool.title) + HTMLonlineSchool.replace('%data%', onlineSchool.school));  // Online Class Title
            educationEntry.append(HTMLonlineDates.replace('%data%', onlineSchool.dates));  // Online Class Date
            educationEntry.append(HTMLonlineURL.replace('%data%', onlineSchool.url));  // Online Class URL
        });
    }
};

var work = {
    jobs: [
        {
            employer: 'Upwork',
            title: 'Full-Stack Developer',
            location: 'Online',
            dates: '2017-Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa nunc, sollicitudin sed ligula et, hendrerit convallis.'
        },
        {
            employer: 'Arch17',
            title: 'Web Developer',
            location: 'China',
            dates: '2017-Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa nunc, sollicitudin sed ligula et, hendrerit convallis.'
        }
    ],
    display: function () {
        work.jobs.forEach(function (job) {
            var workSection = $('#workExperience');
            workSection.append(HTMLworkStart);

            var workEntry = workSection.find('.work-entry:last');
            workEntry.append(HTMLworkEmployer.replace('%data%', job.employer) + HTMLworkTitle.replace('%data%', job.title));  // Job Header
            workEntry.append(HTMLworkDates.replace('%data%', job.dates));  // Job Date
            workEntry.append(HTMLworkLocation.replace('%data%', job.location));  // Job Location
            workEntry.append(HTMLworkDescription.replace('%data%', job.description));  // Job Description
        });
    }
};

const projects = {
    projects: [
        {
            title: 'Sample Project 1',
            dates: '2013-2015',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa nunc, sollicitudin sed ligula et, hendrerit convallis.',
            images: ['./images/197x148.gif']
        },
        {
            title: 'Sample Project 2',
            dates: '2016-2017',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa nunc, sollicitudin sed ligula et, hendrerit convallis.',
            images: ['./images/197x148.gif']
        }
    ],
    display: function () {
        projects.projects.forEach(function (project) {
            var projectsSection = $('#projects');
            projectsSection.append(HTMLprojectStart);

            var projectEntry = projectsSection.find('.project-entry:last');
            projectEntry.append(HTMLprojectTitle.replace('%data%', project.title));  // Project Title
            projectEntry.append(HTMLprojectDates.replace('%data%', project.dates));  // Project Date
            projectEntry.append(HTMLprojectDescription.replace('%data%', project.description));  // Project Description

            if (project.images.length > 0) {
                project.images.forEach(function (image) {
                    projectEntry.append(HTMLprojectImage.replace('%data%', image));
                });
            }
        });
    }
};

bio.display();
work.display();
projects.display();
education.display();
