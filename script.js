// Aquí editas precios y productos
const S=[
["promos","🔥 Promociones",null,[
["1 · Promo Papas Chicas","2 papas fritas chicas + 2 bebidas en lata","5.700"],
["2 · Promo Pollo Broaster","2 pollo broaster + Coca Cola 1.5L","15.800"],
["3 · Promo Perro Normal","2 perros calientes normales + 2 bebidas en lata","5.700"],
["4 · Promo Devoradora","2 salchipapas La Devoradora + Coca Cola 1.5L","17.500"],
["5 · Promo Italiano","2 completos italiano + 2 bebidas en lata","5.500"],
["6 · Promo Monstruosa","2 hamburguesas La Monstruosa + Coca Cola 1.5L","17.500"],
["7 · Promo Suprema de Pollo","2 hamburguesas La Suprema de Pollo + Coca Cola 1.5L","15.000"],
["8 · Promo Dúo","2 salchipapas clásicas + Coca Cola 1.5L","12.000"],
["9 · Promo Amanecer","2 hamburguesas clásicas + Coca Cola 1.5L","14.000"]]],
["hamb","🍔 Hamburguesas","Todas con opción de papas fritas o papas hilo.",[
["La Monstruosa","Lechuga, tomate, queso gouda, carne casera, pollo a la plancha, chorizo ahumado, tocino y salsas caseras","9.000"],
["La Tentación","Lechuga, tomate, queso gouda, carne casera, huevo frito, chorizo ahumado, tocino y salsas caseras","7.500"],
["La Rompe Dieta","Lechuga, tomate, queso gouda, pechuga de pollo a la plancha, chorizo ahumado, tocino y salsas caseras","7.500"],
["La Mixta","Lechuga, tomate, queso gouda, carne casera, pollo a la plancha, tocino y salsas caseras","7.500"],
["La Bogotá","Lechuga, tomate, queso gouda, carne casera, cebolla caramelizada, tocino y salsas caseras","7.000"],
["La Amanecer","Lechuga, tomate, queso gouda, carne casera, huevo frito y salsas caseras","6.000"],
["La Suprema Pollo","Lechuga, tomate, queso gouda, pechuga de pollo a la plancha, huevo frito y salsas caseras","6.500"],
["La Crunchy","Lechuga, tomate, queso gouda, pechuga de pollo a la plancha, tocino y salsas caseras","6.500"]]],
["salchi","🍟 Salchipapas",null,[
["La Devoradora","Papas fritas, salchicha, chorizo ahumado, filete de pollo largo, tocino, huevo frito y salsas caseras","8.000"],
["La Fundida","Papas fritas, queso cheddar fundido, salchicha, filete de pollo a la plancha y salsas caseras","7.500"],
["La Tracionera","Papas fritas, salchicha, chorizo ahumado, carne burger, huevo frito y salsas caseras","7.500"],
["La Vaquera","Papas fritas, salchicha, carne burger, tocino y salsas caseras","7.500"],
["La Brutal","Papas fritas, salchicha, chorizo, tocino, queso amarillo rallado y salsas caseras","7.500"],
["La Salchipapa","Papas fritas, salchicha y salsas caseras","5.000"]]],
["chur","🥩 Combos Churrasco","Todos incluyen 1 lata de Coca Cola o Pepsi · Precio único $5.000",[
["1 · Barros Luco","Churrasco de vacuno con queso fundido y mayonesa","5.000"],
["2 · Italiano","Churrasco de vacuno con palta, tomate y mayonesa","5.000"],
["3 · Completo","Churrasco de vacuno con queso fundido, tomate y mayonesa","5.000"],
["4 · Experto","Churrasco de vacuno con queso, palta, tocino y mayonesa","5.000"]]],
["otros","🌭 Completos y más",null,[
["Perro Caliente Normal","Salchicha vienesa, ensalada rallada, papa hilo, queso amarillo rallado, choclo y salsas","2.000"],
["Perro Caliente Especial","Igual al normal + tocino largo","2.500"],
["Completo Italiano","Salchicha vienesa, tomate en cuadritos, palta aplastada, mayonesa y salsas","2.000"],
["Pollo Broaster","Cuarto de pollo apanado peruano con papas fritas","7.000"],
["Papas Fritas Grandes","Porción grande","4.000"],
["Papas Fritas Chicas","Porción chica","2.000"]]],
["beb","🥤 Bebidas",null,[
["Lata Coca Cola / Pepsi","","1.200"],["Inka Kola chica","","1.700"],["Guaraná chica","","1.500"],
["Coca Cola botella","","1.500"],["Sprite botella","","1.500"],["Fanta botella","","1.500"],["Fruna botella","","800"],
["Coca Cola 1.5L","","2.500"],["Inka Kola 1.5L","","3.500"],["Agua Vital (con o sin gas)","","900"]]]
];
let n="",h="";
for(const [id,t,no,items] of S){
n+=`<a href="#${id}">${t}</a>`;
h+=`<section id="${id}"><h2>${t}</h2>${no?`<p class="note">${no}</p>`:""}`+
items.map(([a,b,c])=>{const g=IMG[a]||"";const r=g.startsWith("r:");const im=g?`<img class="${r?"r":""}" alt="${a}" src="${g.slice(2)}">`:"";return `<div class="it">${im}<div class="t"><b>${a}</b>${b?`<small>${b}</small>`:""}</div><span class="p">$${c}</span></div>`}).join("")+`</section>`;
}
document.getElementById("nav").innerHTML=n;
document.getElementById("m").innerHTML=h;

// Flechas del menú de secciones y botón de subir
const nv=document.getElementById("nav"),nl=document.getElementById("nl"),nr=document.getElementById("nr"),up=document.getElementById("up");
function flechas(){nl.classList.toggle("off",nv.scrollLeft<5);nr.classList.toggle("off",nv.scrollLeft+nv.clientWidth>=nv.scrollWidth-5)}
nl.onclick=()=>nv.scrollBy({left:-180,behavior:"smooth"});
nr.onclick=()=>nv.scrollBy({left:180,behavior:"smooth"});
nv.addEventListener("scroll",flechas);window.addEventListener("resize",flechas);flechas();
window.addEventListener("scroll",()=>up.classList.toggle("show",window.scrollY>300));
up.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});
