# Simple Electron App

## The How

### Getting Started

* npm init -y
* npm install --save-dev electron

Add a start script to `package.json`:

```js
"start": "electron main.js",
```

Add the `main.js` and `index.html` files.

Run the app with `npm run start`.

### Loading CSS and JS in BrowserWindow

We use the node `renderer()` in the Script tag and import the CSS normally.

### Electron Icon Maker
```bash
npm install -g electron-icon-maker-fix

"./node_modules/.bin/electron-icon-maker" -i build-assets/icon-man.png -o build/
```