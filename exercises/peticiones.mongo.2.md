## Peticiones MongoDB - 2


#### 1. Muestra las primeras 5 ciudades que empiecen por A ordenadas de manera ascendente, las soluciones deben ser únicas.

    db.Contacts.aggregate([
      {
        '$match': {
          'location.city': new RegExp('^A')
        }
      }, {
        '$group': {
          '_id': '$location.city'
        }
      }, {
        '$sort': {
          '_id': 1
        }
      }, {
        '$limit': 5
      }
    ])


###### Resultado:

    [
      { _id: 'Aaborg Øst' },
      { _id: 'Aalborg S.Ø.' },
      { _id: 'Aalsmeer' },
      { _id: 'Aarburg' },
      { _id: 'Aarhus' }
    ]

***

#### 2. Crea una colección a parte, que solo contenga a los contactos de Francia (France) y que tengan entre 18 y 50 años. Usa una agregación para ello.

    db.Contacts.aggregate([
      {
        '$match': {
          'location.country': 'France', 
          'dob.age': {
            '$gte': 18, 
            '$lte': 50
          }
        }
      }, {
        '$out': 'FranceContacts'
      }
    ])

###### Resultado:
    "FranceContacts" resultó una coleccion de 121 contactos

***

#### 3. Añade un número favorito a cada contacto, luego crea un bucket agrupando por número favorito que separe en 5 segmentos.

    db.Contacts.aggregate([
      {
        '$addFields': {
          'favNumb': {
            '$floor': {
              '$multiply': [ { '$rand': {} }, 100 ]
            }
          }
        }
      }, {
        '$bucket': {
          'groupBy': '$favNumb', 
          'boundaries': [
            0, 20, 40, 60, 80, 100
          ], 
          'output': {
            'total': {
              '$sum': 1
            }
          }
        }
      }
    ])

###### Resultado:

    [
      { _id: 0, total: 977 },
      { _id: 20, total: 1014 },
      { _id: 40, total: 1030 },
      { _id: 60, total: 978 },
      { _id: 80, total: 995 }
    ]

***

#### 4. En la colección de Contacts, haz una proyección la cual tiene que devolver solo el name y username del contacto.

    db.Contacts.aggregate([
      {
        $project: {
          _id: 0,
          name: '$name.first',
          username: '$login.username'
        }
      }
    ])

###### Primeros 5 resultados:

    [
      { name: 'Henning', username: 'ticklishdog227' },
      { name: 'Blake', username: 'happyzebra494' },
      { name: 'Deniz', username: 'smallostrich104' },
      { name: 'Ali', username: 'ticklishzebra667' },
      { name: 'Milos', username: 'goldenkoala854' },
      ...
    ]

***

#### 5. Haz una consulta en la colección de Contacts la cual devuelva un documento por cada nombre (name) y que sea único, ordenado por apellido (last), tienes que usar el operador $unwind.

> **Note**
> Dejo este punto sin realizar debido a que no logro entender el enunciado del mismo. ¿Por qué usar **$unwind** si no existe un campo del tipo Array?

***

#### 6. Haz una proyección convirtiendo la fecha (date) a un formato DD-MM-AAAA, la nueva variable será fechaNacimiento

    db.Contacts.aggregate([
      {
        $project: {
          _id: 0,
          nombreCompleto: {
            $concat: [
              '$name.first', ' ','$name.last'
            ]
          },
          fechaNacimiento: {
            $dateToString: {
              format: '%d-%m-%Y',
              date: {
                $dateFromString: {
                  dateString: '$dob.date'
                }
              }
            }
          }
        }
      }
    ])

###### Primeros 5 resultados:

    [
      { nombreCompleto: 'Henning Mahr', fechaNacimiento: '21-12-1953' },
      { nombreCompleto: 'Blake Tremblay', fechaNacimiento: '11-11-1952' },
      { nombreCompleto: 'Deniz Samancı', fechaNacimiento: '31-07-1983' },
      { nombreCompleto: 'Ali Sepetçi', fechaNacimiento: '07-02-1966' },
      { nombreCompleto: 'Milos Lührs', fechaNacimiento: '07-02-1979' },
      ...
    ]

> **Note**
> Para poder mostrar el resultado ignoré el resto de los campos y cree "nombreCompleto" para que sea mas compacto.

***