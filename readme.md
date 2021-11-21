# My current homepage, based on Brittay Chiang's design

## Tools used

- Written in TypeScript
- Built with Vite.JS
- Uses React as front-end framework
- Uses a Google Spreadsheet (!) as "headless CMS" via GoogleAPIs
- Back-end API built using Netlify Functions
- Deployed on Netlify

## How to run locally

- `npm install`
- `npm run netlify` (this will automatically start vite dev server)
- You need three environment variables for accessing the google spreadsheet (SHEET_ID, CLIENT_EMAIL and PRIVATE_KEY). Note: Make sure to use qutation marks " around the PRIVATE_KEY.

## How to deploy

- Configure environment variables, the rest should be vanilla
- Make sure NOT to use quotation marks around the PRIVATE_KEY value!

## On a final note...

I might make a video and/or a Medium article on the journey to make googleapis work without the Secrets.JSON, on making Vite work with Netlify Functions locally, and a few other nasty roadblocks I ran into.
