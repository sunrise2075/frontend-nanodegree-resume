var dataPlaceHolder = '%data%';

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

bio.displayBasicInfo = function() {
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

	if(bio.skills){
		$('#header').append(HTMLskillsStart);
		for(var i=0;i< bio.skills.length;i++){
			var formattedSkills = HTMLskills.replace(dataPlaceHolder, bio.skills[i]);
			$('#skills').append(formattedSkills);
		}
	}
}

bio.displayBasicInfo();

var education = {
    "schools": [{
            "name": "Zhengzhou Normal University",
            "years": "2005.09-2008.07",
            "city": "Zhengzhou City in Henan Province, PRC",
            "major": ["Electronics Information Engineering and Technology"]
        },
        {
            "name": "Shenzhen Trena Tech Education school",
            "years": "2010.04-2010.11",
            "city": "Shenzhen City in Guangdong Province, PRC",
            "major": ["Java Enterprise Developer"]
        }
    ],
    "onlineCourses": []
};

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
    for (var project in projects.projects) {

        if (projects.projects.hasOwnProperty(project)) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace(dataPlaceHolder, projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace(dataPlaceHolder, projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDesc = HTMLprojectDescription.replace(dataPlaceHolder, projects.projects[project].description);
            $(".project-entry:last").append(formattedDesc);

            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
                    if (projects.projects[project].images.hasOwnProperty(image)) {
                        var formattedImage = HTMLprojectImage.replace(dataPlaceHolder, projects.projects[project].images[image]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }
            }
        }


    }
};

projects.display();

var work = {
        "jobs": [{
            title: "Java Web Developer",
            employer: "Lanqiao IT Company",
            years: 0.3,
            dates: 'August 2016 - December 2016',
            description: 'the description content 1, the description content 1, the description content 1, the description content 1,the description content 1'
        }, {
            title: "Java Web Developer",
            employer: "Shenzhen Coordinates Healthcare Information Technology Compony",
            years: 1.3,
            dates: 'Feburary 2014 - August 2016',
            description: 'the description content 2, the description content 2, the description content 2, the description content 2, the description content 2 '
        }]
    };

work.displayWork= function() {

    for (var job in work.jobs) {

        if (work.jobs.hasOwnProperty(job)) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace(dataPlaceHolder, work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace(dataPlaceHolder, work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $('.work-entry:last').append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace(dataPlaceHolder, work.jobs[job].dates);
            $('.work-entry:last').append(formattedDates);
            var formattedDesc = HTMLworkDescription.replace(dataPlaceHolder, work.jobs[job].description);
            $('.work-entry:last').append(formattedDesc);
        }

    }
}

work.displayWork();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    console.log(x, y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice[1].toLowerCase();

    return name[0] + " " + name[1];
}

//$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);


initializeMap();