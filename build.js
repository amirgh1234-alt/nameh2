// build.js
const { build } = require('electron-builder');

build({
  targets: require('electron-builder').Platform.WINDOWS.createTarget(),
  config: {
    appId: 'com.yourname.nevisandeh',
    productName: 'Nevisandeh AI',
    directories: {
      output: 'release'
    },
    files: [
      'dist/**/*',
      'node_modules/**/*',
      'electron.js',
      'package.json'
    ],
    win: {
      target: 'nsis',
      icon: 'icon-192.png'
    },
    nsis: {
      oneClick: true,
      shortcutName: 'Nevisandeh AI'
    }
  }
}).then(() => {
  console.log('✅ EXE ساخته شد در پوشه release');
});
