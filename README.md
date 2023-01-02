# low-level-system-design-javascript

### STEP-1 install the babel:

#### npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env


### STEP-2 set below code in package.json

#### {
    "scripts": {
        "start": "babel-node Main.js"
    },
    "devDependencies": {
        "@babel/cli": "^7.19.3",
        "@babel/core": "^7.20.5",
        "@babel/node": "^7.20.5",
        "@babel/preset-env": "^7.20.2"
    }
}

### STEP-3 make file .babelrc and paste below snippet

#### {
    "presets": ["@babel/preset-env"]
}


### STEP-4 run the project

#### npm install


#### npm run start
