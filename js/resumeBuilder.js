var dataPlaceHolder = '%data%';

/*
 *   bio object begin ......
 * */
var bio = {
    "name": "CaoXiaohu",
    "role": "Java Senior Web Programmer",
    "contacts": {
        "mobile": "+8613538257831",
        "email": "sunrise2075@163.com",
        "github": "sunrise2075",
        "twitter": "@sunrise2075",
        "location": "Shenzhen, Guangdong, PRC"
    },
    "welcomeMessage": "Welcome to my online interactive resume",
    "skills": [
        'Java', 'Struts2', 'Spring Boot', 'Spring framework'
    ],
    "biopic": "images/fry.jpg"
};

bio.display = function() {
    if (bio.role) {
        var formattedRole = HTMLheaderRole.replace(dataPlaceHolder, bio.role);
        $('#header').prepend(formattedRole);
    }

    if (bio.name) {
        var formattedName = HTMLheaderName.replace(dataPlaceHolder, bio.name);
        $('#header').prepend(formattedName);
    }

    if (bio.biopic) {
        var formattedPic = HTMLbioPic.replace(dataPlaceHolder, bio.biopic);
        $('#header').append(formattedPic);
    }

    if (bio.welcomeMessage) {
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace(dataPlaceHolder, bio.welcomeMessage);
        $('#header').append(formattedWelcomeMessage);
    }

    if (bio.contacts) {
        var formattedMobile = HTMLmobile.replace(dataPlaceHolder, bio.contacts.mobile);
        $('#topContacts, #footerContacts').append(formattedMobile);

        var formattedEmail = HTMLemail.replace(dataPlaceHolder, bio.contacts.email);
        $('#topContacts, #footerContacts').append(formattedEmail);

        var formattedTwitter = HTMLtwitter.replace(dataPlaceHolder, bio.contacts.twitter);
        $('#topContacts, #footerContacts').append(formattedTwitter);

        var formattedGithub = HTMLgithub.replace(dataPlaceHolder, bio.contacts.github);
        $('#topContacts, #footerContacts').append(formattedGithub);

        var formattedLocation = HTMLlocation.replace(dataPlaceHolder, bio.contacts.location);
        $('#topContacts, #footerContacts').append(formattedLocation);
    }

    if (bio.skills) {
        $('#header').append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace(dataPlaceHolder, bio.skills[i]);
            $('#skills').append(formattedSkills);
        }
    }
};

bio.display();

/*
 *   bio object end ......
 * */

/**
 * projects object begin......
 * */
var projects = {
    "projects": [{
        "title": "Project Title 1",
        "dates": "Dates 1",
        "description": "Project Description 1, Project Description 1, Project Description 1, Project Description 1, Project Description 1,Project Description 1, Project Description 1, Project Description 1, Project Description 1, Project Description 1",
        "images": [],
        "url": ""
    },
        {
            "title": "Project Title 2",
            "dates": "Dates 2",
            "description": "Project Description 2, Project Description 2, Project Description 2, Project Description 2, Project Description 2, Project Description 2, Project Description 2, Project Description 2, Project Description 2, Project Desciption 2, Project Description 2, Project Description 2",
            "images": [],
            "url": ""
        }
    ]
};

projects.display = function() {
    var projectsArray = projects.projects;
    if (projectsArray && Array.isArray(projectsArray)) {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace(dataPlaceHolder, project.title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace(dataPlaceHolder, project.dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDesc = HTMLprojectDescription.replace(dataPlaceHolder, project.description);
            $(".project-entry:last").append(formattedDesc);

            var images = project.images;
            if (images && Array.isArray(images) && images.length > 0) {
                images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace(dataPlaceHolder, image);
                    $(".project-entry:last").append(formattedImage);
                });
            }
        });
    }
};

projects.display();

/**
 * projects object end......
 * */
/*
 * education object begin ...
 * */
var education = {
    "schools": [{
        "name": "Zhengzhou Normal University",
        "location": "No. 5, YingCai Road, HuiJi District, ZhengZhou City, HeNan Province, PRC",
        "degree": "no degree",
        "majors": ["Electronics Information Engineering and Technology"],
        "dates": "2005.09-2008.07",
        "url": "http://www.zztc.com.cn/",

    },
        {
            "name": "Shenzhen Trena Tech Education school",
            "location": "F518 Garden, BaoAn District, ShenZhen City, Guangdong Province, PRC",
            "degree": "no degree",
            "majors": ["Java developer, Web Developer"],
            "dates": "2010.04-2010.11",
            "url": "http://www.tedu.cn/"

        }
    ],
    "onlineCourses": [{
        "title": "Angular 2 - the Complete Guide",
        "school": "Udemy",
        "dates": "2016.1.4 - 2016.1.22",
        "url": "https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/overview"
    }, {
        "title": "Java Spring Framework 4 and Spring Certification",
        "school": "Udemy",
        "dates": "2016.1.22 - 2016.1.27",
        "url": "https://www.udemy.com/spring-framework-4-course-and-core-spring-certification/learn/v4/overview"
    }]
};

