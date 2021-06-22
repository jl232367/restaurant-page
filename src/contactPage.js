/* 
This contains a basic function to generat the contact page for the restaurant page
*/
//import { clearPage} from "./homePageGen";
//import { homePageGen } from "./homePageGen";
//import { clearPage } from "./index";
const contactGen = () => {
    //clearPage();
    const content = document.getElementById("content");
    
    const banner = document.createElement("div");
    const awesome = document.createElement("h1");
    const markUp = document.createElement("div");
    const markUpcontent = document.createElement("p");

    content.appendChild(banner);
    content.appendChild(markUp);
    banner.appendChild(awesome);
    markUp.appendChild(markUpcontent);
    banner.setAttribute('class', "banner");
    awesome.setAttribute('id', "headline");
    markUp.setAttribute('id', "markup");
    
    awesome.innerHTML = "AWESOME!";
    markUpcontent.innerHTML = "Contact us:  Phone: 555-555  Email: someEmail@email.com  Address: 101 noWhere Anywhere someState 11111"
    
}

export {contactGen}