const KEYBOARD_DATA = [
  {
    engLayout: '`', rusLayout: 'ё', eventCode: 'Backquote', type: 'letter',
  },
  {
    engLayout: '1', rusLayout: '1', eventCode: 'Digit1', type: 'letter',
  },
  {
    engLayout: '2', rusLayout: '2', eventCode: 'Digit2', type: 'letter',
  },
  {
    engLayout: '3', rusLayout: '3', eventCode: 'Digit3', type: 'letter',
  },
  {
    engLayout: '4', rusLayout: '4', eventCode: 'Digit4', type: 'letter',
  },
  {
    engLayout: '5', rusLayout: '5', eventCode: 'Digit5', type: 'letter',
  },
  {
    engLayout: '6', rusLayout: '6', eventCode: 'Digit6', type: 'letter',
  },
  {
    engLayout: '7', rusLayout: '7', eventCode: 'Digit7', type: 'letter',
  },
  {
    engLayout: '8', rusLayout: '8', eventCode: 'Digit8', type: 'letter',
  },
  {
    engLayout: '9', rusLayout: '9', eventCode: 'Digit9', type: 'letter',
  },
  {
    engLayout: '0', rusLayout: '0', eventCode: 'Digit0', type: 'letter',
  },
  {
    engLayout: '-', rusLayout: '-', eventCode: 'Minus', type: 'letter',
  },
  {
    engLayout: '=', rusLayout: '=', eventCode: 'Equal', type: 'letter',
  },
  {
    engLayout: 'Backspace', rusLayout: 'Backspace', eventCode: 'Backspace', type: '',
  },
  {
    engLayout: 'Tab', rusLayout: 'Tab', eventCode: 'Tab', type: '',
  },
  {
    engLayout: 'q', rusLayout: 'й', eventCode: 'KeyQ', type: 'letter',
  },
  {
    engLayout: 'w', rusLayout: 'ц', eventCode: 'KeyW', type: 'letter',
  },
  {
    engLayout: 'e', rusLayout: 'у', eventCode: 'KeyE', type: 'letter',
  },
  {
    engLayout: 'r', rusLayout: 'к', eventCode: 'KeyR', type: 'letter',
  },
  {
    engLayout: 't', rusLayout: 'е', eventCode: 'KeyT', type: 'letter',
  },
  {
    engLayout: 'y', rusLayout: 'н', eventCode: 'KeyY', type: 'letter',
  },
  {
    engLayout: 'u', rusLayout: 'г', eventCode: 'KeyU', type: 'letter',
  },
  {
    engLayout: 'i', rusLayout: 'ш', eventCode: 'KeyI', type: 'letter',
  },
  {
    engLayout: 'o', rusLayout: 'щ', eventCode: 'KeyO', type: 'letter',
  },
  {
    engLayout: 'p', rusLayout: 'з', eventCode: 'KeyP', type: 'letter',
  },
  {
    engLayout: '[', rusLayout: 'х', eventCode: 'BracketLeft', type: 'letter',
  },
  {
    engLayout: ']', rusLayout: 'ъ', eventCode: 'BracketRight', type: 'letter',
  },
  {
    engLayout: '\\', rusLayout: '\\', eventCode: 'Backslash', type: 'letter',
  },
  {
    engLayout: 'Del', rusLayout: 'Del', eventCode: 'Delete', type: '',
  },
  {
    engLayout: 'Caps Lock', rusLayout: 'Caps Lock', eventCode: 'CapsLock', type: '',
  },
  {
    engLayout: 'a', rusLayout: 'ф', eventCode: 'KeyA', type: 'letter',
  },
  {
    engLayout: 's', rusLayout: 'ы', eventCode: 'KeyS', type: 'letter',
  },
  {
    engLayout: 'd', rusLayout: 'в', eventCode: 'KeyD', type: 'letter',
  },
  {
    engLayout: 'f', rusLayout: 'а', eventCode: 'KeyF', type: 'letter',
  },
  {
    engLayout: 'g', rusLayout: 'п', eventCode: 'KeyG', type: 'letter',
  },
  {
    engLayout: 'h', rusLayout: 'р', eventCode: 'KeyH', type: 'letter',
  },
  {
    engLayout: 'j', rusLayout: 'о', eventCode: 'KeyJ', type: 'letter',
  },
  {
    engLayout: 'k', rusLayout: 'л', eventCode: 'KeyK', type: 'letter',
  },
  {
    engLayout: 'l', rusLayout: 'д', eventCode: 'KeyL', type: 'letter',
  },
  {
    engLayout: ';', rusLayout: 'ж', eventCode: 'Semicolon', type: 'letter',
  },
  {
    engLayout: '"', rusLayout: 'э', eventCode: 'Quote', type: 'letter',
  },
  {
    engLayout: 'Enter', rusLayout: 'Enter', eventCode: 'Enter', type: '',
  },
  {
    engLayout: 'Shift', rusLayout: 'Shift', eventCode: 'ShiftLeft', type: '',
  },
  {
    engLayout: 'z', rusLayout: 'я', eventCode: 'KeyZ', type: 'letter',
  },
  {
    engLayout: 'x', rusLayout: 'ч', eventCode: 'KeyX', type: 'letter',
  },
  {
    engLayout: 'c', rusLayout: 'с', eventCode: 'KeyC', type: 'letter',
  },
  {
    engLayout: 'v', rusLayout: 'м', eventCode: 'KeyV', type: 'letter',
  },
  {
    engLayout: 'b', rusLayout: 'и', eventCode: 'KeyB', type: 'letter',
  },
  {
    engLayout: 'n', rusLayout: 'т', eventCode: 'KeyN', type: 'letter',
  },
  {
    engLayout: 'm', rusLayout: 'ь', eventCode: 'KeyM', type: 'letter',
  },
  {
    engLayout: ',', rusLayout: 'б', eventCode: 'Comma', type: 'letter',
  },
  {
    engLayout: '.', rusLayout: 'ю', eventCode: 'Period', type: 'letter',
  },
  {
    engLayout: '/', rusLayout: '/', eventCode: 'Slash', type: 'letter',
  },
  {
    engLayout: '↑', rusLayout: '↑', eventCode: 'ArrowUp', type: 'letter',
  },
  {
    engLayout: 'Shift', rusLayout: 'Shift', eventCode: 'ShiftRight', type: '',
  },
  {
    engLayout: 'Ctrl', rusLayout: 'Ctrl', eventCode: 'ControlLeft', type: '',
  },
  {
    engLayout: 'Alt', rusLayout: 'Alt', eventCode: 'AltLeft', type: '',
  },
  {
    engLayout: 'Win', rusLayout: 'Win', eventCode: 'MetaLeft', type: '',
  },
  {
    engLayout: ' ', rusLayout: ' ', eventCode: 'Space', type: 'letter',
  },
  {
    engLayout: 'Alt', rusLayout: 'Alt', eventCode: 'AltRight', type: '',
  },
  {
    engLayout: '←', rusLayout: '←', eventCode: 'ArrowLeft', type: 'letter',
  },
  {
    engLayout: '↓', rusLayout: '↓', eventCode: 'ArrowDown', type: 'letter',
  },
  {
    engLayout: '→', rusLayout: '→', eventCode: 'ArrowRight', type: 'letter',
  },
  {
    engLayout: 'Ctrl', rusLayout: 'Ctrl', eventCode: 'ControlRight', type: '',
  },
];

