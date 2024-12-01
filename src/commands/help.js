const helpCommandHandler = async (ctx) => {
  const helpMessage =
    `Welcome to the help section 🤗, Here are the *list of commands* you can execute.

/start - Start the Bot
/help - Shows Help Message
/privacy - Shows Privacy Message

Select what you want to do! Let's get started! 🚀`;
  await ctx.reply(helpMessage, { parse_mode: "Markdown" });
};

export { helpCommandHandler };
