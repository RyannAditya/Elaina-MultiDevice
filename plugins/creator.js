import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧 𝘽𝙤𝙩 `, `𝙉𝙤𝙩 𝙁𝙖𝙢𝙤𝙪𝙨 𝙅𝙪𝙨𝙩 𝘼𝙡𝙤𝙣𝙚 𝘽𝙤𝙮`, `ryannalwaysjb@gmail.com`, `🇮🇩 Indonesia`, `📍 https://github.com/YannPrtm`, `👤 𝙊𝙬𝙣𝙚𝙧 𝘽𝙤𝙩`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 𝘽𝙤𝙩 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥`, `📵 𝘿𝙤𝙣𝙩 𝙨𝙥𝙖𝙢 𝙤𝙧 𝙘𝙖𝙡𝙡 𝙢𝙚 😢`, `ɴᴏᴛʜɪɴɢ`, `🇮🇩 Indonesia`, `📍 https://github.com/YannPrtm/Elaina-MultiDevice`, `𝙃𝙖𝙣𝙮𝙖 𝙗𝙤𝙩 𝙗𝙞𝙖𝙨𝙖 𝙮𝙖𝙣𝙜 𝙨𝙪𝙠𝙖 𝙚𝙧𝙧𝙤𝙧 ☺`]
  ], fkontak)
  await m.reply(`𝙃𝙚𝙡𝙡𝙤 @${m.sender.split(`@`)[0]} 𝙏𝙝𝙖𝙩𝙨 𝙢𝙮 𝙤𝙬𝙣𝙚𝙧 𝙙𝙤𝙣𝙩 𝙨𝙥𝙖𝙢 𝙤𝙧 𝙮𝙤𝙪 𝙬𝙞𝙡𝙡 𝙗𝙚 𝙗𝙡𝙤𝙘𝙠𝙚𝙙`)
  } 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
