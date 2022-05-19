const { model, Schema } = require("mongoose");
const vrpuramSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    amount: { type: Number },
    mobileNo: { type: Number },
  },
  { timestamps: true }
);

module.exports = model("vrpuram", vrpuramSchema);
