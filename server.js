const { MongoClient } = require('mongodb');

// URL de conexão com o MongoDB
const uri = "url_da_conexão_mongoo";

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();

    console.log("Conectado com sucesso ao MongoDB!");
    const database = client.db('PULSEFLOW')

  } catch (error) {
    console.error("Erro ao conectar ao MongoDB: ", error);
  }
}

connectToDatabase();
