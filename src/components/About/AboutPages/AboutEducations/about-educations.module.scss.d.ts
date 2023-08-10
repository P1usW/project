declare namespace AboutEducationsModuleScssNamespace {
  export interface IAboutEducationsModuleScss {
    align_header: string;
    education: string;
    education_info: string;
    education_list: string;
    education_list_container: string;
    education_place: string;
  }
}

declare const AboutEducationsModuleScssModule: AboutEducationsModuleScssNamespace.IAboutEducationsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AboutEducationsModuleScssNamespace.IAboutEducationsModuleScss;
};

export = AboutEducationsModuleScssModule;
