import process from "node:process";
import { debug } from "../utils/debug.js";

const development = async (bot) => {
  const botInfo = (await bot.telegram.getMe()).username;

  debug("Bot runs in development mode");
  debug(`${botInfo} starting polling`);

  await bot.launch();

  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
};

export { development };
