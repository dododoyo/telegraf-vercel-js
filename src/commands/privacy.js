const privacyCommandHandler = async (ctx) => {
  const bot_username = (await ctx.telegram.getMe()).username;
  const privacyMessage = `🤖 *@${bot_username} - Your Demo Bot*  👋

Hey there! This bot is just a demo showing how to deploy Telegram bots on Vercel.  We collect a little bit of info from Telegram (like your user ID, username, and messages) so we can understand what you're asking. 🤓

We only use this data to process your commands and send you the right answers.  We promise not to share it with anyone else!  🤫

Your privacy matters to us. We keep your data safe and sound. 🔒`;
  await ctx.reply(privacyMessage, { parse_mode: "Markdown" });
};

export { privacyCommandHandler };
