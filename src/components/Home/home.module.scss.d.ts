declare namespace HomeModuleScssNamespace {
  export interface IHomeModuleScss {
    home: string;
    home_buttons: string;
    home_gradient: string;
    home_left: string;
    home_photo: string;
    home_right: string;
    home_text: string;
  }
}

declare const HomeModuleScssModule: HomeModuleScssNamespace.IHomeModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeModuleScssNamespace.IHomeModuleScss;
};

export = HomeModuleScssModule;
