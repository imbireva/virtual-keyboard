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