const keyboardChangingData = {
  language: localStorage.getItem('language') || 'eng',
  capslockOn: false,
};

const createTextarea = () => {
  const textArea = document.createElement('textarea');
  textArea.className = 'textarea';
  textArea.setAttribute('cols', '85');
  textArea.setAttribute('rows', '10');
  document.body.append(textArea);
};

const createKeyboard = () => {
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  document.body.append(keyboard);
};

const createKeys = () => {
  const keyboard = document.querySelector('.keyboard');

  KEYBOARD_DATA.forEach((keyData) => {
    const newKey = document.createElement('div');

    newKey.setAttribute('data-engLayout', `${keyData.engLayout}`);
    newKey.setAttribute('data-rusLayout', `${keyData.rusLayout}`);
    newKey.setAttribute('data-type', `${keyData.type}`);
    newKey.setAttribute('data-eventCode', `${keyData.eventCode}`);

    newKey.className = 'key';

    if (keyData.eventCode === 'Backspace'
      || keyData.eventCode === 'CapsLock'
      || keyData.eventCode === 'Enter'
      || keyData.eventCode === 'ShiftLeft'
      || keyData.eventCode === 'ShiftRight'
    ) {
      newKey.classList.add('key_wide');
    }

    if (keyData.eventCode === 'Space') {
      newKey.classList.add('key_space');
    }

    if (keyboardChangingData.language === 'eng') {
      newKey.textContent = newKey.getAttribute('data-engLayout');
    } else {
      newKey.textContent = newKey.getAttribute('data-rusLayout');
    }

    keyboard.append(newKey);
  });
};

