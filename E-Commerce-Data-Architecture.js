db.createCollection("reviews", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "reviews",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "userId": { bsonType: "objectId" },
        "productId": { bsonType: "objectId" },
        "rating": { bsonType: "int" },
        "comment": { bsonType: "string" },
        "createdAt": { bsonType: "date" },
      },
    },
  },
});

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "users",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "name": { bsonType: "string" },
        "email": { bsonType: "string" },
        "createdAt": { bsonType: "date" },
        "lastLoginAt": { bsonType: "date" },
        "addresses": { bsonType: "array", items: { bsonType: "object" } },
        "indexes": { bsonType: "array", items: { bsonType: "object" } },
        "wishlist": { bsonType: "array", items: { bsonType: "objectId" } },
      },
    },
  },
});

db.createCollection("payments", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "payments",
      required: ["_id", "orderId"],
      properties: {
        "_id": { bsonType: "objectId" },
        "orderId": { bsonType: "objectId" },
        "amount": { bsonType: "double" },
        "status": { bsonType: "string" },
      },
    },
  },
});

db.createCollection("products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "products",
      required: ["_id"],
      properties: {
        "_id": { bsonType: "objectId" },
        "name": { bsonType: "string" },
        "title": { bsonType: "string" },
        "slug": { bsonType: "string" },
        "active": { bsonType: "bool" },
        "createdAt": { bsonType: "date" },
        "variants": { bsonType: "array", items: { bsonType: "object" } },
        "attrs": { bsonType: "array", items: { bsonType: "object" } },
        "indexes": { bsonType: "array", items: { bsonType: "object" } },
      },
    },
  },
});

db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "orders",
      required: ["_id"],
      properties: {
        "name": { bsonType: "string" },
        "_id": { bsonType: "objectId" },
        "userId": { bsonType: "objectId" },
        "createdAt": { bsonType: "date" },
        "status": { bsonType: "string" },
        "items": { bsonType: "array", items: { bsonType: "object" } },
        "totals": { bsonType: "object", title: "totals", properties: { "currency": { bsonType: "string" }, "subtotal": { bsonType: "double" }, "discount": { bsonType: "double" }, "shipping": { bsonType: "double" }, "tax": { bsonType: "double" }, "grandTotal": { bsonType: "double" }, }, },
        "shippingAddressSnapshot": { bsonType: "object", title: "shippingAddressSnapshot", properties: { "name": { bsonType: "string" }, "street": { bsonType: "string" }, "city": { bsonType: "string" }, "state": { bsonType: "string" }, "zip": { bsonType: "string" }, "country": { bsonType: "string" }, }, },
        "statusHistory": { bsonType: "array", items: { bsonType: "object" } },
        "payment": { bsonType: "object", title: "payment", properties: { "provider": { bsonType: "string" }, "paymentIntentId": { bsonType: "string" }, "paidAt": { bsonType: "date" }, }, },
        "indexes": { bsonType: "array", items: { bsonType: "object" } },
      },
    },
  },
});