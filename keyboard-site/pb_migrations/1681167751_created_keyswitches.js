migrate((db) => {
  const collection = new Collection({
    "id": "tm0e0e701004ywq",
    "created": "2023-04-10 23:02:31.330Z",
    "updated": "2023-04-10 23:02:31.330Z",
    "name": "keyswitches",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yrsdwovf",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "igzxqvuo",
        "name": "price",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": "^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\\.[0-9]{2})?$"
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tm0e0e701004ywq");

  return dao.deleteCollection(collection);
})