const createDescription = () => {
  const description = document.createElement('div');
  description.className = 'description';
  document.body.append(description);

  const system = document.createElement('p');
  system.textContent = 'The keyboard was created in Windows OS';
  description.append(system);

  const language = document.createElement('p');
  language.textContent = 'To switch language use left Shift & Alt on your keyboard or click the button below';
  description.append(language);

  const languageBtn = document.createElement('button');
  languageBtn.className = 'language-button';
  languageBtn.textContent = 'Switch language!';
  description.append(languageBtn);
};

// create page layout
createTextarea();
createKeyboard();
createKeys();
createDescription();

// find the elements we need
const keyboard = document.querySelector('.keyboard');
const keys = document.querySelectorAll('.key');
const capslockKey = document.querySelector('[data-eventCode="CapsLock"]');
const shiftLeftKey = document.querySelector('[data-eventCode="ShiftLeft"]');
const shiftRightKey = document.querySelector('[data-eventCode="ShiftRight"]');
const textarea = document.querySelector('.textarea');
// start with empty textarea
textarea.textContent = '';
// create array for switch language feature
let eventCodesOfPressedBtns = [];

// add click highlight
keyboard.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('key')
  && event.target.getAttribute('data-eventCode') !== 'CapsLock') {
    event.target.classList.add('key_active');
  }
});
keyboard.addEventListener('mouseup', (event) => {
  if (event.target.classList.contains('key')
  && event.target.getAttribute('data-eventCode') !== 'CapsLock') {
    event.target.classList.remove('key_active');
  }
});
// add press keyboard keys highlight
document.addEventListener('keydown', (event) => {
  const targetKey = document.querySelector(`[data-eventCode="${event.code}"]`);
  if (targetKey
    && (targetKey.getAttribute('data-eventCode') !== 'CapsLock')) {
    targetKey.classList.add('key_active');
  }
});
document.addEventListener('keyup', (event) => {
  const targetKey = document.querySelector(`[data-eventCode="${event.code}"]`);
  if (targetKey
    && (targetKey.getAttribute('data-eventCode') !== 'CapsLock')) {
    targetKey.classList.remove('key_active');
  }
});

// change case feature
const changeCase = () => {
  if (!keyboardChangingData.capslockOn) {
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].getAttribute('data-type')) {
        keys[i].textContent = keys[i].textContent.toUpperCase();
      }
    }
    keyboardChangingData.capslockOn = true;
  } else {
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].getAttribute('data-type')) {
        keys[i].textContent = keys[i].textContent.toLowerCase();
      }
    }
    keyboardChangingData.capslockOn = false;
  }
};
capslockKey.addEventListener('click', () => {
  capslockKey.classList.toggle('key_active');
  changeCase();
});
document.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock') {
    capslockKey.classList.toggle('key_active');
    changeCase();
  }
});

