import { Layout, Display, Locale } from '../type';
import { fnDisplay } from '../constants';

const layouts: Layout = {
  text_alphabetic: [
    ['ქ', 'წ', 'ე', 'რ', 'ტ', 'ყ', 'უ', 'ი', 'ო', 'პ'],
    ['ა', 'ს', 'დ', 'ფ', 'გ', 'ჰ', 'ჯ', 'კ', 'ლ'],
    ['{shift}',  'ზ', 'ხ', 'ც', 'ვ', 'ბ', 'ნ', 'მ', '{backspace}'],
    ['{language}','{numeric}', '{space}', '{done}'],
  ],
  text_shift: [
    ['ქ', 'ჭ', 'ე', 'ღ', 'თ', 'ყ', 'უ', 'ი', 'ო', 'პ'],
    ['ა', 'შ', 'დ', 'ფ', 'გ', 'ჰ', 'ჟ', 'კ', '₾'],
    ['{shift}', 'ძ', 'ხ', 'ჩ', 'ვ', 'ბ', 'ნ', 'მ', '{backspace}'],
    ['{language}','{numeric}', '{space}', '{done}'],
  ],
  text_numeric: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['-', '/', ':', ';', '(', ')', '$', '&', '@', '"'],
    ['{symbolic}', '.', ',', '?', '!', "'", '{backspace}'],
    ['{language}','{alphabetic}', '{space}', '{done}'],
  ],
  text_symbolic: [
    ['[', ']', '{', '}', '#', '%', '^', '*', '+', '='],
    ['_', '\\', '|', '~', '<', '>', '€', '£', '¥', '•'],
    ['{numeric}', '.', ',', '?', '!', "'", '{backspace}'],
    ['{alphabetic}', '{space}', '{done}'],
  ],
  search_alphabetic: [
    ['ქ', 'წ', 'ე', 'რ', 'ტ', 'ყ', 'უ', 'ი', 'ო', 'პ'],
    ['ა', 'ს', 'დ', 'ფ', 'გ', 'ჰ', 'ჯ', 'კ', 'ლ'],
    ['{shift}', 'ზ', 'ხ', 'ც', 'ვ', 'ბ', 'ნ', 'მ', '{backspace}'],
    ['{language}','{numeric}', '{space}', '{done}'],
  ],
  search_shift: [
    ['ქ', 'ჭ', 'ე', 'ღ', 'თ', 'ყ', 'უ', 'ი', 'ო', 'პ'],
    ['ა', 'შ', 'დ', 'ფ', 'გ', 'ჰ', 'ჟ', 'კ', '₾'],
    ['{shift}', 'ძ', 'ხ', 'ჩ', 'ვ', 'ბ', 'ნ', 'მ', '{backspace}'],
    ['{language}','{numeric}', '{space}', '{done}'],
  ],
  search_numeric: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['-', '/', ':', ';', '(', ')', '$', '&', '@', '"'],
    ['{symbolic}', '.', ',', '?', '!', "'", '{backspace}'],
    ['{language}','{alphabetic}', '{space}', '{done}'],
  ],
  search_symbolic: [
    ['[', ']', '{', '}', '#', '%', '^', '*', '+', '='],
    ['_', '\\', '|', '~', '<', '>', '€', '£', '¥', '•'],
    ['{numeric}', '.', ',', '?', '!', "'", '{backspace}'],
    ['{language}','{alphabetic}', '{space}', '{done}'],
  ],
  email_alphabetic: [
    ['ქ', 'წ', 'ე', 'რ', 'ტ', 'ყ', 'უ', 'ი', 'ო', 'პ'],
    ['ა', 'ს', 'დ', 'ფ', 'გ', 'ჰ', 'ჯ', 'კ', 'ლ'],
    ['{shift}', 'ზ', 'ხ', 'ც', 'ვ', 'ბ', 'ნ', 'მ', '{backspace}'],
    ['{language}','{numeric}', '@', '{space}', '.', '{done}'],
  ],
  email_shift: [
    ['ქ', 'ჭ', 'ე', 'ღ', 'თ', 'ყ', 'უ', 'ი', 'ო', 'პ'],
    ['ა', 'შ', 'დ', 'ფ', 'გ', 'ჰ', 'ჟ', 'კ', '₾'],
    ['{shift}', 'ძ', 'ხ', 'ჩ', 'ვ', 'ბ', 'ნ', 'მ', '{backspace}'],
    ['{language}','{numeric}', '@', '{space}', '.', '{done}'],
  ],
  email_numeric: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['$', '!', '~', '&', '=', '#', '[', ']'],
    ['{symbolic}', '.', '_', '-', '+', '{backspace}'],
    ['{language}','{alphabetic}', '@', '{space}', '.', '{done}'],
  ],
  email_symbolic: [
    ['`', '|', '{', '}', '?', '%', '^', '*', '/', "'"],
    ['$', '!', '~', '&', '=', '#', '[', ']'],
    ['{numeric}', '.', '_', '-', '+', '{backspace}'],
    ['{language}','{alphabetic}', '@', '{space}', '.', '{done}'],
  ],
  url_alphabetic: [
    ['ქ', 'წ', 'ე', 'რ', 'ტ', 'ყ', 'უ', 'ი', 'ო', 'პ'],
    ['ა', 'ს', 'დ', 'ფ', 'გ', 'ჰ', 'ჯ', 'კ', 'ლ'],
    ['{shift}', 'ზ', 'ხ', 'ც', 'ვ', 'ბ', 'ნ', 'მ', '{backspace}'],
    ['{language}','{numeric}', '/', '.com', '.', '{done}'],
  ],
  url_shift: [
    ['ქ', 'ჭ', 'ე', 'ღ', 'თ', 'ყ', 'უ', 'ი', 'ო', 'პ'],
    ['ა', 'შ', 'დ', 'ფ', 'გ', 'ჰ', 'ჟ', 'კ', '₾'],
    ['{shift}', 'ძ', 'ხ', 'ჩ', 'ვ', 'ბ', 'ნ', 'მ', '{backspace}'],
    ['{language}','{numeric}', '/', '.com', '.', '{done}'],
  ],
  url_numeric: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['@', '&', '%', '?', ',', '=', '[', ']'],
    ['{symbolic}', '_', ':', '-', '+', '{backspace}'],
    ['{language}','{alphabetic}', '/', '.com', '.', '{done}'],
  ],
  url_symbolic: [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['*', '$', '#', '!', "'", '^', '[', ']'],
    ['{numeric}', '~', ';', '(', ')', '{backspace}'],
    ['{language}','{alphabetic}', '/', '.com', '.', '{done}'],
  ],
  numeric_default: [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0', '{backspace}'],
  ],
  decimal_default: [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['.', '0', '{backspace}'],
  ],
  tel_default: [
    ['1', '2', '3', '*'],
    ['4', '5', '6', '#'],
    ['7', '8', '9', '+'],
    ['0', '{backspace}'],
  ],
};

