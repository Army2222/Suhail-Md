const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348157506828";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_07_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMixcbiAgICAgICAgMTYxLFxuICAgICAgICA5MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4LFxuICAgICAgICA1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjksXG4gICAgICAgIDUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQyLFxuICAgICAgICA0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxLFxuICAgICAgICA4NyxcbiAgICAgICAgNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0LFxuICAgICAgICA0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMixcbiAgICAgICAgMjI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk0LFxuICAgICAgICA3NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicWt1N0FtM3ZuYTJRZFJvTUhRQVJlR00xSjgzdVJpUjY5Nko2b1BuS2ZGcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYTNkUXo0X3pTaUN4WGZ5cjZpSzdZZ1wiLFxuICBcInBob25lSWRcIjogXCI4YTU1YWVmNC05MGJmLTQyMGItODgyMy0zZDFkYjk5NWQwMGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTkzLFxuICAgICAgNjQsXG4gICAgICAxNzgsXG4gICAgICAxNjksXG4gICAgICAxLFxuICAgICAgMjQ1LFxuICAgICAgODcsXG4gICAgICAyMTcsXG4gICAgICAyMDcsXG4gICAgICAxNDUsXG4gICAgICAxNSxcbiAgICAgIDIwNyxcbiAgICAgIDMxLFxuICAgICAgMTc2LFxuICAgICAgMTI1LFxuICAgICAgNjYsXG4gICAgICAyMSxcbiAgICAgIDE0MyxcbiAgICAgIDExOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxNzAsXG4gICAgICA0MixcbiAgICAgIDE4OSxcbiAgICAgIDI0MCxcbiAgICAgIDE1NyxcbiAgICAgIDEyMixcbiAgICAgIDE2NCxcbiAgICAgIDIyLFxuICAgICAgMTQwLFxuICAgICAgMTQyLFxuICAgICAgMjIxLFxuICAgICAgNDYsXG4gICAgICA0OSxcbiAgICAgIDE1OSxcbiAgICAgIDIxMSxcbiAgICAgIDE5OCxcbiAgICAgIDEyMyxcbiAgICAgIDI1NSxcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lyRWhZNERFTzNRM0xJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicjB0RGxaK3VDbDY1dWhtWGsxc1FmYUxSZ2t0bVdNWDVWZkVmcktoSDdCdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwWmt6dit2VWJNc2tWdnRTcVYwVWRoQ29peGI2SmQ4a1NKdnlWZDUxeGJ4S2JLaFo1aEFnYU9oNWM5cVQ4VCs0TzVXa0pPTmhZeFVHcnU5eThWRnBCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4amRXZllWUkh0UVNuVlBzMFhuOXNwZG5PNnRyZHFKTlp5ZVBaamczaE9PQ1JmZ1d3UHRoMFJvcjBwbk1JTXhseWNiTHQ4QzdnVmJudCt1VHY2Nmpndz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNTc1MDY4Mjg6NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg0MDY1NTYyNjY5MjIwOjY0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1NzUwNjgyODo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2OTg4MDE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDZlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMNmUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVUHM1V25jMFZRWGZEVUFnTGZrWlRFOUJjdkxFZ2VQdHBsMU00d1ZqUlkwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzNDc1NzEyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDZmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaTA1UzMyVjg5QTM2Z2NFN3YyRmwrcDlSYStYMXZ3bUhXZ3hrWFJKT3FYUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MzQ3NTcxMjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY5ODc5MjYxNDRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "PABLO BOT GAY",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
