webpackJsonp([48],{47:function(n,e){n.exports='## ColorPicker\n\nColor Picker base on [pickr](https://github.com/Simonwep/pickr)\n\n<iframe height="351" style="width: 100%;" scrolling="no" title="OMIU ColorPicker" src="https://codepen.io/omijs/embed/gOaWmZE?height=351&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">\n  See the Pen <a href=\'https://codepen.io/omijs/pen/gOaWmZE\'>OMIU Checkbox</a> by OMI\n  (<a href=\'https://codepen.io/omijs\'>@omijs</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n\n## Import\n\n```js\nimport \'@omiu/color-picker\'\n```\n\nOr use script tag to ref it.\n\n\n```html\n<script src="https://unpkg.com/@omiu/color-picker"><\/script>\n```\n\n## Usage\n\n```html\n<o-color-picker></o-color-picker>\n```\n\n## API\n\n### Props\n\n```tsx\n{\n  button?: boolean,\n  preview?: boolean,\n  opacity?: boolean,\n  hue?: boolean,\n\n  hex?: boolean,\n  rgba?: boolean,\n  hsla?: boolean,\n  hsva?: boolean,\n  input?: boolean,\n  clear?: boolean,\n  save?: boolean,\n  cmyk?: boolean,\n\n  default?: string,\n\n  swatches?: string[],\n\n  inline?: boolean,\n  strings?: {\n    save: string,  // Default for save button\n    clear: string // Default for clear button\n  }, \n  width?: string\n}\n```\n\n### \u9ed8\u8ba4\u5c5e\u6027\n\n```tsx\n{\n  button: true,\n  preview: true,\n  opacity: true,\n  hue: true,\n\n  hex: true,\n  rgba: true,\n  hsla: true,\n  hsva: false,\n  input: true,\n  clear: true,\n  save: true,\n  cmyk: false,\n\n  default: \'#07c160\',\n\n  swatches: [],\n  inline: true,\n\n  strings: {\n    save: \'Save\',  // Default for save button\n    clear: \'Clear\' // Default for clear button\n  }\n}\n```\n### Events\n\n* init\n* save\n* change\n* swatchselect\n'}});
//# sourceMappingURL=48.1f8846e7.chunk.js.map