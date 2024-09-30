const { configDotenv } = require('dotenv');
configDotenv();

module.exports = {
  async up(db) {
    const collectionName = express.env.MONGO_COLLECTION;

    if (!collectionName || typeof collectionName !== 'string') {
      throw new Error("O nome da coleção é inválido.");
    }

    const collections = await db.listCollections({ name: collectionName }).toArray();

    if (collections.length === 0) {
      await db.createCollection(collectionName);
      console.log(`Coleção '${collectionName}' criada.`);
    } else {
      console.log(`Coleção '${collectionName}' já existe.`);
    }

    await db.collection('users').insertMany([{
      data: {
        _createdAt: "2024-09-28 23:59:59",
        _updatedAt: "2024-09-29 23:59:59",
        _membership: {},
        userName: "fictional name",
        userEmail: "fictionalEmail@gmail.com",
        userCellphone: "2199999999",
        promisesPayment: [
          {
            _createdAt: "2024-09-28 23:59:59",
            _updatedAt: "2024-09-29 23:59:59",
            _paymentAditionalInfo: {},
            payerName: "Max",
            date: "2024-09-29",
          }
        ]
      }
    }]);
  },

  async down(db) {
    const collectionName = 'sua_colecao';

    if (!collectionName || typeof collectionName !== 'string') {
      throw new Error("O nome da coleção é inválido.");
    }

    await db.collection(collectionName).drop();
    console.log(`Coleção '${collectionName}' removida.`);
  }
};
