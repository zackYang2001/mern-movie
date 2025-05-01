const modelOptions = {
  toJSON: {
    virtuals: true, // 讓「虛擬欄位」也被包含進輸出
    transform: (_, obj) => {
      delete obj._id;
      return obj;
    }, // 轉換後要讓使用者看到的資訊，像這裡是就是不讓使用者看到 id
  },
  toObject: {
    virtuals: true,
    transform: (_, obj) => {
      delete obj._id;
      return obj;
    },
  },
  versionKey: false, // 不要加上預設的 __v (紀錄版本的)
  timestamps: true,
};
export default modelOptions;
