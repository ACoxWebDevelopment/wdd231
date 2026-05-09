const results = document.getElementById("webCourses");
const listAll = document.getElementById("all");
const listWeb = document.getElementById("web");
const listProgramming = document.getElementById("programming");
const legendComplete = document.createElement ("div");
const legendCompleteWrapper = document.createElement ("div");
const legendCompleteText = document.createElement ("p");
const legendPendingWrapper = document.createElement ("div");
const legendPending = document.createElement("div");
const legendPendingText = document.createElement ("p");
let filteredWeb = [];
let filteredProgramming = [];
let unfilteredCourses = [];
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

listAll.addEventListener("click", allCourses);
listWeb.addEventListener("click", webCourses);
listProgramming.addEventListener("click", programCourses);


function allCourses() {
    results.textContent = "";
    unfilteredCourses = [];
    courses.forEach(element => {
        unfilteredCourses.push(element.credits);
        let details = document.createElement("p");
        if (element.completed) {
            details.className = "completed";
        } else {
            details.className = "pending"
        }
        details.textContent = `${element.subject} ${element.number}`;
        results.appendChild(details);
    });
    let allCredits = document.createElement("p");
    allCredits.textContent = `total credits of listed courses is ${unfilteredCourses.reduce(myCredits, 0)}`;
    results.appendChild(allCredits);

    legendCompleteText.textContent = (" = Complete");
    legendCompleteWrapper.id = ("completeWrapper");
    legendCompleteWrapper.appendChild(legendComplete);
    legendCompleteWrapper.appendChild(legendCompleteText);
    legendComplete.id = ("courseComplete");
    results.appendChild(legendCompleteWrapper);

    legendPending.id = ("coursePending");
    legendPendingText.textContent = (" = Pending");
    legendPendingWrapper.id = ("pendingWrapper")
    legendPendingWrapper.appendChild(legendPending)
    legendPendingWrapper.appendChild(legendPendingText);
    results.appendChild(legendPendingWrapper);



}

function webCourses() {
    results.textContent = "";
    filteredWeb = [];
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].subject == "WDD") {
            filteredWeb.push(courses[i].credits);
            let details = document.createElement("p");
            if (courses[i].completed) {
                details.className = "completed";
            } else {
                details.className = "pending"
            }
            details.textContent = `${courses[i].subject} ${courses[i].number}`;
            results.appendChild(details);
        }
    }
    let totalWebCredits = document.createElement("p")
    totalWebCredits.textContent = `total credits of listed courses is ${filteredWeb.reduce(myCredits, 0)}`;
    results.appendChild(totalWebCredits)

    legendCompleteText.textContent = (" = Complete");
    legendCompleteWrapper.id = ("completeWrapper");
    legendCompleteWrapper.appendChild(legendComplete);
    legendCompleteWrapper.appendChild(legendCompleteText);
    legendComplete.id = ("courseComplete");
    results.appendChild(legendCompleteWrapper);

    legendPending.id = ("coursePending");
    legendPendingText.textContent = (" = Pending");
    legendPendingWrapper.id = ("pendingWrapper")
    legendPendingWrapper.appendChild(legendPending)
    legendPendingWrapper.appendChild(legendPendingText);
    results.appendChild(legendPendingWrapper);
}

function programCourses() {
    results.textContent = "";
    filteredProgramming = [];
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].subject == "CSE") {
            filteredProgramming.push(courses[i].credits);
            let details = document.createElement("p");
            if (courses[i].completed) {
                details.className = "completed";
            } else {
                details.className = "pending"
            }
            details.textContent = `${courses[i].subject} ${courses[i].number}`;
            results.appendChild(details);
        }
    }
    let totalProgramCredits = document.createElement("p")
    totalProgramCredits.textContent = `total credits of listed courses is ${filteredProgramming.reduce(myCredits, 0)}`;
    results.appendChild(totalProgramCredits)

        legendCompleteText.textContent = (" = Complete");
    legendCompleteWrapper.id = ("completeWrapper");
    legendCompleteWrapper.appendChild(legendComplete);
    legendCompleteWrapper.appendChild(legendCompleteText);
    legendComplete.id = ("courseComplete");
    results.appendChild(legendCompleteWrapper);

    legendPending.id = ("coursePending");
    legendPendingText.textContent = (" = Pending");
    legendPendingWrapper.id = ("pendingWrapper")
    legendPendingWrapper.appendChild(legendPending)
    legendPendingWrapper.appendChild(legendPendingText);
    results.appendChild(legendPendingWrapper);
}

function myCredits(total, num) {
    return total + num;
}