const display: Display = {
  '{done}': fnDisplay.DONE,
  '{shift}': fnDisplay.SHIFT,
  '{backspace}': fnDisplay.BACKSPACE,
  '{space}': fnDisplay.SPACE,
  '{language}':fnDisplay.LANGUAGE,
  '{alphabetic}': 'აბგ',
  '{numeric}': '123',
  '{symbolic}': '#+=',
};

const locale: Locale = {
  code: 'ka-GE',
  flag:'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path fill="#ea3323" d="M31 14L18 14 18 4 14 4 14 14 1 14 1 18 14 18 14 28 18 28 18 18 31 18 31 14z"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M10,8.141c-.619,.124-1.246,.202-1.874,.233,.031-.628,.109-1.254,.233-1.874-.57,.075-1.148,.075-1.718,0,.124,.619,.202,1.246,.233,1.874-.628-.031-1.254-.109-1.874-.233,.075,.57,.075,1.148,0,1.718,.619-.124,1.246-.202,1.874-.233-.031,.628-.109,1.254-.233,1.874,.57-.075,1.148-.075,1.718,0-.124-.619-.202-1.246-.233-1.874,.628,.031,1.254,.109,1.874,.233-.075-.57-.075-1.148,0-1.718Z" fill="#ea3323"></path><path d="M22,8.141c.619,.124,1.246,.202,1.874,.233-.031-.628-.109-1.254-.233-1.874,.57,.075,1.148,.075,1.718,0-.124,.619-.202,1.246-.233,1.874,.628-.031,1.254-.109,1.874-.233-.075,.57-.075,1.148,0,1.718-.619-.124-1.246-.202-1.874-.233,.031,.628,.109,1.254,.233,1.874-.57-.075-1.148-.075-1.718,0,.124-.619,.202-1.246,.233-1.874-.628,.031-1.254,.109-1.874,.233,.075-.57,.075-1.148,0-1.718Z" fill="#ea3323"></path><path d="M10,23.859c-.619-.124-1.246-.202-1.874-.233,.031,.628,.109,1.254,.233,1.874-.57-.075-1.148-.075-1.718,0,.124-.619,.202-1.246,.233-1.874-.628,.031-1.254,.109-1.874,.233,.075-.57,.075-1.148,0-1.718,.619,.124,1.246,.202,1.874,.233-.031-.628-.109-1.254-.233-1.874,.57,.075,1.148,.075,1.718,0-.124,.619-.202,1.246-.233,1.874,.628-.031,1.254-.109,1.874-.233-.075,.57-.075,1.148,0,1.718Z" fill="#ea3323"></path><path d="M22,23.859c.619-.124,1.246-.202,1.874-.233-.031,.628-.109,1.254-.233,1.874,.57-.075,1.148-.075,1.718,0-.124-.619-.202-1.246-.233-1.874,.628,.031,1.254,.109,1.874,.233-.075-.57-.075-1.148,0-1.718-.619,.124-1.246,.202-1.874,.233,.031-.628,.109-1.254,.233-1.874-.57,.075-1.148,.075-1.718,0,.124,.619,.202,1.246,.233,1.874-.628-.031-1.254-.109-1.874-.233,.075,.57,.075,1.148,0,1.718Z" fill="#ea3323"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>',
  dir: 'ltr',
  layouts: layouts,
  display: display,
};

export default locale;
