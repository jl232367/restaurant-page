import { homePageGen } from "./homePageGen";

const clearPage = () => {
    const contentToClear = document.getElementById("content");
    while (contentToClear.firstChild) {
        contentToClear.removeChild(contentToClear.firstChild);
    }
}


// console.log("Hello! I executed, hope!")