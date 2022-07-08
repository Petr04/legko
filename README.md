# legko

## Project setup
```
npm ci
```

## Build
```
npm run cordova-prepare
cd src-cordova
cordova build android
```
Output file will be at `src-cordova/platforms/android/app/build/outputs/apk/debug/app-debug.apk`

## Run on Android device
1. Connect your device to computer
2. Ensure that developer mode is on
3. Run
```
npm run cordova-prepare
cd src-cordova
cordova run android --device
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
