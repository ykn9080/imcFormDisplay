<h1 align="center">Welcome to Form Builder 👋</h1>

> Make ant design base styled form with ease. It enable to use form by just adding json files of style and list. Form Builder provides editing function, such as adding, removing items, change look and feels like number of columes, vertical, horizontal title layout etc. It can edit existing form, also create new form from scratch.
> 
| Display   | Form Edit  |
|---|---|
| <a href="http://imcmaster.iptime.org/form" ><img src="https://i.ibb.co/7yWH0tT/antformdisplay.png" width="400px"></a>  | <a href="http://imcmaster.iptime.org:3080" ><img src="https://i.ibb.co/RNbtwWF/imcformedit.png" width="400px"> </a> |


### 🏠 [Homepage](http://imcmaster.iptime.org:3080)

### ✨ [Demo](http://imcmaster.iptime.org:4009/form/edit)

## Install

```sh
npm install formbuilder
```

## Usage basic

While you develop, showedit={true} will show you edit button.
Upon complete development, change showedit to false to hide button.

```sh
 <AntFormDisplay
      showedit={true}
      formArray={formArray}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
    />
```

## EventHandler

1. onFinish: By clicking submit button, onFinish function returns a value as object.
   With this you can proceed other action, such as save to server or change state.
   Return data is key value object for example: {collection:"abc",querystring:"123",.....}
2. onValuesChange: returns two parameters, changedValues, allValues.
   First value return just changed key value object, last value returns all key value object.
   e.g.
   a. changedValues: {collection:"abc"},
   b. allValues:{collection:"abc",querystring:undefined.....}

```sh
 const onFinish = (val) => {
    console.log(val);
  };
  const onValuesChange = (changedValues, allValues) => {
    console.log(changedValues, allValues);
  };
```

## Sample data(formArray)

formArray is composed of two parts:

1. list: items in the form
2. setting: look and feel of the form

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

If you provide pros as showedit={true} and click edit button, it redirect edit page.



## Edit Form

If you provide pros as showedit={true} and click edit button, it redirect edit page.



## Author

👤 **Youngki Nam**

- Website: http://imcmaster.iptime.org
- Github: [@ykn9080](https://github.com/ykn9080)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

