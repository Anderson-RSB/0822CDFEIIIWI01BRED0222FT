import { useEffect, useState } from 'react'

function App() {

  // 1. Utilize o useState para capturar o valor de cada Campo quando o usuário clicar no botão Registrar
  // A) nome
  // B) email
  // C) confirmar email
  const [corpoFormulario, definirCorporFormulario] = useState({
    nomeCompleto: null,
    emailPrincipal: null,
    confirmarEmailPrincipal: null
  });

  function submeterFormulario(evento) {
    // 
    evento.preventDefault()
    // [Opcional] Destruturei o campos/inputs do formulário
    const { nome, email, confirmarEmail } = evento.target.elements

    //
    console.log('O que é o evento?', evento)
    console.log('Quem disparou o evento?', evento.target)
    console.log('Quais são os elementos do meu formuário?', evento.target.elements)
    console.log('Quais são os valores de cada elemento',
      "Nome: " + nome.value,
      "Email: " + email.value,
      "Confirmar email: " + confirmarEmail.value,
    )
    console.log('onSubmit')

    // Utilizo o useState para atualizar os valores e provê para o restante da aplicação
    definirCorporFormulario({
      nomeCompleto: nome.value,
      emailPrincipal: email.value,
      confirmarEmailPrincipal: confirmarEmail.value
    })
  }

  // 2. Utilize o useEffect para verificar se o campo confirmar-email tem valor igual confirmar e-mail
  // Se estiver errado apresente no console.log() que o e-mail divergem
  useEffect(
    () => {
      console.log('useEffect')
      // [Opcional] Destruturei o campos/inputs do formulário
      const { emailPrincipal, confirmarEmailPrincipal } = corpoFormulario

      const valoresSaoNulos = emailPrincipal == null || confirmarEmailPrincipal == null
      const emailSaoValidos = emailPrincipal == confirmarEmailPrincipal

      // Se valores são nulos...
      if (valoresSaoNulos) {
        // Executo o console.log com a mensagem personalizada
        console.log('Validação ainda não vai acontecer!')
      }
      else if (emailSaoValidos) {
        console.log('Cadastro realizado com sucesso')
      }
      else {
        console.log('Os e-mail são diferentes!')
      }
    },
    [corpoFormulario]
  )
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <form
              className='d-grid gap-4'

              onSubmit={(evento) => submeterFormulario(evento)}
            >
              <h2>Registrar-se</h2>
              <div className='form-group'>
                <label htmlFor="nome">Nome Completo</label>
                <input
                  className='form-control'
                  id='nome'
                  type="text"
                  placeholder='Digite seu nome de batismo'

                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor="email">Seu e-mail</label>
                <input
                  className='form-control'
                  id='email'
                  type="text"
                  placeholder='Digite seu e-mail pessoal'

                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor="confirmarEmail">Confirmar e-mail</label>
                <input
                  className='form-control'
                  id='confirmarEmail'
                  type="text"
                  placeholder='Confirme seu e-mail'

                  required
                />
              </div>
              <div className='d-grid'>
                <button
                  className='btn btn-primary'

                  type='submit'
                >Registrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>


      <div>
        <p>Nome completo: {corpoFormulario.nomeCompleto}</p>
        <p>E-mail principal: {corpoFormulario.emailPrincipal}</p>
        <p>Confirmação do e-mail principal: {corpoFormulario.confirmarEmailPrincipal}</p>
      </div>


      <div
        className="modal fade"
        id="modal"
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Resultado do registro</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {
                /*
                
                  Apresente o resultado do cadastro neste modal

                  - [ ] Nome
                  - [ ] E-mail
                */

              }
              {corpoFormulario.nomeCompleto} {corpoFormulario.emailPrincipal}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
