

You can add these packages by running `yarn add [packageName]` or `npm install [packageName]`

## Pease add the extracted component folder in your project and import the component folder.

E.g. import Component from `[folder path]`

**Note: You might need to load custom fonts that have been used in the component. Font files are available in the `assets/fonts` folder. You can add this code to load these fonts**

### For Expo project

```
import { Font } from "expo";

async componentDidMount(){
  await Font.loadAsync({
    <font-name>:require(<relative-path-to-font-file>)
  })
}
```

### For React-Native project

1. Add rnpm to package.json providing the path to the font files
```
"rnpm": {
  "assets": [
    "./src/assets/fonts/"
  ]
}
```
2. Run react-native link