education.display = function() {
    var schoolArray = education.schools;
    if (schoolArray && Array.isArray(schoolArray)) {
        for (var school in education.schools) {
            if (education.schools.hasOwnProperty(school)) {
                $("#education").append(HTMLschoolStart);
                var formattedSchoolName = HTMLschoolName.replace(dataPlaceHolder, education.schools[school].name);
                $(".education-entry:last").append(formattedSchoolName);
                var formattedSchoolLocation = HTMLschoolLocation.replace(dataPlaceHolder, education.schools[school].location);
                $(".education-entry:last").append(formattedSchoolLocation);
                var formattedSchoolDegree = HTMLschoolDegree.replace(dataPlaceHolder, education.schools[school].degree);
                $(".education-entry:last").append(formattedSchoolDegree);
                var formattedDates = HTMLschoolDates.replace(dataPlaceHolder, education.schools[school].dates);
                $(".education-entry:last").append(formattedDates);

                var majors = education.schools[school].majors;
                if (majors && Array.isArray(majors) && majors.length > 0) {
                    for (var major in majors) {
                        if (majors.hasOwnProperty(major)) {
                            var formattedMajor = HTMLschoolMajor.replace(dataPlaceHolder, majors[major]);
                            $(".education-entry:last").append(formattedMajor);
                        }
                    }
                }
            }
        }
    }

    if (education.onlineCourses) {
        $(".education-entry:last").append(HTMLonlineClasses);
        for (var course in education.onlineCourses) {
            if (education.onlineCourses.hasOwnProperty(course)) {
                var formattedTitle = HTMLonlineTitle.replace(dataPlaceHolder, education.onlineCourses[course].title);
                $(".education-entry:last").append(formattedTitle);

                var formattedSchool = HTMLonlineSchool.replace(dataPlaceHolder, education.onlineCourses[course].school);
                $(".education-entry:last").append(formattedSchool);

                var formattedOnlineDates = HTMLonlineDates.replace(dataPlaceHolder, education.onlineCourses[course].dates);
                $(".education-entry:last").append(formattedOnlineDates);

                var formattedUrl = HTMLonlineURL.replace(dataPlaceHolder, education.onlineCourses[course].url);
                $(".education-entry:last").append(formattedUrl);
            }
        }
    }
    $("#education").show();
};

education.display();


/*
 * education object end ......
 * */
/**
 * work object begin......
 * */
var work = {
    "jobs": [{
        title: "Java Web Developer",
        employer: "Lanqiao IT Company",
        location: "High Tech Park, NanShan District, ShenZhen City, GuangDong Province ",
        years: 0.3,
        dates: 'August 2016 - December 2016',
        description: 'the description content 1, the description content 1, the description content 1, the description content 1,the description content 1'
    }, {
        title: "Java Web Developer",
        employer: "Shenzhen Coordinates Healthcare Information Technology Compony",
        location: "High Tech Park, NanShan District, ShenZhen City, GuangDong Province ",
        years: 1.3,
        dates: 'Feburary 2014 - August 2016',
        description: 'the description content 2, the description content 2, the description content 2, the description content 2, the description content 2 '
    }]
};

work.display = function() {
    var jobs = work.jobs;
    if (jobs && Array.isArray(jobs)) {
        work.jobs.forEach(function(job){
                $('#workExperience').append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace(dataPlaceHolder, job.employer);
                var formattedTitle = HTMLworkTitle.replace(dataPlaceHolder, job.title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;

                $('.work-entry:last').append(formattedEmployerTitle);

                var formattedDates = HTMLworkDates.replace(dataPlaceHolder, job.dates);
                $('.work-entry:last').append(formattedDates);
                var formattedDesc = HTMLworkDescription.replace(dataPlaceHolder, job.description);
                $('.work-entry:last').append(formattedDesc);
                var formattedLocation = HTMLworkLocation.replace(dataPlaceHolder, job.location);
            $('.work-entry:last').append(formattedLocation);
        })
    }
};

work.display();

/**
 * work object end......
 * */


$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);

initializeMap();