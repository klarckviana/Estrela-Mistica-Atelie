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

    window.open(link, "_blank");

    document.querySelector(".formulario-pedido").reset();
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