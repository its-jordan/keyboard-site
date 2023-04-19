migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ij181xiqwd5pfx6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8fmjgojk",
    "name": "type",
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
  const collection = dao.findCollectionByNameOrId("ij181xiqwd5pfx6")

  // remove
  collection.schema.removeField("8fmjgojk")

  return dao.saveCollection(collection)
})
