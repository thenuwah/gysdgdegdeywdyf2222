
const { readEnv } = require('../lib/database');
const { cmd } = require('../command');

// ========== MENU COMMAND ==========
cmd({
    pattern: "menu",
    react: "📜",
    desc: "Display interactive bot menu",
    category: "main",
    filename: __filename,
},
async (conn, mek, m, { from, reply, pushname }) => {
    try {
        // Forwarding Metadata
        const contextInfo = {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterName: "★彡[ᴊᴇꜱᴛᴇʀ-ᴍᴅ]彡★",
                newsletterJid: "",
            },
            externalAdReply: {
                title: "★彡[ᴊᴇꜱᴛᴇʀ-ᴍᴅ]彡★ Bot Menu",
                body: "© *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ★彡[ᴊᴇꜱᴛᴇʀ-ᴍᴅ]彡★*",
                thumbnailUrl: "",
                mediaType: 1,
                renderLargerThumbnail: true,
            },
        };

        // Bot Menu Content
        const botMenu = `
╭───────────────────────◈
│ 👋 *Hello, ${pushname || "User"}!*
│ 
│ 🌟 *Select Your Menu Below:*
│───────────────
│ *1.* 📥 Download Menu
│ *2.* 🛠 Main Menu
│ *3.* 👥 Group Menu
│ *4.* 👑 Owner Tools
│ *5.* 🔄 Convert Menu
│ *6.* 🔍 Search Menu
│ *7.* 🎬 Movie Menu
│ *8.* 👨‍💻 Other Menu
│ *9.* 🤖 AI Menu
╰───────────────────────◈

© *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ★彡[ᴊᴇꜱᴛᴇʀ-ᴍᴅ]彡★*
        `;

        // Send Menu with ContextInfo
        const sentMsg = await conn.sendMessage(
            from,
            {
                text: botMenu,
                contextInfo,
            },
            { quoted: mek }
        );

        // Listening for user responses
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            try {
                const userMsg = msgUpdate.messages[0];
                if (!userMsg.message || !userMsg.message.extendedTextMessage) return;

                const selectedOption = userMsg.message.extendedTextMessage.text.trim();

                if (
                    userMsg.message.extendedTextMessage.contextInfo &&
                    userMsg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id
                ) {
                    let responseText = "";
                    switch (selectedOption) {
                        case '1': {
                            responseText = `
╭───────────────────────◈
│ 📥 *Download Menu*
│───────────────
│ *Commands:*
│ .fb, .tiktok, .img
│ .apkdl, .gdrive, .play
│ .video, .video2, .song
│ .song2, .twitter
╰───────────────────────◈
© *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ★彡[ᴊᴇꜱᴛᴇʀ-ᴍᴅ]彡★*
                            `;
                            break;
                        }
                        case '2': {
                            responseText = `
╭───────────────────────◈
│ 🛠 *Main Menu*
│───────────────
│ .alive, .ping, .menu
│ .allmenu, .runtime
╰───────────────────────◈
© *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ★彡[ᴊᴇꜱᴛᴇʀ-ᴍᴅ]彡★*
                            `;
                            break;
                        }
                        // Add other cases as needed
                        default: {
                            responseText = "❌ *Invalid option. Please choose a number between 1-9.*";
                        }
                    }

                    await conn.sendMessage(from, { text: responseText, contextInfo }, { quoted: userMsg });
                }
            } catch (error) {
                console.error("Error handling response: ", error);
            }
        });
    } catch (e) {
        console.error("Error in Menu Command: ", e);
        reply("❌ *An error occurred while processing your request.*");
    }
});
