import Slack from "@slack/bolt";
import dotenv from "dotenv";

dotenv.config();

const app = new Slack.App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

// ################ Send message to slack ################
// await app.client.chat.postMessage({
//   token: process.env.SLACK_BOT_TOKEN,
//   channel: process.env.SLACK_CHANNEL,
//   text: "Hello there",
// });

// ################ Get last message ################
// async function findConversation(channelId) {
//   const result = await app.client.conversations.history({
//     token: process.env.SLACK_BOT_TOKEN,
//     channel: channelId,
//   });

//   console.log(result.messages[0].text);
// }

// findConversation("C062SRLGLSZ");

// ################ Create Channel ################
// async function createConversation(name) {
//   const result = await app.client.conversations.create({
//     token: process.env.SLACK_BOT_TOKEN,
//     name: name,
//   });

//   console.log(result);
// }
// const name = `test-${Date.now()}`;
// createConversation(name);

// ################ Delete Channel ################
// async function deleteConversation(channelId) {
//   const result = await app.client.conversations.archive({
//     token: process.env.SLACK_BOT_TOKEN,
//     channel: channelId,
//   });

//   console.log(result);
// }
// const channelId = `C062X7CD0F7`;
// deleteConversation(channelId);
