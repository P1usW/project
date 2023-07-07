declare namespace ProjectCardModuleScssNamespace {
  export interface IProjectCardModuleScss {
    back: string;
    container: string;
    flipper: string;
    flipper_header: string;
    flipper_language: string;
    flipper_link: string;
    front: string;
  }
}

declare const ProjectCardModuleScssModule: ProjectCardModuleScssNamespace.IProjectCardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectCardModuleScssNamespace.IProjectCardModuleScss;
};

export = ProjectCardModuleScssModule;
