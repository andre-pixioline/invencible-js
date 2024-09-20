const listaSelecaoPersonagem = document.querySelectorAll('.personagem')
const paginasPersonagens = document.querySelectorAll('.pagina-personagem')

listaSelecaoPersonagem.forEach(personagem => {
    personagem.addEventListener('click', () => {
        const paginaPersonagemAberto = document.querySelector('.selecionado')
        paginaPersonagemAberto.classList.remove('selecionado')

        const idPersonagemSelecionado = personagem.attributes.id.value

        const idPaginaParaAbrir = 'page-' + idPersonagemSelecionado
        const paginaPersonagemParaAbrir = document.getElementById(idPaginaParaAbrir)
        paginaPersonagemParaAbrir.classList.add('selecionado')

        const personagemAtivo = document.querySelector('.ativo')
        personagemAtivo.classList.remove('ativo')

        const personagemAtivoNav = document.getElementById(idPersonagemSelecionado)
        personagemAtivoNav.classList.add('ativo')
    })
})