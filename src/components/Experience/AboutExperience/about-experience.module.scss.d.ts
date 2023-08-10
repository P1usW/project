declare namespace AboutExperienceModuleScssNamespace {
  export interface IAboutExperienceModuleScss {
    '#': string;
    bullet: string;
    bullet_active: string;
    exp: string;
    exp_container: string;
    exp_next: string;
    exp_prev: string;
  }
}

declare const AboutExperienceModuleScssModule: AboutExperienceModuleScssNamespace.IAboutExperienceModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AboutExperienceModuleScssNamespace.IAboutExperienceModuleScss;
};

export = AboutExperienceModuleScssModule;
