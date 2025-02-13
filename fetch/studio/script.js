window.addEventListener("load", function () {
  const container = document.getElementById("container");

  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
 ).then(function (response) {
    response.json().then(function (data) {
      data.sort((a, b) => {
        return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
      });

      for (let i = 0; i < data.length; i++) {
        let astronaut = data[i];
        let activeStatus = astronaut.active ? "Yes" : "No";
        let skillsList = astronaut.skills.join(", ");

        container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${activeStatus}</li>
                        <li>Skills: ${skillsList}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                </div>
                `;
      }
    });
  });
});
