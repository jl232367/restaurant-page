/*
This function should generate a home page for the site
*/
//import {contactGen} from "./contactPage"
//import {clearPage} from "./index"
const homePageGen = () => {
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
    markUpcontent.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero leo, maximus quis eleifend sed, vestibulum vitae lorem. Nam fermentum mollis sem, ut tristique augue lobortis et. Sed ac fringilla diam. Maecenas feugiat nisl et dapibus blandit. Donec ac lorem nec ex dapibus viverra. Pellentesque viverra nec ligula id pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget tempus eros. Etiam egestas lectus in lorem consectetur volutpat. Morbi lobortis vel risus quis lacinia. Nullam et arcu nec ligula posuere aliquam. Fusce et rutrum diam. Aliquam eleifend laoreet quam, id consequat nibh rutrum at. Fusce congue erat id dictum feugiat."
    
    
    
}

export {homePageGen}


/*
<div class="banner">
                <h1 id="headline">AWESOME!</h1>
            </div>
            <div id="markup">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero leo, maximus quis eleifend sed, vestibulum vitae lorem. Nam fermentum mollis sem, ut tristique augue lobortis et. Sed ac fringilla diam. Maecenas feugiat nisl et dapibus blandit. Donec ac lorem nec ex dapibus viverra. Pellentesque viverra nec ligula id pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget tempus eros. Etiam egestas lectus in lorem consectetur volutpat. Morbi lobortis vel risus quis lacinia. Nullam et arcu nec ligula posuere aliquam. Fusce et rutrum diam. Aliquam eleifend laoreet quam, id consequat nibh rutrum at. Fusce congue erat id dictum feugiat.
                </p>
            </div>
*/