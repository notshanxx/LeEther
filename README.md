# LeEther

**LeEther** is a personality and self-discovery web application that allows users to explore MBTI personalities, Chinese and Western zodiac signs, take mini personality tests, and create a customizable profile card. The goal of the project is to provide an interactive and visually appealing platform for self-exploration.






## Live Demo

**View Live:** [https://your-website-url.vercel.app](https://le-ether.vercel.app/)






## Features

- MBTI
- Zodiac Signs (Chinese & Western)
- Mini Tests
- Profile Card
- To Be Udated!!





## Tech Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- Zustand (state management)




## Design Decisions

I spent a lot of time worrying about CSS and making the website look perfect, which slowed down the development process. To focus more on building the actual features of LeEther, I decided to keep the design simple and minimal.

I used **Tailwind CSS** and **DaisyUI** because they allowed me to create a clean and responsive interface quickly without spending too much time writing custom CSS (guess what its more better and faster).






## Structure

Heres the simple structure of the app. I've used default template of next js and worked from there. Below is what it look like:

```
└── 📁app
    └── 📁_components
    └── 📁discover
    └── 📁features
    └── 📁home
    └── 📁mini-test
    └── 📁profile
└── 📁lib
└── 📁stores
└── 📁public
```


`/app` - is where you can find the routes and the components

`/_components` - you can find reusable and main components here like the 3D Card, Modal, NavBar and many more.. You can also find `_components` in the routes folder like the `/discover` and `/profile` for easy navigation

`/data` - you can find data here for the app but there's also `/data` in the routes for easy navigation

`/lib` - here lies the helpful helpers (tysm helpers)

`/stores` - lastly the store is where the persistent data I collect from you mweheheehhe (Im not gonna sell you out) data are saved on localStorage so if you use another browser byebye data


### Routes

here are the main routes

when you open the site in `/` it will redirect you to `/home`

- /home <--landing page
- /profile <--user/your profile
- /discover <-- here is where you discover things to do in this website



### Assets

assets are organized in its each own folder

```
/public
    /mbti
    /zodiacs
        /chinese
        /western
```



### Helpers

```
/lib
/stores
```



## Run on your own computer

```bash
git clone <repository>
cd leether
npm install
npm run dev
```



## Resources
Tysm to this resources ive found

- [16personalities](https://www.16personalities.com/) for the mbti icons or svg
- [feathericons](https://github.com/feathericons/feather) for the icons

