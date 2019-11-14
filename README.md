# react-mui-chat

React chat component, based on [Material-UI framework](https://github.com/mui-org/material-ui)

### Install

If you use NPM: `npm i tobeor`

If you use Yarn: `yarn add tobeor`

### Requirements

- React
- ES6

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

#### To do:

1. Add contacts Search field ✅
2. Add scroll to first unread message ✅
3. Add dates between messages
4. Add recipient block to top of chat
5. Add additional content block for message
6. Add hotkeys for sending messages
7. Refactoring to npm-package
