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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349025902700";




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
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "UHAIL_12_28_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDcsXG4gICAgICAgIDI2LFxuICAgICAgICA1MixcbiAgICAgICAgMjU0LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDMxLFxuICAgICAgICA4MixcbiAgICAgICAgNSxcbiAgICAgICAgMTczLFxuICAgICAgICA5NixcbiAgICAgICAgOTIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc3LFxuICAgICAgICA2NSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjExLFxuICAgICAgICA1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgwLFxuICAgICAgICAzNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzksXG4gICAgICAgIDUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgODUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU4LFxuICAgICAgICA1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY0LFxuICAgICAgICA2NSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICAzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJIM09MYVB1M09udjVNTkhkWHJWdjZPRWtJMHlTdTlOTUN4QXlpT281K253PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjU5MDI3MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRGMTA4OEFCMzBCNzI5MUZEN0RDNTQyRDQ0QjZBQUYwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjk4NTY3M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMjU5MDI3MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRFNjFEMTgyNjZENDY4NEEzNjhEQzVDN0IzMEM3OTYwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjk4NTY3M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJidWNNa1ZRdlJ1aVJSR3BuM3owWFBBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk4NDRhOGRmLTQ5YzEtNDU1Yi1iZjY2LTdhYTNmYjc5NTQ2OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDE0OCxcbiAgICAgIDU0LFxuICAgICAgMjE5LFxuICAgICAgMTk0LFxuICAgICAgMTkxLFxuICAgICAgMjQ1LFxuICAgICAgMTg0LFxuICAgICAgNjYsXG4gICAgICAzMyxcbiAgICAgIDE3NixcbiAgICAgIDIzOCxcbiAgICAgIDk0LFxuICAgICAgMjAxLFxuICAgICAgOTUsXG4gICAgICAyMjIsXG4gICAgICA3NSxcbiAgICAgIDIwLFxuICAgICAgMTE5LFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzMsXG4gICAgICAxODMsXG4gICAgICAyMTUsXG4gICAgICAxOTMsXG4gICAgICAxNzYsXG4gICAgICAxNDYsXG4gICAgICAxMzUsXG4gICAgICAyNDIsXG4gICAgICA0MCxcbiAgICAgIDE3MSxcbiAgICAgIDE0NyxcbiAgICAgIDQ5LFxuICAgICAgMTUsXG4gICAgICAxNzgsXG4gICAgICAyMzQsXG4gICAgICAxOTIsXG4gICAgICAxMCxcbiAgICAgIDc2LFxuICAgICAgNjMsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPV1o2cDBCRU1LKzNMSUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVwTU1FYWNzVGh1NE40TVBzd1k1VXlOc3JkaUNUbVliamhyKzhZTlNzUm89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWUY5WGc5NVBIM2EycmhLcC8vamRYVlFrWWxzRVRYWCttazg4dzlTRjcrb2gzOVkzanI5M0R4NUxMcGwydytaYmVVTU1PZHkvOGpjakNNYURXaVUyQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN05LYjFLN2c1WllpZzhRNWc2YlgwSnYzcUdyU1Q3SmU3WGE5VmgzOGZULzdQd1ViTXd4U2wrcU9tS280NzBoKzlVc0FtL3VYbXRjNzBnUGNKQTRjQlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDI1OTAyNzAwOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjUzODY3NDE4ODMwOTY6MTdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwic3VjY2Vzc2Z1bGtvbnRyb2xsZXJcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjU5MDI3MDA6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY5ODU2NzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCbUZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJtRS5qc29uIjogIntcImtleURhdGFcIjpcIk1VWDZDcnJyWW1YbHVMRmJYdVByZWNTaWtVZUZMOXJnRENGYzJuNlU5UXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzMwOTkyODY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCbUYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZVG5mUEtDZUM1dG9oVUpJakhJeGJGbXJRV25obmluNmkrQ0ZxcTI0YmNZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMzMDk5Mjg2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm1HLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaW0yU3Z6enUvdnFPekt4RlFKQ0kyZEMzMFpPd0lKa3FXKzlqbVlwcXZ5TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMzA5OTI4NjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTMxOTMyMjYzNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
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
