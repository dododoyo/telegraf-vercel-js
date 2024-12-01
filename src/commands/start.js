const startCommandHandler = async (ctx) => {
  const greetingMessage = `
Hi there! 👋

I'm a simple bot created to showcase how to deploy a Telegram bot on Vercel. I can handle a few basic commands:

/start: Starts a conversation with me.
/help: Provides a brief overview of my capabilities.
/privacy: Displays my privacy policy.

Feel free to try them out! `;
  await ctx.reply(greetingMessage);
};

export { startCommandHandler };
