const Message = require("../models/Message");

exports.send = async (req, res) => {
  const { name, email, text } = req.body;

  try {
    await Message.create({
      name,
      email,
      text,
    });

    res.send("Message saved!");
  } catch (error) {
    res.status(500).send("Error saving message");
  }
};

exports.read = async (req, res) => {
  try {
    const messages = await Message.find().limit(10);

    res.send({ data: messages });
  } catch (error) {
    res.status(500).send("Error saving message");
  }
};
