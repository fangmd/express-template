import cors from "cors"

export const corsWrap = cors({
  origin: "http://10.240.32.210:9003",
  optionsSuccessStatus: 200,
})
