/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
work
work 包含一个 jobs 数组。jobs 数组中的每个对象 都应该包含 employer、title、location、工作 dates 和 description 字符串。

projects
projects 包含一个 projects 数组。projects 数组中的每个对象 都应该包含 title、dates 和 description 字符串 以及 images 数组，其中包含 项目图片的 URL 字符串。

bio
bio 包含 name、role、welcomeMessage 和 biopic 字符串， contacts 对象以及 skill 字符串的 skills 数组。contacts 对象 应包含 mobile 号码、email 地址、 github 用户名、twitter 句柄和 location。twitter 属性 是可选的。

education
education 包含一个 schools 数组。schools 数组中的每个对象 都包含 name、location、degree、dates 和 url 字符串，以及 major 字符串的 majors 数组。 

education 还包含一个 onlineCourses 数组。onlineCourses 数组中的每个对象 都应该包含 title、school、dates 和 url 字符串。
*/

var bio = {
	"name": "CaoXiaohu",
	"role": "Java Senior Web Programmer",
	"contacts": {
		"mobile": "+8613538257831",
		"email": "sunrise2075@163.com",
		"github": "tigercao19860124",
		"twitter": "@sunrise2075",
		"location": "Shenzhen, Guangdong, PRC"
	},
	"welcomeMessage": "Welcome to my online interactive resume",
	"skills": [
		'Java','Struts2','Spring Boot','String framework'
	],
	"bioPic": "images/fry.jpg"
};

if(bio.role){
	var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
	$('#header').prepend(formattedRole);
}

if(bio.name){
	var formattedName =HTMLheaderName.replace('%data%',bio.name);
	$('#header').prepend(formattedName);
}

if(bio.bioPic){
	var formattedPic = HTMLbioPic.replace('%data%',bio.bioPic);
	$('#header').append(formattedPic);
}

if(bio.welcomeMessage){
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
	$('#header').append(formattedWelcomeMessage);
}

if(bio.contacts){
	var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
	$('#topContacts').append(formattedMobile);
	
	var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
	$('#topContacts').append(formattedEmail);

	var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
	$('#topContacts').append(formattedTwitter);
	
	var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
	$('#topContacts').append(formattedGithub);
	
	var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
	$('#topContacts').append(formattedLocation);	
}


if(bio.skills.length>0){
	$('#header').append(HTMLskillsStart);
	
	var formattedSkills = HTMLskills.replace('%data%',bio.skills[0]);
	$('#skills').append(formattedSkills);
	
	formattedSkills = HTMLskills.replace('%data%',bio.skills[1]);
	$('#skills').append(formattedSkills);
	
	formattedSkills = HTMLskills.replace('%data%',bio.skills[2]);
	$('#skills').append(formattedSkills);
	
	formattedSkills = HTMLskills.replace('%data%',bio.skills[3]);
	$('#skills').append(formattedSkills);
}

var work = {};
work.position = "Java Web Developer";
work.employer = "Lanqiao IT school";
work.years = 0.3;

var education = {
	"schools":[
		{
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

var project = {
	"projects":[{
		"title": "",
		"dates": "",
		"desciption": "",
		"images": [],
		"url": ""
	}]
}






































 
 
 