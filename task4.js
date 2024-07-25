const b = document.body;
const div = document.createElement("div");
div.style.backgroundImage = "url('https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=1380&t=st=1705607469~exp=1705608069~hmac=278471867b312bc0088e9ffac7a2f27addf229e5e57bacefa17334eee38448ad')";
div.style.margin = 'auto';
div.style.backgroundRepeat = 'no-repeat';
div.style.height = '800px';
div.style.width = '500px';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.justifyContent = 'flex-end'; 
b.appendChild(div);

const div1 = document.createElement("div");
div1.style.backgroundColor = '#f6c56e';
div1.style.borderRadius = '10px 10px 0px 0px';
div1.style.display = 'flex';
div1.style.flexDirection = 'column';
div1.style.justifyContent = 'center';
div1.style.padding = '20px'; 
div1.style.width = '460px'; 
div.appendChild(div1);

const h = document.createElement("h1");
h.innerText = 'Happy Meals';
h.style.fontFamily = 'Bree Serif';
div1.appendChild(h);

const p = document.createElement("p");
p.innerText = 'Discover the best foods over the 1,000 restaurants';
p.style.fontFamily = 'Roboto';
div1.appendChild(p);

const button = document.createElement("button");
button.innerText = 'Book Now';
button.style.fontFamily = 'Roboto';
button.style.backgroundColor = '#ffffff';
button.style.borderRadius = '10px';
button.style.width = '100px'
button.style.padding  = '10px 5px 10px 5px'
button.style.borderColor = 'white'
button.style.textAlign = 'center';
div1.appendChild(button);
