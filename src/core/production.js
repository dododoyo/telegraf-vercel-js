import { debug } from "../utils/debug.js";

const production = async (
  req,
  res,
  bot,
) => {
  debug("Bot runs in production mode");

  if (req.method === "POST") {
    await bot.handleUpdate(req.body, res);
  } else {
    res.status(200).json("Listening to bot events...");
  }
  debug(`starting webhook . . .`);
};
export { production };
