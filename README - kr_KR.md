<h1 align="center">Welcome to Form Builder 👋</h1>

![npm](https://img.shields.io/npm/v/imcformbuilder)
![npm bundle size](https://img.shields.io/bundlephobia/min/imcformbuilder?style=plastic)
![npm](https://img.shields.io/npm/dm/imcformbuild)

> Make ant design base styled form with ease. It enable to use form by just adding json files of style and list. Form Builder provides editing function, such as adding, removing items, change look and feels like number of columes, vertical, horizontal title layout etc. It can edit existing form, also create new form from scratch.
>
> | Display                                                                                                                | Form Edit                                                                                                            |
> | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
> | <a href="http://imcmaster.iptime.org/form" ><img src="https://i.ibb.co/7yWH0tT/antformdisplay.png" width="400px"/></a> | <a href="http://imcmaster.iptime.org:3080" ><img src="https://i.ibb.co/RNbtwWF/imcformedit.png" width="400px"/> </a> |

### 🏠 [Homepage](http://imcmaster.iptime.org:3080)

### ✨ [Demo](http://imcmaster.iptime.org:4009/form/edit)

[English](./README.md) | 한글

## Install

```sh
npm install formbuilder
```

## Usage basic

폼을 편집하기 위해서는 showedit={true} 를 코드중에 삽입해 주세요.
이렇게 하면 상단에 편집버튼이 나타납니다. 편집 완료 후에는 코드를 삭제하세요.

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

1. onFinish: 하단의 submit버튼을 클릭하면 fire됩니다. onFinish eventhandler function을 작성하고 return 값으로 value를 설정하세요.
   리턴값은 {collection:"abc",querystring:"123",.....}과 같이 키:값으로 구성된 json object입니다.

2. onValuesChange: 자바스크립트의 onKeyPress와 같이 키입력과 동시에 리턴되는 이벤트핸들러로서 두개의 값을 리턴합니다.
   첫번째는 현재 클릭한 폼아이템의 키와 값으로 구성된 json object이고, 두번째는 onFinish와 같이 전체 키,값으로 구성된 오브젝트입니다.

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

폼에 넘겨줄 값인 formArray는 폼아이템값과 폼스타일로 구성되어 있으며 아래와 같습니다.

1. list: 폼 아이템
2. setting: 폼 스타일

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
      "msgright": "라이트 메시지"
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

imcformbuilder로 showedit={true}값을 추가허면 폼 상단에 클릭버튼이 생성되며, 클릭시 수정페이지지로 이동합니다.

[![FormEdit](https://i.ibb.co/ZhgW0SR/Imcformedit-small.png)](https://www.youtube.com/watch?v=_Fgp1g39Dc8 "Everything Is AWESOME")

## Author

👤 **Youngki Nam**

- Website: http://imcmaster.iptime.org
- Github: [@ykn9080](https://github.com/ykn9080)
