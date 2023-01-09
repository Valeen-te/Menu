// elementos

const menu = [
    {
        id: 1,
        titulo: "hamburguesa de carne",
        categoria: "hamburguesas",
        precio: 6.5,
        img: "img/img1.png",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, mollitia iusto. Quo amet molestias praesentium laborum dolorem tempora officiis repellendus magnam est quaerat eos quidem, unde ducimus, impedit voluptates error?"
    },
    {
        id: 2,
        titulo: "hamburguesa crispy",
        categoria: "hamburguesas",
        precio: 6.5,
        img: "img/img2.png",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, mollitia iusto. Quo amet molestias praesentium laborum dolorem tempora officiis repellendus magnam est quaerat eos quidem, unde ducimus, impedit voluptates error?"
    },
    {
        id: 3,
        titulo: "hamburguesa de carne k & T",
        categoria: "hamburguesas",
        precio: 7,
        img: "img/img3.png",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, mollitia iusto. Quo amet molestias praesentium laborum dolorem tempora officiis repellendus magnam est quaerat eos quidem, unde ducimus, impedit voluptates error?"
    },
    {
        id: 4,
        titulo: "marquesa de chocolate",
        categoria: "deli-duvas",
        precio: 2.5,
        img: "img/img4.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, mollitia iusto. Quo amet molestias praesentium laborum dolorem tempora officiis repellendus magnam est quaerat eos quidem, unde ducimus, impedit voluptates error?"
    },
    {
        id: 5,
        titulo: "tequeños de queso",
        categoria: "deli-duvas",
        precio: 4,
        img: "img/img5.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, mollitia iusto. Quo amet molestias praesentium laborum dolorem tempora officiis repellendus magnam est quaerat eos quidem, unde ducimus, impedit voluptates error?"
    },
    {
        id: 6,
        titulo: "papas fritas",
        categoria: "deli-duvas",
        precio: 3.5,
        img: "img/img6.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, mollitia iusto. Quo amet molestias praesentium laborum dolorem tempora officiis repellendus magnam est quaerat eos quidem, unde ducimus, impedit voluptates error?"
    },
    {
        id: 7,
        titulo: "malteada de chocolate",
        categoria: "bebidas",
        precio: 3,
        img: "img/img7.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, mollitia iusto. Quo amet molestias praesentium laborum dolorem tempora officiis repellendus magnam est quaerat eos quidem, unde ducimus, impedit voluptates error?"
    },
    {
        id: 8,
        titulo: "Coca-Cola 1.5l",
        categoria: "bebidas",
        precio: 2,
        img: "img/img8.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, mollitia iusto. Quo amet molestias praesentium laborum dolorem tempora officiis repellendus magnam est quaerat eos quidem, unde ducimus, impedit voluptates error?"
    },
    {
        id: 9,
        titulo: "seven up 1.5l",
        categoria: "bebidas",
        precio: 2,
        img: "img/img9.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, mollitia iusto. Quo amet molestias praesentium laborum dolorem tempora officiis repellendus magnam est quaerat eos quidem, unde ducimus, impedit voluptates error?"
    },
    {
        id: 10,
        titulo: "wrap 2 piezas",
        categoria: "wraps",
        precio: 7,
        img: "img/img10.png",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, mollitia iusto. Quo amet molestias praesentium laborum dolorem tempora officiis repellendus magnam est quaerat eos quidem, unde ducimus, impedit voluptates error?"
    }
]

const seccionCentral = document.querySelector('.seccion-central');
const contenedor = document.querySelector(".btn-contenedor")

// cargar elementos
window.addEventListener('DOMContentLoaded', ()=>{
    mostrarMenuElementos(menu)
    mostrarMenuBtn()
})

const mostrarMenuElementos = (menuElementos) => {
    let mostrarMenu = menuElementos.map((elemento) =>{
        // console.log(elemento)

        return `<article class="elemento-menu">
        <img src="${elemento.img}" class="foto" alt="${elemento.titulo}">
        <div class="elemento-info">
            <header>
                <h4>${elemento.titulo}</h4>
                <h4 class="precio"> $${elemento.precio}</h4>
            </header>
            <p>
                ${elemento.desc}
            </p>
        </div>
    </article>`;
    });
    mostrarMenu = mostrarMenu.join("");
    seccionCentral.innerHTML = mostrarMenu;
}

function mostrarMenuBtn() {
    const categorias = menu.reduce( (valores,elemento)=>{
        if(!valores.includes(elemento.categoria)){
            valores.push(elemento.categoria)
        }
        return valores;
    },["todo"]);
    const categoriaBtn = categorias.map((categoria)=>{
        return `<button class="filtro-btn" type="button" data-id=${categoria}>${categoria}</button>`
    }).join("");
    contenedor.innerHTML = categoriaBtn;
    const filtroBtn = document.querySelectorAll('.filtro-btn');
    // filtro de elementos
    filtroBtn.forEach((btn)=> {
        btn.addEventListener('click', (e)=>{
            const categoria = e.currentTarget.dataset.id;
            const menuCategoria = menu.filter( (menuElementos)=>{
                // console.log(menuElementos.categoria)
                if (menuElementos.categoria === categoria){
                    return menuElementos;
                };
            });
            // console.log(menuCategoria);
            if (categoria === "todo"){
                mostrarMenuElementos(menu);
            }
            else{
                mostrarMenuElementos(menuCategoria);
            };
        });
    });
}