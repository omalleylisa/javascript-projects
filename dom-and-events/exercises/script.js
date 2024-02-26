function init() {
    const missionAbort = document.getElementById("abortMission");
    const liftoffButton = document.getElementById("liftoffButton");
    const statusReport = document.getElementById("statusReport");

    liftoffButton.addEventListener('click', function() {
        statusReport.innerHTML = 'Houston! We have liftoff!';
    });

    missionAbort.addEventListener('click', function() {
        let confirmAbort = confirm("Are you sure you want to abort the mission?");
        if (confirmAbort) {
            statusReport.innerHTML = 'Mission aborted! Space shuttle returning home.';
        }
    });

    missionAbort.addEventListener('mouseover', function() {
        missionAbort.style.backgroundColor = 'red';
    });

    missionAbort.addEventListener('mouseout', function() {
        missionAbort.style.backgroundColor = ''; 
    });
}

window.addEventListener("load", init);
