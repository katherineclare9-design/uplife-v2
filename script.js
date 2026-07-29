// UpLift Prototype 1

const app = document.getElementById("app");


function showPage(page) {


    let content = "";


    if (page === "home") {

        content = `

        <h1>💖 UpLift</h1>

        <h2>🏠 Home</h2>


        <div class="card">

            <h3>⭐ Level 1</h3>

            <p>0 XP</p>

        </div>


        <div class="card">

            <h3>🔥 Daily Streak</h3>

            <p>0 Days</p>

        </div>


        `;

    }



    if (page === "training") {

        content = `

        <h1>💪 Training</h1>


        <div class="card">

            <h3>🏋️ Strength</h3>

            <p>Strength workouts</p>

        </div>


        <div class="card">

            <h3>📣 Cheer</h3>

            <p>Cheer workouts</p>

        </div>


        <div class="card">

            <h3>🤸 Flexibility</h3>

            <p>Flexibility workouts</p>

        </div>

        `;

    }



    if (page === "checklist") {

        content = `

        <h1>✅ Checklist</h1>

        <div class="card">

            <p>☐ Workout</p>

            <p>☐ Water Goal</p>

            <p>☐ Nutrition Goal</p>

        </div>

        `;

    }



    if (page === "badges") {

        content = `

        <h1>🏅 Badges</h1>

        <div class="card">

        <p>Badge collection coming soon</p>

        </div>

        `;

    }



    if (page === "diary") {

        content = `

        <h1>📖 Diary</h1>

        <div class="card">

        <p>Weekly well check coming soon</p>

        </div>

        `;

    }



    if (page === "profile") {

        content = `

        <h1>👤 Profile</h1>

        <div class="card">

        <p>Your stats will appear here</p>

        </div>

        `;

    }



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
