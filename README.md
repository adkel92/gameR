# gamer

## Project Intro

gameR is a badly named project to see real life examples of VueJS with Vuex projects. More information on Vue/Vuex to follow here soon.

To make it real life it is hooked up to the twitch owned IGDB game database to pull games information, to create your api key and read up on the docs please click here (https://api-docs.igdb.com/#about) 

Once signed up please add your api key to the config.js file. 

Alternatively you can create your own api using mockable.io. The url that you will need to change if you decide to create your own api is in the proxy config in the vue.config.js file. The current API data structure is: 

```
[
  {
    "id": 87485,
    "cover": {
      "id": 63521,
      "game": 87485,
      "height": 512,
      "image_id": "ya5hcqhbgpynct8zreib",
      "url": "//images.igdb.com/igdb/image/upload/t_thumb/ya5hcqhbgpynct8zreib.jpg",
      "width": 512
    },
    "first_release_date": 1518566400,
    "name": "WildCraft: Wild Sim Online",
    "rating": 100.0
  }
]
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


