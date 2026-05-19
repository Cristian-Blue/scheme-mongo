import express from 'express'
import { MongoClient } from 'mongodb'

const app = express();

const uri = "mongodb://root:example_password@localhost:27017";

const client = new MongoClient(uri);


async function main() {

    await client.connect();

    const db = client.db("empresa");

    await db.createCollection("usuarios", {
        validator: {
            $jsonSchema: {
                bsonType: "object",

                required: ["nombre", "correo", "edad"],

                properties: {

                    nombre: {
                        bsonType: "string",
                        description: "El nombre debe ser texto"
                    },

                    correo: {
                        bsonType: "string",
                        pattern: "^.+@.+$",
                        description: "Debe ser un correo válido"
                    },

                    edad: {
                        bsonType: "int",
                        minimum: 18,
                        maximum: 100,
                        description: "Edad válida"
                    },

                    activo: {
                        bsonType: "bool"
                    }
                }
            }
        }
    });

    console.log("Colección creada con schema");

}

app.use('/insert', async () => {
    await client.connect();
    const db = client.db("empresa");
    const a = await db.collection("usuarios").insertOne({
        nombre: "Juan",
        correo: "juan@test.com",
        edad: 25,
        activo: true
    });
    return a;
})

app.use('/error', async (req, res) => {
    try {
        await client.connect();
        const db = client.db("empresa");
        const a = await db.collection("usuarios").insertOne({
            nombre: 123,
            edad: "veinte"
        });
        return a
    } catch (error) {

        if (error.code === 121) {
            return res.status(400).json({
                mensaje: "Error de validación",
                detalle: error.errInfo
            });
        }

        res.status(500).json({
            mensaje: "Error interno"
        });
    }

})

main();

app.listen(8080, () => {
    console.log("Server running on port 8080");
})