declare namespace ExperienceModuleScssNamespace {
  export interface IExperienceModuleScss {
    experience: string;
  }
}

declare const ExperienceModuleScssModule: ExperienceModuleScssNamespace.IExperienceModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ExperienceModuleScssNamespace.IExperienceModuleScss;
};

export = ExperienceModuleScssModule;
