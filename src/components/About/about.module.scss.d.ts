declare namespace AboutModuleScssNamespace {
  export interface IAboutModuleScss {
    about_page: string;
  }
}

declare const AboutModuleScssModule: AboutModuleScssNamespace.IAboutModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AboutModuleScssNamespace.IAboutModuleScss;
};

export = AboutModuleScssModule;
