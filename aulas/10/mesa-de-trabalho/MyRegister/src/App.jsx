import { useState } from 'react'

function App() {

  // 1. Utilize o useState para capturar o valor de cada Campo quando o usuário clicar no botão Registrar
  // A) nome
  // B) email
  // C) confirmar email

  // 2. Utilize o useEffect para verificar se o campo confirmar-email tem valor igual confirmar e-mail
  // Se estiver errado apresente no console.log() que o e-mail divergem
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <div className='d-grid gap-4'>
              <h2>Registrar-se</h2>
              <div className='form-group'>
                <label forHtml="nome">Nome Completo</label>
                <input
                  className='form-control'
                  id='nome'
                  type="text"
                  placeholder='Digite seu nome de batismo'
                />
              </div>
              <div className='form-group'>
                <label forHtml="email">Seu e-mail</label>
                <input
                  className='form-control'
                  id='email'
                  type="text"
                  placeholder='Digite seu e-mail pessoal'
                />
              </div>
              <div className='form-group'>
                <label forHtml="confirmar-email">Confirmar e-mail</label>
                <input
                  className='form-control'
                  id='confirmar-email'
                  type="text"
                  placeholder='Confirme seu e-mail'
                />
              </div>
              <div className='d-grid'>
                <button
                  className='btn btn-primary'
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                >Registrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div
        className="modal fade"
        id="modal"
        tabindex="-1"
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
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
