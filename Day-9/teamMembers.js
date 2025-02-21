/* Scenario 3: Team Member Profiles
Create a page to display profiles of team members. Each profile should include:

Name
Role (e.g., Developer, Designer)
Skills (listed as bullet points)
Profile Picture
Practice Goals:

Use Flexbox (d-flex) for alignment.
Ensure the profile cards are responsive and center-aligned on all screen sizes.
Use a modal to display more details about a team member when a "View Details" button is clicked. */



const teamMembers = [
    {
        name: "Alice Johnson",
        role: "Frontend Developer",
        skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
        image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
        name: "Bob Smith",
        role: "Backend Developer",
        skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Python"],
        image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
        name: "Charlie Davis",
        role: "UI/UX Designer",
        skills: ["Figma", "Adobe XD", "Wireframing", "User Research"],
        image: "https://randomuser.me/api/portraits/men/47.jpg"
    },
    {
        name: "Diana Lee",
        role: "Mobile App Developer",
        skills: ["Flutter", "Dart", "Firebase", "Android", "iOS"],
        image: "https://randomuser.me/api/portraits/women/48.jpg"
    },
    {
        name: "Ethan White",
        role: "DevOps Engineer",
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
        image: "https://randomuser.me/api/portraits/men/49.jpg"
    },
    {
        name: "Fiona Brown",
        role: "Data Scientist",
        skills: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"],
        image: "https://randomuser.me/api/portraits/women/50.jpg"
    }
];
console.table(teamMembers);

const teamList = document.getElementById("team");

if (teamMembers.length === 0) {
    teamList.innerHTML = '<p class="text-center mt-5">No Members available</p>';
} else {

    const members = teamMembers.map(team => {
        return `
        <div class="col">
    <div class="card text-center cards">
        <img src="${team.image}" class="card-img-top rounded-circle mx-auto mt-3 p-3" alt="${team.name}">
        <div class="card-body">
            <h5 class="card-title">${team.name}</h5>
            <p class="card-text">${team.role}</p>
            <ul class="list-group list-group-flush">

            ${team.skills.map(skill => `<li class="list-group-item">${skill}</li>`)}
            </ul>
            <a href="#" class="btn btn-primary mt-3">View Details</a>
        </div>
    </div>
</div>

    `;
    });

    teamList.innerHTML = members.join('');
}

