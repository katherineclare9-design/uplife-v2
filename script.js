// UpLift Prototype 1


const app = document.getElementById("app");



function showPage(page) {


    let content = "";



    // HOME

    if (page === "home") {


        content = `


        <h1>💖 UpLift</h1>

        <h2>🏠 Home</h2>



        <div class="card">

            <h3>⭐ Level ${userData.level}</h3>

            <p>

            ${userData.xp} XP

            </p>

        </div>



        <div class="card">

            <h3>🔥 Daily Streak</h3>

            <p>

            ${userData.streak} Days

            </p>

        </div>



        <div class="card">

            <h3>💪 Workouts Completed</h3>

            <p>

            ${userData.workoutsCompleted}

            </p>

        </div>



        <div class="card">

            <h3>☑️ Daily Progress</h3>

            <p>

            ${userData.checklistCompleted}/4 Tasks Complete

            </p>

        </div>



        `;


    }




    // TRAINING

    if (page === "training") {


        const days = [

            "Sunday",

            "Monday",

            "Tuesday",

            "Wednesday",

            "Thursday",

            "Friday",

            "Saturday"

        ];



        const today = days[new Date().getDay()];


        const workout = dailyWorkouts[today];



        content = `



        <h1>💪 Training</h1>


        <h2>Today's Workout: ${today}</h2>




        <div class="card">


            <h3>🌅 Morning</h3>


            ${workout.morning.map(workoutItem => `


                <p>

                ☐ ${workoutItem}

                </p>


            `).join("")}



        </div>





        <div class="card">


            <h3>🌙 Nighttime</h3>



            ${workout.nighttime.map(workoutItem => `


                <p>

                ☐ ${workoutItem}

                </p>


            `).join("")}



        </div>




        `;


    }





    // CHECKLIST

    if (page === "checklist") {


        content = `


        <h1>✅ Daily Checklist</h1>


        <div class="card">


            <p>☐ Complete Workout</p>

            <p>☐ Drink Water</p>

            <p>☐ Nutrition Goal</p>

            <p>☐ Mindset Check</p>


        </div>



        `;


    }





    // BADGES

    if (page === "badges") {


        content = `


        <h1>🏅 Badge Gallery</h1>


        <div class="card">


            <p>

            Locked badges will appear here.

            </p>


        </div>



        `;


    }





    // DIARY

    if (page === "diary") {


        content = `


        <h1>📖 Diary</h1>


        <div class="card">


            <p>

            Weekly Well Check every Monday.

            </p>


        </div>



        `;


    }





    // PROFILE

    if (page === "profile") {


        content = `


        <h1>👤 Profile</h1>


        <div class="card">


            <p>

            ⭐ Level: ${userData.level}

            </p>


            <p>

            XP: ${userData.xp}

            </p>


            <p>

            🔥 Streak: ${userData.streak}

            </p>


            <p>

            💪 Workouts Completed: ${userData.workoutsCompleted}

            </p>


        </div>



        `;


    }





    // SETTINGS

    if (page === "settings") {


        content = `


        <h1>⚙️ Settings</h1>


        <div class="card">


            <p>💖 Regular Mode</p>

            <p>🤍 Vacation Mode</p>

            <p>❤️ Period Mode</p>

            <p>🥗 ARFID Mode</p>


        </div>



        `;


    }





    app.innerHTML = content + `



    <div class="bottom-nav">



        <button onclick="showPage('home')">

        🏠<br>Home

        </button>




        <button onclick="showPage('training')">

        💪<br>Training

        </button>




        <button onclick="showPage('checklist')">

        ✅<br>Checklist

        </button>




        <button onclick="showPage('badges')">

        🏅<br>Badges

        </button>




        <button onclick="showPage('diary')">

        📖<br>Diary

        </button>




        <button onclick="showPage('profile')">

        👤<br>Profile

        </button>




        <button onclick="showPage('settings')">

        ⚙️<br>Settings

        </button>



    </div>



    `;


}




showPage("home");
