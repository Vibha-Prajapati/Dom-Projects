const b = document.body;
const div = document.createElement("div");
b.appendChild(div);
div.style.backgroundImage = 'url("https://i.pinimg.com/564x/c1/64/ad/c164adf837cfc1e5304c821dacc6106f.jpg")';
div.style.backgroundSize = 'cover';
div.style.height = '700px'; 
div.style.width = '600px';  
div.style.backgroundPosition = 'center'; 
div.style.margin = 'auto';
div.style.color = 'white';

const h = document.createElement("h1");
h.className = 'heading';
h.innerText = 'Chat';
div.appendChild(h);
h.style.backgroundColor = '#323f4b';
h.style.textAlign = 'center';
h.style.padding = '10px 0px 10px 0px';
h.style.fontSize = '20px';
h.style.fontFamily = 'Roboto';
h.style.fontFamily = 'bold';


const div1 = document.createElement("div");
div1.className = 'whole';
div.appendChild(div1);
div1.style.padding = '14px';
div1.style.fontFamily = 'Roboto';
div1.style.fontSize = '14px';


let p = document.createElement("p");
p.className = 'text-sent';
p.innerText = 'Hello, how are you?';
div1.appendChild(p);
p.style.backgroundColor = '#47a3f3';
p.style.padding = '12px';
p.style.borderRadius = '12px 12px 0px 12px';
p.style.textAlign = 'right';


let p1 = document.createElement("p");
p1.className = 'text-rec';
p1.innerText = 'Hi Varakumar, I am good. How are you?';
div1.appendChild(p1);
p1.style.backgroundColor = '#52606d';
p1.style.padding = '12px';
p1.style.borderRadius = '12px 12px 12px 0px';
p1.style.textAlign = 'left';

let p2 = document.createElement("p");
p2.className = 'text-sent';
p2.innerText = 'I`m fine. I am learning HTML and CSS.';
div1.appendChild(p2);
p2.style.backgroundColor ='#47a3f3';
p2.style.padding = '12px';
p2.style.borderRadius = '12px 12px 0px 12px';
p2.style.textAlign = 'right';


let p3 = document.createElement("p");
p3.className = 'text-rec';
p3.innerText = 'HTML and CSS?';
div1.appendChild(p3);
p3.style.backgroundColor = '#52606d';
p3.style.padding = '12px';
p3.style.borderRadius = '12px 12px 12px 0px';
p3.style.textAlign = 'left';

let p4 = document.createElement("p");
p4.className = 'text-sent';
p4.innerText = 'Yes, by doing projects parallelly, I am learning it.';
div1.appendChild(p4);
p4.style.backgroundColor ='#47a3f3';
p4.style.padding = '12px';
p4.style.borderRadius = '12px 12px 0px 12px';
p4.style.textAlign = 'right';

let p5 = document.createElement("p");
p5.className = 'text-rec';
p5.innerText = 'Awesome, can you tell how are you learning it?';
div1.appendChild(p5);
p5.style.backgroundColor = '#52606d';
p5.style.padding = '12px';
p5.style.borderRadius = '12px 12px 12px 0px';
p5.style.textAlign = 'left';


let p6 = document.createElement("p");
p6.className = 'text-sent';
p6.innerText = 'Can I call you?';
div1.appendChild(p6);
p6.style.backgroundColor ='#47a3f3';
p6.style.padding = '12px';
p6.style.borderRadius = '12px 12px 0px 12px';
p6.style.textAlign = 'right';

