(()=>{"use strict";const e=()=>{const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h1"),i=document.createElement("div"),a=document.createElement("p");e.appendChild(t),e.appendChild(i),t.appendChild(n),i.appendChild(a),t.setAttribute("class","banner"),n.setAttribute("id","headline"),i.setAttribute("id","markup"),n.innerHTML="AWESOME!",a.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero leo, maximus quis eleifend sed, vestibulum vitae lorem. Nam fermentum mollis sem, ut tristique augue lobortis et. Sed ac fringilla diam. Maecenas feugiat nisl et dapibus blandit. Donec ac lorem nec ex dapibus viverra. Pellentesque viverra nec ligula id pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eget tempus eros. Etiam egestas lectus in lorem consectetur volutpat. Morbi lobortis vel risus quis lacinia. Nullam et arcu nec ligula posuere aliquam. Fusce et rutrum diam. Aliquam eleifend laoreet quam, id consequat nibh rutrum at. Fusce congue erat id dictum feugiat."};console.log("some text here so I know something is happening, maybe");const t=()=>{const i=document.getElementById("content"),a=document.createElement("div"),d=document.createElement("button"),l=document.createElement("button"),r=document.createElement("button");i.appendChild(a),a.appendChild(d),a.appendChild(l),a.appendChild(r),a.setAttribute("id","menuBar"),d.setAttribute("id","homeBtn"),l.setAttribute("id","contactBtn"),r.setAttribute("id","resMenuBtn"),d.innerHTML="Home",l.innerHTML="Contact",r.innerHTML="Menu",d.addEventListener("click",(()=>{n(),t(),e()})),l.addEventListener("click",(()=>{n(),t(),(()=>{const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h1"),i=document.createElement("div"),a=document.createElement("p");e.appendChild(t),e.appendChild(i),t.appendChild(n),i.appendChild(a),t.setAttribute("class","banner"),n.setAttribute("id","headline"),i.setAttribute("id","markup"),n.innerHTML="AWESOME!",a.innerHTML="Contact us:  Phone: 555-555  Email: someEmail@email.com  Address: 101 noWhere Anywhere someState 11111"})()})),r.addEventListener("click",(()=>{n(),t(),(()=>{const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h1"),i=document.createElement("div"),a=document.createElement("p");e.appendChild(t),e.appendChild(i),t.appendChild(n),i.appendChild(a),t.setAttribute("class","banner"),n.setAttribute("id","headline"),i.setAttribute("id","markup"),n.innerHTML="AWESOME!",a.innerHTML="Steak, potatoes, some other items, I will make this better later"})()}))};t(),e();const n=()=>{const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild)}})();