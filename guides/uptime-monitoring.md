# Uptime Monitoring

## Tool

**UptimeRobot** (free tier — uptimerobot.com)
- Free for up to 50 monitors
- Checks every 5 minutes
- Sends email alert when a site goes down and when it comes back up
- No WordPress plugin required — monitors from outside the server

## Setup

1. Create a free UptimeRobot account
2. Add a new monitor for each client site:
   - Monitor type: HTTP(s)
   - URL: https://clientsite.com
   - Monitoring interval: 5 minutes
   - Alert contact: your agency email
3. Add a monitor for your MainWP dashboard site too

## When an alert fires

1. Check if the issue is server-wide (log into Cloudways — check server status)
2. If server is fine, check the specific application in Cloudways
3. Check Wordfence logs for any security events
4. If site is down due to a plugin update, roll back via MainWP or UpdraftPlus
5. Notify the client only if downtime exceeds 15 minutes or affects their ordering/payments

## Escalation

If Cloudways server is down, check the DigitalOcean status page (status.digitalocean.com). Server outages are rare but outside your control — document the incident and communicate to affected clients.
