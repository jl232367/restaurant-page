

const menuPage = () => {
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
    markUpcontent.innerHTML = "Steak, potatoes, some other items, I will make this better later"
    
}

export {menuPage}