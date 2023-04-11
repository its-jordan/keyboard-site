migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ij181xiqwd5pfx6")

  // remove
  collection.schema.removeField("ykd4tmq0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e8cyytji",
    "name": "short_description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 100,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kec95rff",
    "name": "long_description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5zruyjzc",
    "name": "product_images",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ij181xiqwd5pfx6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ykd4tmq0",
    "name": "product_price",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": "^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\\.[0-9]{2})?$"
    }
  }))

  // remove
  collection.schema.removeField("e8cyytji")

  // remove
  collection.schema.removeField("kec95rff")

  // remove
  collection.schema.removeField("5zruyjzc")

  return dao.saveCollection(collection)
})
