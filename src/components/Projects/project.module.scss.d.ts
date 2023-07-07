declare namespace ProjectModuleScssNamespace {
  export interface IProjectModuleScss {
    project: string;
    project_header: string;
    project_list: string;
    project_photo: string;
    project_photo_filter: string;
    project_user: string;
  }
}

declare const ProjectModuleScssModule: ProjectModuleScssNamespace.IProjectModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ProjectModuleScssNamespace.IProjectModuleScss;
};

export = ProjectModuleScssModule;
