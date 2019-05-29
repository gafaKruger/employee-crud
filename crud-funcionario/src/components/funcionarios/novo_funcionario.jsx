import React from "react";
import "./funcionarios.css";
import Main from "../template/main";
import axios from "axios";

const headerProps = {
  icon: "users",
  title: "Funcionários",
  subtitle: "Cadastro de Funcionários"
};

const urlBase = "http://localhost:3001/funcionario";

const initState = {
  funcionario: { nome: "", sobrenome: "", email: "", numeroPis: "" },
  list: []
};

export default class NovoFuncionario extends React.Component {
  state = { ...initState };

  clear() {
    this.setState({ funcionario: initState.funcionario });
  }

  save() {
    const funcionario = this.state.funcionario;
    /*put: atualiza; post: adiciona*/
    const metodo = funcionario.id ? "put" : "post";
    const url = funcionario.id ? urlBase + "/" + funcionario.id : urlBase;

    axios[metodo](url, funcionario).then(resp => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ funcionario: initState.funcionario, list });
    });
  }

  validacaoFuncionario() {
    require("jsdom").env("", function(err, window) {
      if (err) {
        console.error(err);
        return;
      }

      var $ = require("jquery")(window);
      var nome = document.getElementById("nome").value;
      var sobrenomeNome = document.getElementById("sobrenome").value;
      var email = document.getElementById("email").value;
      var numeroPis = document.getElementById("numeroPis").value;
      $.ajax({
        method: "get",
        url:
          "validaFuncionario?nome=" +
          nome +
          "?sobrenome=" +
          sobrenomeNome +
          "?email=" +
          email +
          "?numeroPis=" +
          numeroPis,
        statusCode: {
          200: function() {
            alert("Cadastro realizado com sucesso.");
          }
        }
      });
    });
  }

  getUpdatedList(funcionario) {
    const lista = this.state.list.filter(f => f.id !== funcionario.id);
    lista.unshift(funcionario);
    return lista;
  }

  updateField(event) {
    const funcionario = { ...this.state.funcionario };
    funcionario[event.target.name] = event.target.value;
    this.setState({ funcionario });
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                className="form-control"
                name="nome"
                value={this.state.funcionario.nome}
                onChange={e => this.updateField(e)}
                placeholder="Digite o nome"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Sobrenome</label>
              <input
                type="text"
                className="form-control"
                name="sobrenome"
                value={this.state.funcionario.sobrenome}
                onChange={e => this.updateField(e)}
                placeholder="Digite o sobrenome"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">E-mail</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={this.state.funcionario.email}
                onChange={e => this.updateField(e)}
                placeholder="Digite o email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">PIS</label>
              <input
                type="number"
                className="form-control"
                name="numeroPis"
                value={this.state.funcionario.numeroPis}
                onChange={e => this.updateField(e)}
                placeholder="Digite o PIS"
              />
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-12 d-flex justify-content end">
            <button className="btn btn-primary" onClick={e => this.save(e)}>
              Salvar
            </button>
            <button
              className="btn btn-secondary ml-2"
              onClick={e => this.clear()}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    console.log(this.state.list);
    return <Main {...headerProps}>{this.renderForm()}</Main>;
  }
}
