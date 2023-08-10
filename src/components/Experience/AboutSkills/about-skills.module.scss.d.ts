declare namespace AboutSkillsModuleScssNamespace {
  export interface IAboutSkillsModuleScss {
    graph: string;
    skills: string;
    skills_row: string;
    text_left: string;
    text_right: string;
  }
}

declare const AboutSkillsModuleScssModule: AboutSkillsModuleScssNamespace.IAboutSkillsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AboutSkillsModuleScssNamespace.IAboutSkillsModuleScss;
};

export = AboutSkillsModuleScssModule;
