db = db.getSiblingDB('qmdb');

db.createCollection('users');

db.users.insertMany([
  {
    data: {
      _createdAt: "2024-09-28 23:59:59",
      _updatedAt: "2024-09-29 23:59:59",
      _membership: {},
      userName: "Giovanni Martins",
      userEmail: "giovannidealmeidamartins@gmail.com",
      userCellphone: "21981962914",
      promisesOfPayment: [
        {
          _createdAt: "2024-09-28 23:59:59",
          _updatedAt: "2024-09-29 23:59:59",
          _paymentAditionalInfo: {},
          payerName: "Max",
          date: "2024-09-29",
          amount: "100000", // in cents
          isPayed: "True",
          paymentEstimate: "2024-09-29",
        }
      ],
    }
  },
  {
    data: {
      _createdAt: "2024-09-28 23:59:59",
      _updatedAt: "2024-09-29 23:59:59",
      _membership: {},
      userName: "Maria Silva",
      userEmail: "maria.silva@example.com",
      userCellphone: "21981234567",
      promisesOfPayment: [
        {
          _createdAt: "2024-09-28 23:59:59",
          _updatedAt: "2024-09-29 23:59:59",
          _paymentAditionalInfo: {},
          payerName: "John",
          date: "2024-09-30",
          amount: "50000", // in cents
          isPayed: "False",
          paymentEstimate: "2024-10-01",
        }
      ],
    }
  }
]);