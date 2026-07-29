// UpLift User Data System


let userData = {


    xp: 0,


    level: 1,


    streak: 0,


    workoutsCompleted: 0,


    checklistCompleted: 0,


    completedWorkouts: [],


    unlockedBadges: [],


    lastWorkoutDate: null


};




// Save user progress

function saveUserData() {


    localStorage.setItem(

        "upliftData",

        JSON.stringify(userData)

    );


}




// Load saved progress

function loadUserData() {


    const savedData = localStorage.getItem("upliftData");


    if (savedData) {


        userData = JSON.parse(savedData);


    }


}




// Reset all progress

function resetProgress() {


    const confirmReset = confirm(
        "Are you sure you want to reset all UpLift progress?"
    );


    if (confirmReset) {


        localStorage.removeItem("upliftData");


        location.reload();


    }


}




loadUserData();
