# scheme-mongo

| bsonType     | Significado           |
| ------------ | --------------------- |
| `"string"`   | Texto                 |
| `"int"`      | Entero 32-bit         |
| `"long"`     | Entero 64-bit         |
| `"double"`   | Decimal               |
| `"bool"`     | Booleano (true/false) |
| `"date"`     | Fecha                 |
| `"objectId"` | ID de Mongo           |
| `"object"`   | Objeto JSON           |
| `"array"`    | Arreglo               |


--

| bsonType    | Uso                       |
| ----------- | ------------------------- |
| `"int"`     | números pequeños          |
| `"long"`    | números grandes           |
| `"double"`  | decimales                 |
| `"decimal"` | alta precisión (finanzas) |

--
| bsonType   | Significado        |
| ---------- | ------------------ |
| `"object"` | Documento embebido |
| `"array"`  | Lista de valores   |

--
| bsonType      | Uso               |
| ------------- | ----------------- |
| `"objectId"`  | `_id` de Mongo    |
| `"date"`      | fechas            |
| `"binData"`   | datos binarios    |
| `"regex"`     | expresión regular |
| `"timestamp"` | timestamp interno |

--

| bsonType      | Uso                 |
| ------------- | ------------------- |
| `"null"`      | permite null        |
| `"undefined"` | valor indefinido    |
| `"minKey"`    | menor valor posible |
| `"maxKey"`    | mayor valor posible |

