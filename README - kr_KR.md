<h1 align="center">Welcome to Form Builder ๐</h1>

![npm](https://img.shields.io/npm/v/imcformbuilder)
![npm bundle size](https://img.shields.io/bundlephobia/min/imcformbuilder?style=plastic)
![npm](https://img.shields.io/npm/dm/imcformbuild)

> Make ant design base styled form with ease. It enable to use form by just adding json files of style and list. Form Builder provides editing function, such as adding, removing items, change look and feels like number of columes, vertical, horizontal title layout etc. It can edit existing form, also create new form from scratch.
>
> | Display                                                                                                                | Form Edit                                                                                                            |
> | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
> | <a href="http://imcmaster.iptime.org/form" ><img src="https://i.ibb.co/7yWH0tT/antformdisplay.png" width="400px"/></a> | <a href="http://imcmaster.iptime.org:3080" ><img src="https://i.ibb.co/RNbtwWF/imcformedit.png" width="400px"/> </a> |

### ๐  [Homepage](http://imcmaster.iptime.org:3080)

### โจ [Demo](http://imcmaster.iptime.org:4009/form/edit)

[English](./README.md) | ํ๊ธ

## Install

```sh
npm install formbuilder
```

## Usage basic

ํผ์ ํธ์งํ๊ธฐ ์ํด์๋ showedit={true} ๋ฅผ ์ฝ๋์ค์ ์ฝ์ํด ์ฃผ์ธ์.
์ด๋ ๊ฒ ํ๋ฉด ์๋จ์ ํธ์ง๋ฒํผ์ด ๋ํ๋ฉ๋๋ค. ํธ์ง ์๋ฃ ํ์๋ ์ฝ๋๋ฅผ ์ญ์ ํ์ธ์.

```js
import FormDisplay from "imcformbuilder";
<FormDisplay
  showedit={true}
  formArray={formArray}
  onFinish={onFinish}
  onValuesChange={onValuesChange}
/>;
```

## EventHandler

1. onFinish: ํ๋จ์ submit๋ฒํผ์ ํด๋ฆญํ๋ฉด fire๋ฉ๋๋ค. onFinish eventhandler function์ ์์ฑํ๊ณ  return ๊ฐ์ผ๋ก value๋ฅผ ์ค์ ํ์ธ์.
   ๋ฆฌํด๊ฐ์ {collection:"abc",querystring:"123",.....}๊ณผ ๊ฐ์ด ํค:๊ฐ์ผ๋ก ๊ตฌ์ฑ๋ json object์๋๋ค.

2. onValuesChange: ์๋ฐ์คํฌ๋ฆฝํธ์ onKeyPress์ ๊ฐ์ด ํค์๋ ฅ๊ณผ ๋์์ ๋ฆฌํด๋๋ ์ด๋ฒคํธํธ๋ค๋ฌ๋ก์ ๋๊ฐ์ ๊ฐ์ ๋ฆฌํดํฉ๋๋ค.
   ์ฒซ๋ฒ์งธ๋ ํ์ฌ ํด๋ฆญํ ํผ์์ดํ์ ํค์ ๊ฐ์ผ๋ก ๊ตฌ์ฑ๋ json object์ด๊ณ , ๋๋ฒ์งธ๋ onFinish์ ๊ฐ์ด ์ ์ฒด ํค,๊ฐ์ผ๋ก ๊ตฌ์ฑ๋ ์ค๋ธ์ ํธ์๋๋ค.

   e.g.
   a. changedValues: {collection:"abc"},
   b. allValues:{collection:"abc",querystring:undefined.....}

```js
const onFinish = (val) => {
  console.log(val);
};
const onValuesChange = (changedValues, allValues) => {
  console.log(changedValues, allValues);
};
```

## Sample data(formArray)

ํผ์ ๋๊ฒจ์ค ๊ฐ์ธ formArray๋ ํผ์์ดํ๊ฐ๊ณผ ํผ์คํ์ผ๋ก ๊ตฌ์ฑ๋์ด ์์ผ๋ฉฐ ์๋์ ๊ฐ์ต๋๋ค.

1. list: ํผ ์์ดํ
2. setting: ํผ ์คํ์ผ

```sh
{
  "list": [
    {
      "label": "Collection",
      "name": "collection",
      "type": "input",
      "seq": 0,
      "placeholder": "database table",
      "rules": [
        {
          "required": false
        }
      ],
      "requiredmsg": "you must insert"
    },
    {
      "label": "QueryString",
      "name": "querystring",
      "type": "input",
      "seq": 1,
      "placeholder": "pid=xxxx or _id=yyyy",
      "msgright": "๋ผ์ดํธ ๋ฉ์์ง"
    },
    {
      "label": "Submit",
      "name": "",
      "type": "button",
      "seq": 7,
      "action": "submit",
      "btnStyle": "primary",
      "btnColor": "primary",
      "align": "right"
    }
  ],
 "setting": {
    "editable": false,
    "name": "antform",
    "layout": "horizontal",
    "formColumn": 1,
    "formItemLayout": {
      "labelCol": {
        "span": 4
      },
      "wrapperCol": {
        "span": 20
      }
    },
    "tailLayout": {},
    "initial": {},
    "size": "middle",
    "onFinish": "{values => {console.log(values);};}",
    "initialValues": {}
  },
 }
```

## Edit Form

imcformbuilder๋ก showedit={true}๊ฐ์ ์ถ๊ฐํ๋ฉด ํผ ์๋จ์ ํด๋ฆญ๋ฒํผ์ด ์์ฑ๋๋ฉฐ, ํด๋ฆญ์ ์์ ํ์ด์ง์ง๋ก ์ด๋ํฉ๋๋ค.

[![FormEdit](https://i.ibb.co/ZhgW0SR/Imcformedit-small.png)](https://www.youtube.com/watch?v=_Fgp1g39Dc8 "Everything Is AWESOME")

## Author

๐ค **Youngki Nam**

- Website: http://imcmaster.iptime.org
- Github: [@ykn9080](https://github.com/ykn9080)
