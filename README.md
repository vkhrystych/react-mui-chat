# react-mui-chat

React chat component, based on [Material-UI framework](https://github.com/mui-org/material-ui)

### Features

- 📱 Responsive styles
- 3️⃣ Contact unread message counter
- 🖥 Fullscreen and compatible modes
- 🔥 Automatic scroll to first unread message
- ⚡️ Automatic scroll to bottom, if contact hasn't unread messages

### Requirements

- React
- ES6

### Install

If you use NPM: `npm i react-mui-chat`

If you use Yarn: `yarn add react-mui-chat`

### Usage

First of all - import component from library:

```
import React from 'react';
import MuiChat from 'react-mui-chat';
```

Then, add componnet to your code:

```
<section>
  <MuiChat>
</section>
```

That's all!

### Props

| Name                    | Type     | Description                                                                                        |
| ----------------------- | -------- | -------------------------------------------------------------------------------------------------- |
| chatStyles              | object   | In this param you will pass all the chat styles properties (see more information under the table). |
| contacts                | array    | Array of objects with contacts.                                                                    |
| selectedContact         | object   | Selected contact object, with mandatory fields: index (integer), messages (array)                  |
| onContactClick          | function | On contact click handler                                                                           |
| onSendBtnClick          | function | On send button click handler                                                                       |
| showContactsFilterInput | boolean  | Flag for show/hide contacts filter input field                                                     |
| onContactsFilterChange  | function | Handler, that recieve value of contact filter input                                                |
| contactsFilterField     | boolean  | Turn on/off contacts filter textfield                                                              |
| msgDateFormat           | string   | Moment date formatting string. See more on [Moment docs](https://momentjs.com/docs/#/displaying/)  |

### Styles

You need to pass 'chatStyles' prop (from the table above)

```

<section>
  <MuiChat chatStyles={{
    contactsColWidth: '350px',
    outcomingMsgColor: '#9b38ff',
  }}>
</section>

```

| Name                 | Type   | Default | Description                          |
| -------------------- | ------ | ------- | ------------------------------------ |
| incomingMsgColor     | string | #eee    | Incoming message background color    |
| outcomingMsgColor    | string | #2196f3 | Outcoming message background color   |
| contactsColWidth     | string | 300px   | Width of contacts column             |
| selectedContactColor | string | #2196f3 | Background color of selected contact |

#### To do (MVP):

1. Add contacts Search field ✅
2. Add scroll to first unread message ✅
3. Add dates between messages ✅
4. Add additional content block for message
5. Add hotkeys for sending messages
6. Refactoring to npm-package
7. Add examples of usage
