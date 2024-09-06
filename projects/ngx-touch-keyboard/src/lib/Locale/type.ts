export interface Layout {
  [key: string]: Array<Array<string>>;
}

export interface Display {
  [key: string]: string;
}

export interface Locale {
  code: string;
  flag: string;
  dir: 'ltr' | 'rtl';
  layouts: Layout;
  display: Display;
}
