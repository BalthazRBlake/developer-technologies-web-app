const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const TechnologySchema = new Schema(
  {
    name: { type: String, maxLength: 50 },
    description: { type: String },
    logo: { type: String },
    tags: [{ type: String }]
  },
  {
    timestamps: { createdAt: true, updatedAt: true }
  });

module.exports = mongoose.model("Technology", TechnologySchema);