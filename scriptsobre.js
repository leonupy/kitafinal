const imagens = [
    "img/ft27.jpg",
    "img/ft28.jpg",
    "img/ft4.jpg",
    "img/ft5.jpg",
    "img/ft6.jpg",
    "img/ft7.jpg",
    "img/ft8.jpg",
    "img/ft9.jpg",
    "img/ft10.jpg",
    "img/ft11.jpg",
    "img/ft13.jpg",
    "img/ft14.jpg",
    "img/ft15.jpg",
    "img/ft16.jpg",
    "img/ft17.jpg",
    "img/ft18.jpg",
    "img/ft19.jpg",
    "img/ft20.jpg",
    "img/ft21.jpg",
    "img/ft22.jpg",
    "img/ft23.jpg",
    "img/ft24.jpg",
    "img/ft25.jpg",
    "img/ft26.jpg",
    "img/ft1.jpg",
    "img/FelixeVini.jpg",
    "img/ImagemRolagem1.jpg",
    "img/ImagemRolagem2.jpeg",
    "img/FotoJunto.jpeg",
    "img/KitaFinal.jpg",
    
  ];
  let indice = 0;
  const imagem = document.getElementById("imagem");
  const avancar = document.getElementById("avancar");
  const voltar = document.getElementById("voltar");

  function atualizarImagem() {
    imagem.style.opacity = 0;
    setTimeout(() => {
      imagem.style.backgroundImage = `url('${imagens[indice]}')`;
      imagem.style.opacity = 1;
    }, 300);
  }

  avancar.addEventListener("click", () => {
    indice = (indice + 1) % imagens.length;
    atualizarImagem();
  });

  voltar.addEventListener("click", () => {
    indice = (indice - 1 + imagens.length) % imagens.length;
    atualizarImagem();
  });

  atualizarImagem();

  

  atualizarImagem();


  
