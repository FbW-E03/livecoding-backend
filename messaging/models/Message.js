const { Schema, model } = require("mongoose");

const MessageSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  text: { type: String, required: true },
  timeSent: { type: Date, default: Date.now },
});

const Message = model("messages", MessageSchema);

module.exports = Message;
