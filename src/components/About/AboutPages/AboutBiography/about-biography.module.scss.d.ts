declare namespace AboutBiographyModuleScssNamespace {
  export interface IAboutBiographyModuleScss {
    about: string;
    about_first: string;
    about_first_block: string;
    about_me: string;
    about_second: string;
    about_second_block: string;
    biography: string;
    biography_header: string;
    biography_photo: string;
    biography_text: string;
  }
}

declare const AboutBiographyModuleScssModule: AboutBiographyModuleScssNamespace.IAboutBiographyModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AboutBiographyModuleScssNamespace.IAboutBiographyModuleScss;
};

export = AboutBiographyModuleScssModule;
