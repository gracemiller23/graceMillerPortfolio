//stores information to display
const comingContent = "<h3> Sample Coming Soon </h3> <p> I'm currently working to organize and load samples of my development work to the site. Thank you for your patience!</p>";
const comingImage = "https://via.placeholder.com/350x150";

const portfolio = {

    html: {
        content: `<h3>My Portfolio</h3><p>I started learning HTML as a senior in college, when I built my first website for my senior portfolio. Want to see a sample? You're looking at it. While I used Bootstrap on this site, I also customized it extensively.</p>`,
        image: `${comingImage}`,
        percent: "100"
    },
    css: {
        content: `<h3>Writing Page Animation</h3><p>As most developers do, I learned CSS simultaneously with HTML. CSS has grown in some incredible ways over the years, with exciting options like animations. I built the CSS for this site, and I've also used CSS to <a href='http://gpdconstruction.com'>extensively customize WordPress Themes.</a></p>`,
        image: `${comingImage}`,
        percent: "90"
    },
    javascript: {
        content: `<h3>A Tabbed Display</h3><p>The tabbed display you see on this page works across multiple rows using the values stored in these buttons. You can see the code for it <a href='https://github.com/gracemiller23/graceMillerPortfolio/blob/master/assets/js/portfolio.js'>here.</a> You can also see some basic form validation work <a href='https://github.com/gracemiller23/graceMillerPortfolio/blob/master/assets/js/contactValidation.js'>here</a>.</p>`,
        image: `${comingImage}`,
        percent: "70"
    },
    jquery: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "70"
    },
    bootstrap: {
        content: `<h3>You're Looking at It</h3><p>For a sample of my Bootstrap work, look no further than this portfolio. While I regularly used Bootstrap during my coding boot camp, I was often more focused on learning new coding skills than creating intensive designs. While working on this site, I had more time to polish and implement all of the Bootstrap knowledge I built throughout the course.</p>`,
        image: `${comingImage}`,
        percent: "100"
    },
    handlebars: {
        content: `<h3>PTSD App</h3><p>During my coding boot camp, I worked with a group to create a hypothetical online community for veterans with PTSD. I created the Handlebars views for the event-related portions of the site and utilized custom helpers. You can view the code <a href="https://github.com/gracemiller23/project-2-refactor">here</a> and the app <a href="https://powerful-gorge-39602.herokuapp.com">here</a>(use username "gmportfolio@test.com" and password "gmportfolio"). It is still a work in progress as I work to refactor my code and add new components.</p>`,
        image: `${comingImage}`,
        percent: "60"
    },
    responsivedesign: {
        content: `<h3>Flexbox & Bootstrap</h3><p>Throughout my portfolio, you will see responsive design elements. While I used Bootstrap to achieve most of these effects, I am also comfortable using flexbox.</p>`,
        image: `${comingImage}`,
        percent: "100"
    },
    mysql: {
        content: `<h3>PTSD App</h3><p>During my coding boot camp, I worked with a group to create a hypothetical 
        online community for veterans with PTSD. I created the events portion of the project, which allows users to create, edit, and delete events, as well as their attendance of and comments on an event. 
        You can view the code <a href="https://github.com/gracemiller23/project-2-refactor">here</a> 
        and the app <a href="https://powerful-gorge-39602.herokuapp.com">here</a>
        (use username "gmportfolio@test.com" and password "gmportfolio"). 
        It is still a work in progress as I work to refactor my code and add new components, including a zip code search for nearby events.</p>`,
        image: `${comingImage}`,
        percent: "75"
    },
    mongodb: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "75"
    },
    sequelize: {
        content: `<h3>PTSD App</h3><p>During my coding boot camp, 
        I worked with a group to create a hypothetical online community for veterans with PTSD. 
        I created the Sequelize models and interactions for the events portion of the site. You can view the code <a href="https://github.com/gracemiller23/project-2-refactor">here</a> and the app <a href="https://powerful-gorge-39602.herokuapp.com">here</a>(use username "gmportfolio@test.com" and password "gmportfolio"). It is still a work in progress as I work to refactor my code and add new components.</p>`,
        image: `${comingImage}`,
        percent: "75"
    },
    mongoose: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "75"
    },
    nodejs: {
        content: `<h3>PTSD App</h3><p>During my coding boot camp, I worked with a group to create a hypothetical online community for veterans with PTSD that is powered by Node. I created the the event-related portions of the site and utilized custom helpers. You can view the code <a href="https://github.com/gracemiller23/project-2-refactor">here</a> and the app <a href="https://powerful-gorge-39602.herokuapp.com">here</a>(use username "gmportfolio@test.com" and password "gmportfolio"). It is still a work in progress as I work to refactor my code and add new components.</p>`,
        image: `${comingImage}`,
        percent: "50"
    },
    apis: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "90"
    },
    expressserver: {
        content: `<h3>PTSD App</h3><p>During my coding boot camp, I worked with a group to create a hypothetical online community for veterans with PTSD. I helped configure portions of the express server, such as the incorporation of Handlebars as the view engine. You can view the code <a href="https://github.com/gracemiller23/project-2-refactor">here</a> and the app <a href="https://powerful-gorge-39602.herokuapp.com">here</a>(use username "gmportfolio@test.com" and password "gmportfolio"). It is still a work in progress as I work to refactor my code and add new components.</p>`,
        image: `${comingImage}`,
        percent: "40"
    },
    userauthentication: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "35"
    },
    react: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "45"
    },
    php: {
        content: `<h3>Contact Form</h3><p>While I'm still learning how to overlay the programming principles I learned through my boot camp onto PHP, an example of an early piece of work is <a href='././contact.html'>my contact form</a>. I built it using bits of information and code from around the web to achieve my desired effects.</p>`,
        image: `${comingImage}`,
        percent: "20"
    },
    wordpress: {
        content: `<h3>Themes & Plugins Coming Soon</h3><p>WordPress is actually what really sparked my interest in making the leap to web development. I created child themes and customized them in the past, and I often found that the plugins I needed were unavailable. Queue my desire to just do it myself. You can see themes I've customized <a href='https://spousehood.com'>here</a> and <a href='http://gpdconstruction.com'>here</a>. In the next few weeks I'll be loading a custom theme I created.</p>`,
        image: `${comingImage}`,
        percent: "20"
    },
    sass: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "20"
    }
};
//the idNum argument below allows you to use the same function to have multiple button group rows with different display rows.
function expandMe(idNum) {
    //combine an identifying number with base id-names for the containing
    //div, as well as the display two columns
    let idName = `display-row${idNum}`;
    let colContentId = `display-col-content${idNum}`;
    let colImgId = `display-col-img${idNum}`;

    //store the topic that each button should call in its value and use it here
    let retrieve = event.target.value;

    //gather information about the row to later determine if it needs to be shown and if another row needs to be hidden
    let idElement = document.querySelector(`#${idName}`);
    let targetClassName = idElement.className;
    let displayValue = idElement.style.display;
    let dataCurrentValue = idElement.getAttribute("data-current");

    //if the display div is already visible for this button, hide it on second click
    if (displayValue === "flex" && retrieve === dataCurrentValue) {
        console.log("I went with the first option...")
        idElement.setAttribute("style", "display:none;");
        document.getElementById(colContentId).innerHTML = "";
        document.getElementById(colImgId).innerHTML = "";
        let buttons = document.getElementsByTagName("button");
        event.target.setAttribute("id", "");

    //else show the display div with the matching content from the js object
    } else {

        //remove current-button id from another button, if there is one with that id
        let prevButton = document.getElementById("current-button");

        if (prevButton !== null) {
            prevButton.setAttribute("id", "");

        }

        //set the targeted button's id to current-button
        event.target.setAttribute("id", "current-button");

        //make sure correct display row is showing, if not, close previous row
        if (targetClassName !== "row current-row") {

            //find the row that has the class "current-row"
            let prevRow = document.querySelector(`.current-row`);
            console.log(prevRow);

            //get that row's class names and split them into an array so the new class name can preserve "row"
            let oldRowClass = prevRow.className;
            
            let oldRowClassArray = oldRowClass.split(" ");
            let removableClassIndex = oldRowClassArray.indexOf("current-row");
            oldRowClassArray.splice(removableClassIndex, 1);
            let newRowClass = oldRowClassArray.join(" ");

            //set the row's class to exclude "current-row" and hide the row
            prevRow.setAttribute("style", "display:none");
            prevRow.setAttribute("class", newRowClass);


        }

        //after old display row is hidden, display new row
        idElement.setAttribute("style", "display:flex;");
        idElement.setAttribute("data-current", retrieve);
        //get the element's classes and check to see if they already include current-row, so that they aren't altered when adding current-row.
        let elementClass = idElement.className;
            if(!elementClass.includes("current-row")){
            elementClass += " current-row"
            }
        idElement.setAttribute("class", elementClass);

        //change the content of the display row using info stored in array
        let htmlContent = `<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow=${portfolio[retrieve].percent} aria-valuemin="0" aria-valuemax="100" style="width: ${portfolio[retrieve].percent}%"></div></div>`;
        
        htmlContent += portfolio[retrieve].content;
        document.getElementById(colContentId).innerHTML =
            htmlContent;
        document.getElementById(colImgId).innerHTML =
            "<img src=" + portfolio[retrieve].image + " alt='alt' style='height: 100px; width:auto;'>";
        idElement.scrollIntoView(false);
    }

}
