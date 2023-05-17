const { initializeApp, applicationDefault, cert } = require("firebase-admin/app")
const { getFirestore, Timestamp, FieldValue } = require("firebase-admin/firestore")

const serviceAccount = require("./exercicio-crud-fire-firebase-adminsdk-pgfz4-c59e288b31.json")

initializeApp({
  credential: cert(serviceAccount)
})

const db = getFirestore()

const dados = {
  nome: "nome",
  email: "email",
  idade: "idade"

}

const res = db.collection("dados").doc("LA").set(dados)