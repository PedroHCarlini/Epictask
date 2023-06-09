document.querySelector("#salvar").addEventListener("click", cadastrar)

function cadastrar() {
    let titulo = document.querySelector("#titulo").value
    let descricao = document.querySelector("#descricao").value
    let pontos = document.querySelector("#pontos").value
    let categoria = document.querySelector("#categoria").value

    const tarefa = {
        titulo: titulo,
        descricao: descricao,
        pontos: pontos,
        categoria: categoria
    }

    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)
}



function gerarCard(tarefa) {
    return `<div class="col-lg-3 col-md-6 col-12">
    <div class="card">
      <div class="card-header">${tarefa.titulo}</div>
      <div class="card-body">
        <p class="card-text">${tarefa.descricao}</p>
        <p>
          <span class="badge text-bg-warning">${tarefa.categoria}</span>
        </p>
        <p>
            <span class="badge rounded-pill text-bg-info">Pts: ${tarefa.pontos && tarefa.pontos > 0 ? tarefa.pontos : 0}</span>
        </p>
        <a href="#" class="btn btn-success">
          <i class="bi bi-check-lg"></i>
        </a>
        <a href="#" class="btn btn-danger">
          <i class="bi bi-trash"></i>
        </a>
      </div>
    </div>
  </div>`
}

document.getElementById('btnSwitch').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
    }
})