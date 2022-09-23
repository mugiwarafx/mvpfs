<p align="center">
    <img src="https://github.com/mugiwarafx/khan-academy-submit-shortcut-reworked/blob/master/assets/icon-128.png"
        height="138">
</p>
<p align="center">
    <a href="https://github.com/mugiwarafx/mvpfs/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/mugiwarafx/mvpfs" /></a>
    <a href="https://github.com/mugiwarafx/mvpfs/pulse" alt="Activity">
        <img src="https://img.shields.io/github/commit-activity/m/mugiwarafx/mvpfs" /></a>
    <a href="https://discord.gg/AxY3Vz92Pj">
        <img src="https://img.shields.io/discord/999722575057924207?logo=discord"
            alt="chat on Discord"></a>
</p>

# MVP Full-Stack 🚀

Mauris nec metus non ante molestie iaculis at efficitur mi. Integer id viverra est, nec suscipit magna. Aliquam ultricies consequat aliquam. Cras pretium et ligula quis aliquam. In non sem mollis, semper tellus id, auctor dui. 

## Installation

**Requirements:** `git`, `docker`, and `docker-compose`

```sh
git clone https://github.com/mugiwarafx/mvpfs.git
cd mvpfs
docker-compose up
```

## Development

```cmd
git clone https://github.com/mugiwarafx/mvpfs.git
```
### Back-end
```cmd
cd mvpfs/backend
npm run dev
```

### Front-end
```cmd
cd mvpfs/backend
npm run start
```

## Usage 🧐
For debugging and showcase purposes, you can use `seller:seller` and `buyer:buyer` users.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### TODO
- [ ] Sanitization [front & back]
- [ ] Add UpdatedAt col
- [ ] Error handling [front & back]
- [ ] Cache system with graphQL & apollo
- [ ] CDN for product images
- [ ] Set limits [database] (max 1 session per user, limit coins deposits...)
- [ ] Separate backend services
- [ ] Enhance the security of our endpoints/server/express
- [ ] Migrate to TypeScript
- [ ] Clean up non-used libs
- [ ] Mock-up a roadmap and how the app will scale

## License
[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)
