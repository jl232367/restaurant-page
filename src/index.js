import { homePageGen } from "./homePageGen"
import {contactGen} from './contactPage'
import { menuPage } from "./menuPage";
console.log("some text here so I know something is happening, maybe");
//clearPage;
//homePageGen;

const menuTabs = () => {
    const content = document.getElementById("content");
    const menuBar = document.createElement("div");
    const home = document.createElement("button");
    const contact = document.createElement("button");
    const resMenu = document.createElement("button");
    content.appendChild(menuBar);
    menuBar.appendChild(home);
    menuBar.appendChild(contact);
    menuBar.appendChild(resMenu);
    menuBar.setAttribute('id', "menuBar");
    home.setAttribute('id', "homeBtn");
    contact.setAttribute('id', "contactBtn");
    resMenu.setAttribute('id', "resMenuBtn"); 
    home.innerHTML = "Home";
    contact.innerHTML = "Contact";
    resMenu.innerHTML = "Menu";
    home.addEventListener('click', () => {
        clearPage();
        menuTabs();
        homePageGen();
    });
    contact.addEventListener('click', () => {
        clearPage();
        menuTabs();
        contactGen();
    });
    resMenu.addEventListener('click', () => {
        clearPage();
        menuTabs();
        menuPage();
    });
}
menuTabs();
homePageGen();
/*
This function should generate a home page for the site
*/



/*
<div class="banner">
                <h1 id="headline">AWESOME!</h1>
            </div>
            <div id="markup">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero leo, maximus quis eleifend sed, vestibulum vitae lorem. Nam fermentum mollis sem, ut tristique augue lobortis et. Sed ac fringilla diam. Maecenas feugiat nisl et dapibus blandit. Donec ac lorem nec ex dapibus viverra. Pellentesque viverra nec ligula id pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget tempus eros. Etiam egestas lectus in lorem consectetur volutpat. Morbi lobortis vel risus quis lacinia. Nullam et arcu nec ligula posuere aliquam. Fusce et rutrum diam. Aliquam eleifend laoreet quam, id consequat nibh rutrum at. Fusce congue erat id dictum feugiat.
                </p>
            </div>


function homePageGen() {
    const content = document.getElementById("content");
    const menuBar = document.createElement("div");
    const home = document.createElement("button");
    const contact = document.createElement("button");
    const resMenu = document.createElement("button");
    const banner = document.createElement("div");
    const awesome = document.createElement("h1");
    const markUp = document.createElement("div");
    const markUpcontent = document.createElement("p");
    content.appendChild(menuBar);
    menuBar.appendChild(home);
    menuBar.appendChild(contact);
    menuBar.appendChild(resMenu)
    content.appendChild(banner);
    content.appendChild(markUp);
    banner.appendChild(awesome);
    markUp.appendChild(markUpcontent);
    banner.setAttribute('class', "banner");
    awesome.setAttribute('id', "headline");
    markUp.setAttribute('id', "markup");
    menuBar.setAttribute('id', "menuBar");
    home.setAttribute('id', "homeBtn");
    contact.setAttribute('id', "contactBtn");
    resMenu.setAttribute('id', "resMenuBtn"); 
    home.innerHTML = "Home";
    contact.innerHTML = "Contact";
    resMenu.innerHTML = "Menu";
    awesome.innerHTML = "AWESOME!";
    markUpcontent.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero leo, maximus quis eleifend sed, vestibulum vitae lorem. Nam fermentum mollis sem, ut tristique augue lobortis et. Sed ac fringilla diam. Maecenas feugiat nisl et dapibus blandit. Donec ac lorem nec ex dapibus viverra. Pellentesque viverra nec ligula id pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget tempus eros. Etiam egestas lectus in lorem consectetur volutpat. Morbi lobortis vel risus quis lacinia. Nullam et arcu nec ligula posuere aliquam. Fusce et rutrum diam. Aliquam eleifend laoreet quam, id consequat nibh rutrum at. Fusce congue erat id dictum feugiat."
    home.addEventListener('click', homePageGen);
    contact.addEventListener('click', homePageGen);
    resMenu.addEventListener('click', homePageGen);
    
    
}
*/

const clearPage = () => {
    const contentToClear = document.getElementById("content");
    while (contentToClear.firstChild) {
        contentToClear.removeChild(contentToClear.firstChild);
    }
}
export {clearPage}

// console.log("Hello! I executed, hope!")