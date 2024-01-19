let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
      case 'pmblocker':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.pmblocker = isEnable
break	  
case 'autobio':
  isAll = true
  if (!isROwner) {
  global.dfail('rowner', m, conn)
  throw false
  }
  bot.autoBio = isEnable
  break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return m.reply(`
List option: welcome | delete | public | antilink | antidelete | antitoxic | autolevelup | detect | document | whitelistmycontacts | restrict | nyimak | autoread | pconly | gconly | swonly
Contoh:
${usedPrefix}enable welcome
${usedPrefix}disable welcome
`.trim())
      throw false
  }
  m.reply(`
*${type}* succeeded in *${isEnable ? 'on' : 'dead'}right* ${isAll ? 'for these bots' : isUser ? '' : 'for this chat'}
`.trim())
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']

handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
