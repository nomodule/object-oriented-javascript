// Person class
function Person(firstname, surname, gender, dob, interests, type) {
    const dobArray = dob.split("/");
    const day = dobArray[0];
    const month = dobArray[1];
    const year = dobArray[2];

    this.name = {
        firstname,
        surname
    };
    this.gender = gender;
    this.dob = {
        day,
        month,
        year
    };
    this.interests = interests;
    this.type = type || "person";
}

// Teacher Class
function Teacher(firstname, surname, gender, dob, interests, type, subject) {
    Person.call(this, firstname, surname, gender, dob, interests, type);
    if (!subject) throw "Please specify subject!";
    this.subject = subject;

    // After making it store it in localStorage
    storeHuman(this);
}

function bio(obj) {
    let interestsStr = "";
    let interests = obj.interests;

    for (let i = 0; i < interests.length; i++) {
        if (interests.indexOf(interests[i]) < interests.length - 1) {
            if (interests.indexOf(interests[i]) == interests.length - 2) {
                interestsStr += interests[i];
            } else {
                interestsStr += interests[i] + ", ";
            }
        } else {
            interestsStr += " and " + interests[i] + ".";
        }
    }

    return `Hi I am ${obj.name.firstname}, I am a teacher and I teach ${
        obj.subject
    }. I like ${interestsStr}`;
};

// Student class
function Student(firstname, surname, gender, dob, interests, type) {
    Person.call(this, firstname, surname, gender, dob, interests, type);

    // After making it store it in localStorage
    storeHuman(this);
}

// store humans in localStorage function
const humans = [];
function storeHuman(person) {
    humans.push(person);
    if (!(localStorage.humans === null || localStorage.humans === undefined)) {
        let tempHumans = JSON.parse(localStorage.getItem("humans"));
    }
    localStorage.setItem("humans", JSON.stringify(humans));
}

// humans age calulator function
function calulateAge(year) {
    const currentYear = new Date().getFullYear();
    const age = year - currentYear;
    return Math.abs(age);
}

// render humnans in DOM
function render() {
    const teachersCardsContainer = document.querySelector(
        ".teachers__card .cards__container"
    );
    const studentsCardsContainer = document.querySelector(
        ".students__card .cards__container"
    );

    const humansRawData = localStorage.getItem("humans");
    const humansArr = JSON.parse(humansRawData);

    for (let i = 0; i < humansArr.length; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = "";

        const humanName = document.createElement("h2");
        humanName.textContent =
            humansArr[i].name.firstname + " " + humansArr[i].name.surname;

        const humanGender = document.createElement("p");
        humanGender.textContent = humansArr[i].gender;
        humansArr[i].gender;

        const humanAge = document.createElement("p");
        humanAge.textContent =
            calulateAge(humansArr[i].dob.year) + " years old.";

        card.appendChild(humanName);
        card.appendChild(humanGender);
        card.appendChild(humanAge);

        if (humansArr[i].type === "teacher") {
            const humanSubject = document.createElement("p");
            humanSubject.textContent = humansArr[i].subject;
            card.appendChild(humanSubject);

            const humanBio = document.createElement('p');
            humanBio.textContent = bio(humansArr[i]);

            card.appendChild(humanBio);
        } else {
            studentsCardsContainer.appendChild(card);
        }

        if (humansArr[i].type === "teacher") {
            teachersCardsContainer.appendChild(card);
        }
    }
}

// DOM ELEMENTS
const toggler = document.getElementById("toggler");
const togglerTarget = document.querySelector(".app-header h1 span");

toggler.addEventListener("click", function() {
    if (togglerTarget.textContent === "Teacher") {
        togglerTarget.textContent = "Student";
    } else {
        togglerTarget.textContent = "Teacher";
    }

    console.log(togglerTarget);
});

// make humans
const ajay = new Student(
    "Ajay",
    "Rawat",
    "Male",
    "07/07/1996",
    ["cooking", "Skating", "Singing"],
    "student"
);
const surjeet = new Student(
    "Surjeet",
    "Singh",
    "Male",
    "05/03/1992",
    ["Dancing", "Skating", "Travling"],
    "student"
);
const ram = new Teacher(
    "Ram",
    "Mohan",
    "Male",
    "02/02/1989",
    ["Playing", "Juggling"],
    "teacher",
    "Mathematics"
);
new Student(
    "Rajan",
    "Bhandari",
    "Male",
    "03/05/1996",
    ["Sakting", "Reading"],
    "student"
);

// after storing humans render them inside DOM
render();
