import React, { Component } from "react";

import ChatContainer from "./ChatContainer";

class App extends Component {
  state = {
    selectedContact: {
      index: 3,
      messages: [
        {
          incoming: true,
          text:
            "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
        },

        {
          incoming: true,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: false,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: true,
          text:
            "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
        },

        {
          incoming: false,
          text:
            "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
        },

        {
          incoming: false,
          text:
            "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
        },

        {
          incoming: true,
          text:
            "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
        },
        {
          incoming: true,
          text:
            "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
        },

        {
          incoming: true,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: false,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: true,
          text:
            "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
        },

        {
          incoming: false,
          text:
            "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
        },

        {
          incoming: false,
          text:
            "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
        },

        {
          incoming: true,
          text:
            "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
        },
        {
          incoming: true,
          text:
            "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
        },

        {
          incoming: true,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: false,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: true,
          text:
            "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
        },

        {
          incoming: false,
          text:
            "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
        },

        {
          incoming: false,
          text:
            "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
        },

        {
          incoming: true,
          text:
            "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
        },
        {
          incoming: true,
          text:
            "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
        },

        {
          incoming: true,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: false,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: true,
          text:
            "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
        },

        {
          incoming: false,
          text:
            "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
        },

        {
          incoming: false,
          text:
            "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
        },

        {
          incoming: true,
          text:
            "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
        },
        {
          incoming: true,
          text:
            "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
        },

        {
          incoming: true,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: false,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: true,
          text:
            "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
        },

        {
          incoming: false,
          text:
            "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
        },

        {
          incoming: false,
          text:
            "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
        },

        {
          incoming: true,
          text:
            "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
        },
        {
          incoming: true,
          text:
            "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
        },

        {
          incoming: true,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: false,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: true,
          text:
            "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
        },

        {
          incoming: false,
          text:
            "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
        },

        {
          incoming: false,
          text:
            "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
        },

        {
          incoming: true,
          text:
            "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
        },
        {
          incoming: true,
          text:
            "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
        },

        {
          incoming: true,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: false,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: true,
          text:
            "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
        },

        {
          incoming: false,
          text:
            "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
        },

        {
          incoming: false,
          text:
            "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
        },

        {
          incoming: true,
          text:
            "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
        },
        {
          incoming: true,
          text:
            "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
        },

        {
          incoming: true,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: false,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: true,
          text:
            "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
        },

        {
          incoming: false,
          text:
            "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
        },

        {
          incoming: false,
          text:
            "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
        },

        {
          incoming: true,
          text:
            "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
        },
        {
          incoming: true,
          text:
            "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
        },

        {
          incoming: true,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: false,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: true,
          text:
            "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
        },

        {
          incoming: false,
          text:
            "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
        },

        {
          incoming: false,
          text:
            "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
        },

        {
          incoming: true,
          text:
            "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
        },
        {
          incoming: true,
          text:
            "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
        },

        {
          incoming: true,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: false,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: true,
          text:
            "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
        },

        {
          incoming: false,
          text:
            "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
        },

        {
          incoming: false,
          text:
            "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
        },

        {
          incoming: true,
          text:
            "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
        },
        {
          incoming: true,
          text:
            "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
        },

        {
          incoming: true,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: false,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: true,
          text:
            "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
        },

        {
          incoming: false,
          text:
            "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
        },

        {
          incoming: false,
          text:
            "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
        },

        {
          incoming: true,
          text:
            "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
        },
        {
          incoming: true,
          text:
            "На прошедшей конференции FrontendConf было много интересных докладов про CSS."
        },

        {
          incoming: true,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: false,
          text:
            "Эти выступления, особенно выступление Никиты Дубко с докладом “CSS — язык программирования”, навели меня на мысль о том, что стоит немного разобрать часто встречающиеся вопросы с собеседований про HTML-CSS, которые некоторые обходят стороной, делая упор на JavaScript."
        },

        {
          incoming: true,
          text:
            "Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:"
        },

        {
          incoming: false,
          text:
            "Это точные ответы которые корректны для всех браузеров. Дополнительно вы можете (но не обязательно) сказать что размер шрифта так же:"
        },

        {
          incoming: false,
          text:
            "Но эти значения могут быть разными в разных браузерах и могут быть изменены пользовательскими настройками."
        },

        {
          incoming: true,
          text:
            "Как уже говорилось выше, браузер создаст DOM структуру и если чего-то не хватает или есть ошибки, то браузер их попытается исправить."
        }
      ]
    }
  };

  onContactClick = contactIndex => {
    this.setState({ selectedContact: contactIndex });
  };

  render() {
    const { selectedContact } = this.state;

    return (
      <div>
        <ChatContainer
          selectedContact={selectedContact}
          onContactClick={this.onContactClick}
        />
      </div>
    );
  }
}

export default App;
