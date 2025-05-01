import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.options";

// 新增一個關聯式資料結構
export default mongoose.model(
  "Review",
  mongoose.Schema(
    {
      user: {
        type: Schema.Types.ObjectId, // ObjectId 是一種主鍵格式，像是 mysql 的 foreign key
        ref: "User", // 關聯欄位，像是 mysql 的 join
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      mediaType: {
        type: String,
        enum: ["TV", "movie"], // enumeration 為列舉，也就是固定只能有這兩個選項
        required: true,
      },
      mediaId: {
        type: String,
        required: true,
      },
      mediaTitle: {
        type: String,
        required: true,
      },
      mediaPoster: {
        type: String,
        required: true,
      },
    },
    modelOptions
  )
);
