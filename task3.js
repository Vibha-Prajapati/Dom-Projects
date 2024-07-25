const b = document.body;
const div = document.createElement("div");
div.className = 'bimage';
b.appendChild(div);

div.style.display = 'flex';
div.style.flexDirection = 'column'; 
div.style.justifyContent = 'center';
div.style.backgroundImage = 'url("https://img.freepik.com/free-vector/stream-binary-code-design-vector_53876-166150.jpg?t=st=1719030218~exp=1719033818~hmac=41cf0e35f206d0a898b4ed7a72fa710c80363c3d42ad552900e13686b38080d3&w=740")';
div.style.backgroundSize = 'cover';
div.style.height = '100vh';
div.style.padding = '30px';
div.style.borderColor = '#48ee59';
div.style.borderWidth = '5px';
div.style.borderStyle = 'solid';

const h = document.createElement("h1");
h.className = 'top';
h.innerText = 'Code is more than some bytes in a file';
div.appendChild(h);

h.style.color = 'white';
h.style.fontFamily = 'Bree Serif';
h.style.backgroundColor = '#00000080';
h.style.padding = '15px';
h.style.fontSize = '30px';
