declare namespace AboutModuleScssNamespace {
  export interface IAboutModuleScss {
    about: string;
    about_first: string;
    about_me: string;
    biography: string;
    biography_header: string;
    biography_photo: string;
    biography_text: string;
    divClassName: string;
  }
}

declare const AboutModuleScssModule: AboutModuleScssNamespace.IAboutModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AboutModuleScssNamespace.IAboutModuleScss;
};

export = AboutModuleScssModule;
