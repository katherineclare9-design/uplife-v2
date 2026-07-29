// UpLift App

const app = document.getElementById("app");


// Shows different app pages

function showPage(page) {


    if (page === "home") {


        app.innerHTML = `

            <h1>💖 UpLift</h1>

            <h2>Home</h2>

            <p>
                Lift Yourself Higher Every Day
            </p>


            <nav>

                <button onclick="showPage('home')">
                    🏠 Home
                </button>


                <button onclick="showPage('training')">
                    💪 Training
                </button>


                <button onclick="showPage('settings')">
                    ⚙️ Settings
                </button>


            </nav>

        `;


    }



    if (page === "training") {


        app.innerHTML = `

            <h1>💪 Training</h1>

            <p>
                Your workouts will appear here.
            </p>


            <nav>

                <button onclick="showPage('home')">
                    🏠 Home
                </button>


                <button onclick="showPage('training')">
                    💪 Training
                </button>


                <button onclick="showPage('settings')">
                    ⚙️ Settings
                </button>


            </nav>

        `;


    }



    if (page === "settings") {


        app.innerHTML = `

            <h1>⚙️ Settings</h1>

            <p>
                Your settings will appear here.
            </p>


            <nav>

                <button onclick="showPage('home')">
                    🏠 Home
                </button>


                <button onclick="showPage('training')">
                    💪 Training
                </button>


                <button onclick="showPage('settings')">
                    ⚙️ Settings
                </button>


            </nav>

        `;


    }


}


// Start app

showPage("home");
