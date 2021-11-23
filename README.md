# React Native Mobile App

# Wasfity - Recipes App

## First Steps To perepare My Enviroment

- For Windows

  - Install Node.js v.14 or less
  - Install jdk v.15 or less
  - Install Android Studio for 'SDK' & 'Android Emulator'
  - Check System Variables

    JAVA_HOME:

    `C:\Program Files\Java\jdk1.8.0_211`

    ANDROID_HOME:

    `C:\Users\[UserName]\AppData\Local\Android\Sdk`

- Create Emulator in Android Studio from 'AVD Manager'

- To install yarn
  ```
  npm i -g yarn
  ```
- To install node modules

  ```
  npm init
  ```

  OR

  ```
  yarn
  ```

  ** Important Note: Use 'yarn' for this project **

- Create & install 'React Native' project

  ```
  npx react-native init ReactNativeLabs
  ```

  - Go to project folder

  ```
  cd ReactNativeLabs
  ```

- Install React Native Vector Icons

  ```
  npm i react-native-vector-icons
  ```

  OR

  ```
  yarn add react-native-vector-icons
  ```

- Install Axios (for HTTP requests)

  ```
  npm install axios
  ```

  OR

  ```
  yarn add axios
  ```

  - To use it:
    ```
    import axios from 'axios';
    ```

- Link your native dependencies (Link Libraries)

  ```
  npx react-native link
  ```

- Install react-native-app-intro-slider

  ```
  yarn add react-native-app-intro-slider
  ```

  OR

  ```
  npm install react-native-app-intro-slider --save
  ```

  References:

  https://aboutreact.com/react-native-app-intro-slider/
  https://www.npmjs.com/package/react-native-app-intro-slider

- Install react-native-onboarding-swiper

  ```
  yarn add react-native-onboarding-swiper
  ```

  OR

  ```
  npm i react-native-onboarding-swiper
  ```

  Reference: https://www.npmjs.com/package/react-native-onboarding-swiper

### For navigation install @react-navigation/native @react-navigation/native-stack

```
npm install @react-navigation/native @react-navigation/native-stack
```

OR

```
yarn add @react-navigation/native @react-navigation/native-stack
```

Then Installing dependencies into a bare React Native project

```
npm install react-native-screens react-native-safe-area-context
```

OR

```
yarn add react-native-screens react-native-safe-area-context
```

Refrences:

https://reactnative.dev/docs/navigation
https://reactnavigation.org/docs/getting-started/

### Bottom Tabs Navigator

Sample: https://reactnavigation.org/assets/navigators/tabs/bottom-tabs-demo.mov

- Install @react-navigation/bottom-tabs
  ```
  yarn add @react-navigation/bottom-tabs
  ```
  Reference:
  https://reactnavigation.org/docs/bottom-tab-navigator/

### Install React Native Drawer

```
npm install --save react-native-drawer
```

OR

```
yarn add react-native-drawer
```

### To Run the app on the Emulator

- Open the emulator
- In the app folder:
  ```
  npm run android
  ```

### on Android Emulator:

To refresh app:

`Press R then R`

To show options and devTools

`Press ctrl + M`

---

## Steps to perepare files' structure (design pattern)

- Create 'src' folder
- Move 'App.js' to 'src' folder
- Rename 'App.js' to 'index.js'
- Update 'App' path in the outter 'index.js' file
- Create folders {common, components, screens} in 'src' folder each has 'index.js' file
- Create 'assets' folder to put images and fonts (or any resorces) in it

### To use fonts

- Create 'react-native.config.js' file
- In prev file:

```
module.exports = {
assets: ['./assets/fonts/'],
};
```
