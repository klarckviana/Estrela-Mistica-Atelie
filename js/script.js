function mostrarInfo(id) {

    const info = document.getElementById(id);

    if (info.style.display === "block") {

        info.style.display = "none";

    } else {

        info.style.display = "block";

    }

}

function enviarPedido() {

    const nome = document.getElementById("nome");
    const whatsapp = document.getElementById("whatsapp");

    const erroNome =
    document.getElementById("erro-nome");

    const erroWhatsapp =
    document.getElementById("erro-whatsapp");

   const erroPeca =
    document.getElementById("erro-peca");

    const erroDescricao =
    document.getElementById("erro-descricao");

    let formularioValido = true;

    erroNome.textContent = "";
    erroWhatsapp.textContent = "";
    erroPeca.textContent = "";
    erroDescricao.textContent = "";

    nome.classList.remove("erro", "correto");
    whatsapp.classList.remove("erro", "correto");

    if (nome.value.trim() === "") {

        erroNome.textContent =
        "✨ Informe seu nome completo para continuarmos o atendimento.";

        erroNome.style.color = "red";

        nome.classList.add("erro");

        formularioValido = false;

    } else {

        erroNome.textContent =
        "✓ Nome válido";

        erroNome.style.color = "green";

        nome.classList.add("correto");
    }

    const numeros =
    whatsapp.value.replace(/\D/g, "");

    if (numeros.length !== 11) {

        erroWhatsapp.textContent =
        "⚠ Digite um WhatsApp válido com DDD.";

        erroWhatsapp.style.color = "red";

        whatsapp.classList.add("erro");

        formularioValido = false;

    } else {

        erroWhatsapp.textContent =
        "✓ WhatsApp válido";

        erroWhatsapp.style.color = "green";

        whatsapp.classList.add("correto");
    }

const campoPeca =
document.getElementById("peca");

if (campoPeca.value.trim() === "") {

    erroPeca.textContent =
    "⚠ Informe o tipo da peça desejada.";

    erroPeca.style.color = "red";

    formularioValido = false;
}

const campoDescricao =
document.getElementById("descricao");

if (campoDescricao.value.trim() === "") {

    erroDescricao.textContent =
    "⚠ Descreva sua peça para continuarmos o orçamento.";

    erroDescricao.style.color = "red";

    formularioValido = false;
}


    if (!formularioValido) {
        return;
    }

    const whatsappFormatado =
    numeros.replace(
        /(\d{2})(\d{5})(\d{4})/,
        "($1) $2-$3"
    );

    const peca =
    document.getElementById("peca").value;

    const religiao =
    document.getElementById("religiao").value;

    const descricao =
    document.getElementById("descricao").value;

    const mensagem =
` NOVO PEDIDO PERSONALIZADO

Nome: ${nome.value}

WhatsApp: ${whatsappFormatado}

Tipo da Peça: ${peca}

Religião: ${religiao}

Descrição:
${descricao}`;

const link =
`https://wa.me/5541996314284?text=${encodeURIComponent(mensagem)}`;

const modal =
document.getElementById("modal-sucesso");

modal.style.display = "flex";

setTimeout(() => {

    window.open(link, "_blank");

    modal.style.display = "none";

    document
        .querySelector(".formulario-pedido")
        .reset();

    nome.classList.remove("correto");
    whatsapp.classList.remove("correto");

    erroNome.textContent = "";
    erroWhatsapp.textContent = "";
    erroPeca.textContent = "";
    erroDescricao.textContent = "";

}, 1200);

}

const btnAcessibilidade =
document.getElementById("btn-acessibilidade");

if (btnAcessibilidade) {

    btnAcessibilidade.addEventListener("click", () => {

        document.body.classList.toggle("modo-acessivel");

    });

}

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    console.log(slides.length);

    let slideAtual = 0;

    setInterval(() => {

        slides[slideAtual].classList.remove("ativo");

        slideAtual++;

        if (slideAtual >= slides.length) {
            slideAtual = 0;
        }

        slides[slideAtual].classList.add("ativo");

    }, 4000);

}



/* ===========================
   GALERIA PREMIUM
=========================== */

const fotos = document.querySelectorAll(".galeria-grid .foto img");

if (fotos.length > 0) {

    const lightbox = document.getElementById("lightbox");
    const imagem = document.getElementById("imagemLightbox");
    const titulo = document.getElementById("tituloLightbox");
    const contador = document.getElementById("contador");

    const fechar = document.getElementById("fechar");
    const anterior = document.getElementById("anterior");
    const proximo = document.getElementById("proximo");

    let indiceAtual = 0;

    function abrirImagem(indice){

        indiceAtual = indice;

            imagem.style.opacity = "0";

        setTimeout(()=>{

            imagem.src = fotos[indice].src;

            imagem.style.opacity = "1";

        },150);

        imagem.alt = fotos[indice].alt;

        titulo.textContent =
            fotos[indice]
            .closest(".foto")
            .querySelector("h3").textContent;

        contador.textContent =
            `${indice + 1} / ${fotos.length}`;

        lightbox.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

    fotos.forEach((foto, indice)=>{

        foto.addEventListener("click", ()=>{

            abrirImagem(indice);

        });

    });

    fechar.addEventListener("click", ()=>{

        lightbox.style.display = "none";

        document.body.style.overflow = "";

    });

    proximo.addEventListener("click", ()=>{

        indiceAtual++;

        if(indiceAtual >= fotos.length){

            indiceAtual = 0;

        }

        abrirImagem(indiceAtual);

    });

    anterior.addEventListener("click", ()=>{

        indiceAtual--;

        if(indiceAtual < 0){

            indiceAtual = fotos.length - 1;

        }

        abrirImagem(indiceAtual);

    });

    lightbox.addEventListener("click",(e)=>{

        if(e.target === lightbox){

            lightbox.style.display = "none";

            document.body.style.overflow = "";

        }

    });

    document.addEventListener("keydown",(e)=>{

        if(lightbox.style.display !== "flex") return;

        if(e.key === "Escape"){

            lightbox.style.display = "none";

            document.body.style.overflow = "";

        }

        if(e.key === "ArrowRight"){

            proximo.click();

        }

        if(e.key === "ArrowLeft"){

            anterior.click();

        }

    });

}



/* ===========================
   MENU MOBILE
=========================== */

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const menuClose = document.getElementById("mobile-close");
const overlay = document.getElementById("menu-overlay");

function abrirMenu(){

    menu.classList.add("ativo");
    overlay.classList.add("ativo");

    document.body.style.overflow = "hidden";

}

function fecharMenu(){

    menu.classList.remove("ativo");
    overlay.classList.remove("ativo");

    document.body.style.overflow = "";

}

if(menuToggle && menu){

    menuToggle.addEventListener("click", () => {

        if(menu.classList.contains("ativo")){

            fecharMenu();

        }else{

            abrirMenu();

        }

    });

}

if(menuClose){

    menuClose.addEventListener("click", () => {

        fecharMenu();

    });

}

if(overlay){

    overlay.addEventListener("click", () => {

        fecharMenu();

    });

}

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        fecharMenu();

    });

});