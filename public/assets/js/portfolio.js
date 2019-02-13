//stores information to display
const comingContent = "<h3> Sample Coming Soon </h3> <p> I'm currently working to organize and load samples of my development work to the site. Thank you for your patience!</p>";
const comingImage ="https://via.placeholder.com/350x150";
const portfolio = {
    
    html:{
        content:`<p>I started learning HTML as a senior in college, when I built my first website for my senior portfolio. While the website didn't last, the knowledge did. When I returned to coding throughout my writing and editing career, I kept up with evolving standards for HTML5.`,
        image: `${comingImage}`,
        percent: "100"
    },
    css:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent: "90"
    },
    javascript:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent: "70"
    },
    jquery:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent: "70"
    },
    bootstrap:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent: "100"
    },
    handlebars:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent: "60"
    },
    responsivedesign:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent: "100"
    },
    mysql:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent: "75"
    },
    mongodb:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent: "75"
    },
    sequelize:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent: "75"
    },
    mongoose:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent: "75"
    },
    nodejs:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent: "50"
    },
    apis:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent: "90"
    },
    expressserver:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent: "40"
    },
    userauthentication:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent: "35"
    },
    react:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent: "45"
    },
    php:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent:"20"
    },
    wordpress:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent:"20"
    },
    sass:{
        content:`${comingContent}`,
        image: `${comingImage}`,
        percent:"20"
    }
};
//the idNum argument below allows you to use the same function to affect different divs with different buttons on the same page
function expandMe(idNum) {
    //combine an identifying number with base id-names for the containing
    //div, as well as the two columns
    let idName = `display-row${idNum}`;
    let colContentId = `display-col-content${idNum}`;
    let colImgId = `display-col-img${idNum}`;
    console.log(event.target);
    //store the topic that each button should call in its value and use it here
    let retrieve = event.target.value;
    let idElement = document.getElementById(idName);
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
        //add code to remove current-button id from other element get element with that id and remove it
        let prevButton = document.getElementById("current-button");
        console.log(prevButton);
        if(prevButton !== null){
            prevButton.setAttribute("id", "");
        }
        event.target.setAttribute("id", "current-button");
        idElement.setAttribute("style", "display:flex;");
        idElement.setAttribute("data-current", retrieve);
        let htmlContent= portfolio[retrieve].content;
        htmlContent += `<div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow=${portfolio[retrieve].percent} aria-valuemin="0" aria-valuemax="100" style="width: ${portfolio[retrieve].percent}%"></div></div>`

        document.getElementById(colContentId).innerHTML =
             htmlContent;
        document.getElementById(colImgId).innerHTML =
            "<img src=" + portfolio[retrieve].image + " alt='alt' style='height: 100px; width:auto;'>";
            idElement.scrollIntoView(false);
        }

}
