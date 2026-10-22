# House of Chandu — Boutique Website

A responsive, elegant boutique landing page built with plain HTML, CSS and JavaScript.

## Files

- `index.html` — website content and sections
- `style.css` — colors, typography, responsive layout and animations
- `script.js` — mobile menu, scroll reveals, current year and WhatsApp enquiry links

## Run locally on your MacBook

### Option 1: Open directly
1. Extract the project ZIP.
2. Open the `house_of_chandu` folder in VS Code.
3. Open `index.html` in your browser.

### Option 2: Run a local server (recommended)
1. Open Terminal.
2. Change into the project folder. Example, if it is in Downloads:

   ```bash
   cd ~/Downloads/house_of_chandu
   ```

3. Start Python's built-in server:

   ```bash
   python3 -m http.server 8000
   ```

4. Open this address in your browser:

   `http://localhost:8000`

5. Stop the server with `Control + C` in Terminal.

If the folder is somewhere else, drag the folder into Terminal after typing `cd ` to insert its path.

## Activate WhatsApp ordering

1. Open `script.js` in VS Code.
2. Find this line near the top:

   ```js
   const WHATSAPP_NUMBER = "REPLACE_WITH_BUSINESS_NUMBER";
   ```

3. Replace the placeholder with the shop's number in international format, digits only. For an Indian number, use `91` followed by the 10-digit mobile number. Do not include `+`, spaces or hyphens.

   Example format only: `const WHATSAPP_NUMBER = "91XXXXXXXXXX";`

4. Save the file and refresh the website.

Until you add a real number, the buttons intentionally show a setup message instead of opening an invalid WhatsApp link.

## Customize before publishing

- Replace the stock fashion photos with photos of your actual collections when available.
- Update the location, business hours and any social links in `index.html`.
- Add your own contact details only after confirming them.
- No product prices or real contact details have been invented.
- The design uses Google Fonts and remote Unsplash images, so those assets need an internet connection. To make the site fully self-hosted, download licensed images into `assets/` and update the image paths.

## Publish

You can host the static site using GitHub Pages, Netlify or another static hosting provider. Before publishing, configure the WhatsApp number and replace placeholder contact details.
