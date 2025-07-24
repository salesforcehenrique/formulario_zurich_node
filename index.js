<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Formulário de Cadastro</title>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(to bottom, #ffffff 30%, #0073ff 30%);
    }
    .form-container {
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      max-width: 800px;
      margin: 40px auto;
      padding: 40px;
    }
    h2 {
      color: #1a1a1a;
      text-align: center;
    }
    h2 span {
      color: #0073ff;
    }
    p.subheading {
      text-align: center;
      color: #0073ff;
      font-weight: 500;
    }
    form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    label {
      font-weight: bold;
      margin-bottom: 5px;
      display: block;
    }
    input, select {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
      box-sizing: border-box;
    }
    .full-width {
      grid-column: 1 / -1;
    }
    .submit-button {
      background-color: #0073ff;
      color: white;
      font-weight: bold;
      border: none;
      padding: 15px 30px;
      border-radius: 6px;
      cursor: pointer;
      margin: 20px auto;
      display: block;
    }
    .submit-button:hover {
      background-color: #005fd1;
    }
    .thank-you {
      text-align: center;
      margin-top: 30px;
      color: green;
      font-size: 18px;
      display: none;
    }
    .calendly-inline-widget {
      width: 100%;
      height: 630px;
      min-height: 630px;
    }
    @media (max-width: 768px) {
      form {
        grid-template-columns: 1fr;
      }
    }
  </style>
  <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
</head>
<body>
  <div class="form-container">
    <h2><span>sempre</span>juntos<br>Vamos crescer juntos?</h2>
    <p class="subheading">Fale com a gente</p>

    <form id="leadForm" action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">
      <input type="hidden" name="oid" value="00DHa000003AAMB">
      <div class="full-width"><label>CNPJ:</label><input type="text" name="cnpj" required></div>
      <div><label>Razão Social:</label><input type="text" name="company" required></div>
      <div><label>Nome Fantasia:</label><input type="text" name="fantasy"></div>
      <div><label>Telefone:</label><input type="text" name="phone"></div>
      <div><label>E-mail:</label><input type="email" name="email" required></div>
      <div class="full-width"><label>Endereço:</label><input type="text" name="address"></div>
      <div><label>Nome:</label><input type="text" name="first_name" required></div>
      <div><label>Sobrenome:</label><input type="text" name="last_name" required></div>
      <div class="full-width"><label>Especialista no ramo imobiliário:</label>
        <select name="especialista_imob">
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
      </div>
      <div class="full-width"><label>Produção - Incêndio:</label>
        <select name="producao_incendio">
          <option>1 a 5 milhões</option><option>5 a 10 milhões</option><option>10 a 20 milhões</option>
          <option>20 a 50 milhões</option><option>50 a 100 milhões</option><option>Acima de 100 milhões</option>
        </select>
      </div>
      <div class="full-width"><label>Produção - Fiança:</label>
        <select name="producao_fianca">
          <option>1 a 5 milhões</option><option>5 a 10 milhões</option><option>10 a 20 milhões</option>
          <option>20 a 50 milhões</option><option>50 a 100 milhões</option><option>Acima de 100 milhões</option>
        </select>
      </div>
      <div class="full-width"><label>Produção - Título de Capitalização:</label>
        <select name="producao_titulo">
          <option>1 a 5 milhões</option><option>5 a 10 milhões</option><option>10 a 20 milhões</option>
          <option>20 a 50 milhões</option><option>50 a 100 milhões</option><option>Acima de 100 milhões</option>
        </select>
      </div>
      <div class="full-width"><label>Região (Sucursal):</label>
        <select name="sucursal" required>
          <option value="">Selecione uma região</option>
          <option value="São Paulo - SP">São Paulo - SP</option>
        </select>
      </div>
      <div class="full-width"><label>Número da SUSEP:</label><input type="text" name="numero_susep" placeholder="Ex: 123456789"></div>
      <div class="full-width"><label>Deseja agendar uma reunião agora?</label>
        <select name="agendar" id="agendar" required>
          <option value="">Selecione</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
      </div>
      <input type="submit" class="submit-button" value="ENVIAR">
      <div id="calendlyContainer" style="display:none;" class="full-width">
        <div class="calendly-inline-widget" data-url="https://calendly.com/henrique-cscorp?locale=pt"></div>
      </div>
    </form>

    <div id="thanksMessage" class="thank-you">Obrigado! Nossa equipe comercial entrará em contato com você em breve.</div>
  </div>

  <script>
    document.getElementById("agendar").addEventListener("change", function () {
      const calendly = document.getElementById("calendlyContainer");
      calendly.style.display = this.value === "Sim" ? "block" : "none";
    });

    document.getElementById("leadForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      fetch(this.action, { method: "POST", body: formData, mode: "no-cors" });
      this.style.display = "none";
      document.getElementById("thanksMessage").style.display = "block";
    });

    document.addEventListener("DOMContentLoaded", () => {
      const cnpjField = document.querySelector('input[name="cnpj"]');
      const nomeField = document.querySelector('input[name="company"]');
      const fantasiaField = document.querySelector('input[name="fantasy"]');
      const emailField = document.querySelector('input[name="email"]');
      const telefoneField = document.querySelector('input[name="phone"]');
      const enderecoField = document.querySelector('input[name="address"]');

      cnpjField.addEventListener("input", e => {
        let v = e.target.value.replace(/\\D/g, "");
        v = v.replace(/^(\\d{2})(\\d)/, "$1.$2");
        v = v.replace(/^(\\d{2}\\.\\d{3})(\\d)/, "$1/$2");
        v = v.replace(/^(\\d{2}\\.\\d{3}\\/\\d{3})(\\d)/, "$1-$2");
        e.target.value = v;
      });

      cnpjField.addEventListener("blur", async () => {
        const raw = cnpjField.value.replace(/\\D/g, "");
        if (raw.length !== 14) {
          alert("CNPJ inválido. Verifique.");
          return;
        }
        try {
          const res = await fetch(`https://formulario-zurich-node.onrender.com/cnpj/${raw}`, { mode: "cors" });
          if (!res.ok) throw new Error("Erro na resposta da API");
          const data = await res.json();
          if (data.status === "ERROR") {
            alert(data.message || "Erro ao consultar o CNPJ");
            return;
          }
          nomeField.value = data.nome || "";
          fantasiaField.value = data.fantasia || "";
          emailField.value = data.email || "";
          telefoneField.value = data.telefone || "";
          enderecoField.value = [data.logradouro, data.numero, data.complemento, data.bairro, data.municipio, data.uf].filter(Boolean).join(", ");
        } catch (err) {
          console.error(err);
          alert("Erro ao consultar o CNPJ. Tente novamente mais tarde.");
        }
      });
    });
  </script>
</body>
</html>
