const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/cnpj/:cnpj", async (req, res) => {
  const cnpj = req.params.cnpj;
  try {
    const response = await axios.get(`https://receitaws.com.br/v1/cnpj/${cnpj}`);
    return res.json(response.data);
  } catch (err) {
    return res.status(500).json({ status: "ERROR", message: "Erro ao consultar o CNPJ" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});