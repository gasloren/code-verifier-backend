#### 1. Listar todos los contactos.
`
db.Contacts.find({})
`
***

#### 2. Busca el primer contacto que sea de Alemania (Germany).
`
db.Contacts.findOne({ 'location.country': 'Germany' })
`
***

#### 3. Busca todos los contactos que tengan Blake como nombre (first).
`
db.Contacts.find({ 'name.first': 'Blake' })
`
***

#### 4. Busca los primeros 5 contactos que tengan como género (gender) hombre (male)
`
db.Contacts.find({ gender: 'male' }).limit(5)
`
***

#### 5. Devuelve los 4 primeros contactos ordenados por nombre (name) de manera descendente.
`
db.Contacts.find({}).sort({ name: -1 }).limit(4)
`
***

#### 6. Clona la colección de Contacts a CopiaContacts y luego bórrala.
`
db.Contacts.aggregate([
  {
    '$match': {}
  }, {
    '$out': 'CopiaContacts'
  }
])
`
`
db.CopiaContacts.drop()
`
***

#### 7. Renombra el campo de name por nombre.
`
db.Contacts.updateMany({}, { $rename: { name: 'nombre' } })
`
***

#### 8. Borra todos los contactos que tengan como estado (state) Florida.
`
db.Contacts.deleteMany({ 'location.state': 'Florida' })
`
***
