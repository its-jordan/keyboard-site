migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tm0e0e701004ywq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wn7jt2la",
    "name": "brand",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tm0e0e701004ywq")

  // remove
  collection.schema.removeField("wn7jt2la")

  return dao.saveCollection(collection)
})
