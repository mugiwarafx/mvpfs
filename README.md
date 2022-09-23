<p align="center">
    <img src="https://github.com/mugiwarafx/khan-academy-submit-shortcut-reworked/blob/master/assets/icon-128.png"
        height="138">
</p>
<p align="center">
    <a href="https://github.com/mugiwarafx/khan-academy-submit-shortcut-reworked/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/mugiwarafx/khan-academy-submit-shortcut-reworked" /></a>
    <a href="https://github.com/mugiwarafx/khan-academy-submit-shortcut-reworked/pulse" alt="Activity">
        <img src="https://img.shields.io/github/commit-activity/m/mugiwarafx/khan-academy-submit-shortcut-reworked" /></a>
    <a href="https://discord.gg/AxY3Vz92Pj">
        <img src="https://img.shields.io/discord/999722575057924207?logo=discord"
            alt="chat on Discord"></a>
</p>

# Khan Academy Submit Shortcut Reworked 

A Google Chrome extension that **prevents submit on press enter** while you are typing inside an **input text**, also provides you a shortcut (Ctrl + S) to submit the answer you just typed.

## Installation

```cmd
~S git clone git@github.com:mugiwarafx/khan-academy-submit-shortcut-reworked.git
~$ cd khan-academy-submit-shortcut-reworked
~$ npm install -y
```

## Build

```cmd
~$ cd khan-academy-submit-shortcut-reworked
~$ npm run build
```

## Usage
npm run build command generates a dist folder that you can upload to the following URL (Google Chrome) chrome://extensions

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### TODO
- [x] Set up the project as TypeScript ready.
- [x] Protect master branch, only reviewed PR allowed.
- [x] Capture enter key
- [x] Match KA styles (we don't need it anymore since all the magic happens behind the scenes)
- [x] Separate KA elements from custom elements (namespace) Not needed, the extension has its own namespace.
- [x] Run main functionality as listener each time check answer button is clicked 
- [x] Design extension icon
- [x] Set up a proper README.md
- [ ] Make this component as a11y as possible (handle focus properly when our answer is not correct)
- [ ] Migrate to TypeScript
- [ ] Upload the extension to the chrome store

## License
[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)
