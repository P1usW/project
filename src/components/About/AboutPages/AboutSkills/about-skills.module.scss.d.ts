declare namespace AboutSkillsModuleScssNamespace {
  export interface IAboutSkillsModuleScss {
    skills: string;
    skills_backend: string;
    skills_frontend: string;
    skills_language: string;
    skills_list: string;
    skills_other: string;
  }
}

declare const AboutSkillsModuleScssModule: AboutSkillsModuleScssNamespace.IAboutSkillsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AboutSkillsModuleScssNamespace.IAboutSkillsModuleScss;
};

export = AboutSkillsModuleScssModule;
