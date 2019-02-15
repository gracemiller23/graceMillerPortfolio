//stores information to display
const comingContent = "<h3> Sample Coming Soon </h3> <p> I'm currently working to organize and load samples of my development work to the site. Thank you for your patience!</p>";
const comingImage = "https://via.placeholder.com/350x150";

const portfolio = {

    html: {
        content: `<p>I started learning HTML as a senior in college, when I built my first website for my senior portfolio. While the website didn't last, the knowledge did. When I returned to coding throughout my writing and editing career, I kept up with evolving standards for HTML5.`,
        image: `${comingImage}`,
        percent: "100"
    },
    css: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "90"
    },
    javascript: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "70"
    },
    jquery: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "70"
    },
    bootstrap: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "100"
    },
    handlebars: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "60"
    },
    responsivedesign: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "100"
    },
    mysql: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "75"
    },
    mongodb: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "75"
    },
    sequelize: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "75"
    },
    mongoose: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "75"
    },
    nodejs: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "50"
    },
    apis: {
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "90"
    },
    expressserver: {
        content: `${comingContent}`,
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
        content: `${comingContent}`,
        image: `${comingImage}`,
        percent: "20"
    },
    wordpress: {
        content: `${comingContent}`,
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
