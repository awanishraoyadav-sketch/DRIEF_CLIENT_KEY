
function changePrice(){
let value=document.getElementById('plan').value;
document.getElementById('price').innerHTML='₹'+value;
}

function verifyUTR(){
let utr=document.getElementById('utr').value;

if(utr.length<8){
alert('Enter Valid UTR');
return;
}

document.getElementById('success').classList.remove('hidden');
}

function generateKey(){

let chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let key='';

for(let i=0;i<16;i++){
key += chars[Math.floor(Math.random()*chars.length)];
}

document.getElementById('key').innerHTML=key;
document.getElementById('keyBox').classList.remove('hidden');
}

function copyKey(){
navigator.clipboard.writeText(document.getElementById('key').innerText);
alert('Key Copied');
}

setInterval(()=>{
document.getElementById('players').innerHTML=Math.floor(Math.random()*5000)+1000;
},3000);
