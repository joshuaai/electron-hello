# Simple Electron App

## The How

### Getting Started

* npm init -y
* npm install --save-dev electron

Add a start script to `package.json`:

```js
"start": "electron index.js",
```

Add the `index.js` and `index.html` files.

Run the app with `npm run start`.

### Loading CSS and JS in BrowserWindow

We use the node `renderer()` in the Script tag and import the CSS normally.