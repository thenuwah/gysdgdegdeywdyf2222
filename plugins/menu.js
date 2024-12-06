const os = require("os");
const { runtime } = require("../lib/functions");
cmd(
    {
        pattern: "menu",
        alias: ["list"],
        desc: "menu the bot",
        react: "📜",
        category: "main",
    },
    async (
        conn,
        mek,
        m,
        {
            from,
            quoted,
            body,
            isCmd,
            command,
            args,
            q,
            isGroup,
            sender,
            senderNumber,
            botNumber2,
            botNumber,
            pushname,
            isMe,
            isOwner,
            groupMetadata,
            groupName,
            participants,
            groupAdmins,
            isBotAdmins,
            isAdmins,
            reply,
        },
    ) => {
        try {
            let desc = `*👋 Hello ${pushname}*

*╭─「 ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ」*
*│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB*
*│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│◈ ᴠᴇʀꜱɪᴏɴ : 1.0.0*
*╰──────────●●►*

*╭╼╼╼╼╼╼╼╼╼╼*
*├ 1 • OWNER*
*├ 2 • CONVERT*
*├ 3 • AI*
*├ 4 • SEARCH*
*├ 5 • DOWNLOAD*
*├ 6 • MAIN*
*├ 7 • GROUP*
*├ 8 • FUN*
*├ 9 • TOOLS*
*├ 10 • OTHER*
*╰╼╼╼╼╼╼╼╼╼╼*

_*🌟 Reply with the Number you want to select*_

> ©_JESTER-MD_`;

            const vv = await conn.sendMessage(
                from,
                { image: { url: "" }, caption: desc },
                { quoted: mek },
            );

            conn.ev.on("messages.upsert", async (msgUpdate) => {
                const msg = msgUpdate.messages[0];
                if (!msg.message || !msg.message.extendedTextMessage) return;

                const selectedOption =
                    msg.message.extendedTextMessage.text.trim();

                if (
                    msg.message.extendedTextMessage.contextInfo &&
                    msg.message.extendedTextMessage.contextInfo.stanzaId ===
                        vv.key.id
                ) {
                    switch (selectedOption) {
                        case "1":
                            reply(`*◈╾──────OWNER COMMAND LIST──────╼◈*

╭────────●●►
│ • *restart* 
╰────────────────────●●►

⭓ *Total Commands List OWNER: 1*

> ©_JESTER-MD_`);
                            break;
                        case "2":
                            reply(`*◈╾──────CONVERT COMMAND LIST──────╼◈*

╭────────●●►
│ • *convert* 
╰────────────────────●●►

⭓ *Total Commands List CONVERT: 1*

> ©_JESTER-MD_`);
                            break;
                        case "3":
                            reply(`*◈╾──────AI COMMAND LIST──────╼◈*

╭────────●●►
│ • *ai* 
╰────────────────────●●►

⭓ *Total Commands List AI: 1*

> ©_JESTER-MD_`);
                            break;
                        case "4":
                            reply(`*◈╾──────SEARCH COMMAND LIST──────╼◈*

╭────────●●►
│ • *yts* 
╰────────────────────●●►
╭────────●●►
│ • *srepo* 
╰────────────────────●●►

⭓ *Total Commands List SEARCH: 2*

> ©_JESTER-MD_`);
                            break;
                        case "5":
                            reply(`*◈╾──────DOWNLOAD COMMAND LIST──────╼◈*

╭────────●●►
│ • *apk* 
╰────────────────────●●►
╭────────●●►
│ • *twitter* 
╰────────────────────●●►
╭────────●●►
│ • *gdrive* 
╰────────────────────●●►
╭────────●●►
│ • *mediafire* 
╰────────────────────●●►
╭────────●●►
│ • *fb* 
╰────────────────────●●►
╭────────●●►
│ • *ig* 
╰────────────────────●●►
╭────────●●►
│ • *movie* 
╰────────────────────●●►
╭────────●●►
│ • *song* 
╰────────────────────●●►
╭────────●●►
│ • *video* 
╰────────────────────●●►
╭────────●●►
│ • *play/yt* 
╰────────────────────●●►
╭────────●●►
│ • *song2* 
╰────────────────────●●►
╭────────●●►
│ • *video2* 
╰────────────────────●●►
╭────────●●►
│ • *tiktok* 
╰────────────────────●●►
╭────────●●►
│ • *img* 
╰────────────────────●●►

⭓ *Total Commands List DOWNLOAD: 14*

> ©_JESTER-MD_`);
                            break;
                        case "6":
                            reply(`*◈╾──────MAIN COMMAND LIST──────╼◈*

╭────────●●►
│ • *alive* 
╰────────────────────●●►
╭────────●●►
│ • *about* 
╰────────────────────●●►
╭────────●●►
│ • *menu* 
╰────────────────────●●►
╭────────●●►
│ • *allmenu* 
╰────────────────────●●►
╭────────●●►
│ • *support* 
╰────────────────────●●►
╭────────●●►
│ • *system* 
╰────────────────────●●►
╭────────●●►
│ • *ping* 
╰────────────────────●●►
╭────────●●►
│ • *runtime* 
╰────────────────────●●►

⭓ *Total Commands List MAIN: 8*

> ©_JESTER-MD_`);
                            break;
                        case "7":
                            reply(`*◈╾──────GROUP COMMAND LIST──────╼◈*

╭────────●●►
│ • *promote* 
╰────────────────────●●►
╭────────●●►
│ • *demote* 
╰────────────────────●●►
╭────────●●►
│ • *kick* 
╰────────────────────●●►
╭────────●●►
│ • *add* 
╰────────────────────●●►
╭────────●●►
│ • *admins* 
╰────────────────────●●►
╭────────●●►
│ • *tagall* 
╰────────────────────●●►
╭────────●●►
│ • *getpic* 
╰────────────────────●●►
╭────────●●►
│ • *setwelcome* 
╰────────────────────●●►
╭────────●●►
│ • *setgoodbye* 
╰────────────────────●●►
╭────────●●►
│ • *admins* 
╰────────────────────●●►
╭────────●●►
│ • *gname* 
╰────────────────────●●►

⭓ *Total Commands List GROUP: 11*

> ©_JESTER-MD_`);
                            break;
                        case "8":
                            reply(`*◈╾──────FUN COMMAND LIST──────╼◈*

╭────────●●►
│ • *dog* 
╰────────────────────●●►
╭────────●●►
│ • *fact* 
╰────────────────────●●►
╭────────●●►
│ • *hack* 
╰────────────────────●●►
╭────────●●►
│ • *quote* 
╰────────────────────●●►

⭓ *Total Commands List FUN: 4*

> ©_JESTER-MD_`);

                            break;
                        case "10":
                            reply(`*◈╾──────OTHER COMMAND LIST──────╼◈*

╭────────●●►
│ • *githubstalk* 
╰────────────────────●●►
╭────────●●►
│ • *trt* 
╰────────────────────●●►
╭────────●●►
│ • *weather* 
╰────────────────────●●►

⭓ *Total Commands List OTHER: 3*

>©_JESTER-MD_`);

                            break;
                        default:
                            reply(
                                "Invalid option. Please select a valid option🔴",
                            );
                    }
                }
            });
        } catch (e) {
            console.error(e);
            await conn.sendMessage(from, {
                react: { text: "❌", key: mek.key },
            });
            reply("An error occurred while processing your request.");
        }
    },
);
