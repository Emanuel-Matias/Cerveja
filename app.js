function buscar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa =document.getElementById("campo-pesquisa").value 

    // Se o campoPesquisa for um string sem nada
    if(!campoPesquisa) {
        section.innerHTML = "<p> Não foi encontrado </p>"
        return
    }

campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);
    
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultado = "";
    let Marca = "";
    let descrição = "";
    let Tags = "";
  
    // Itera sobre cada dado da lista de dados
    for(let dado of dados) {
        Marca = dado.Marca.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        Tags = dado.Tags.toLowerCase()

     // Se a palavra includes no campoPesquisa
     if (Marca.includes(campoPesquisa)
    || descrição.includes(campoPesquisa)
    || Tags.includes(campoPesquisa)) {
        // Cria um novo elemento
      resultado += `
      <div class="item-resultado">
        <h2>
          <a href="#">${dado.Marca}</a></h2>
        <p class="discrição-meta">${dado.descrição}</p>
        <a href=${dado.Site} target="_blank">Site oficial</a>
      </div>
    `;
  }
     }

     if (!resultado) {
        resultado = "<p> No momento a pesquisa esta fora do banco de dados </p>"
    }

    // Insere os resultados na seção HTML
    section.innerHTML = resultado;
  }








