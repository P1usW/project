declare namespace NavBarModuleScssNamespace {
  export interface INavBarModuleScss {
    '#': string;
    header_nav: string;
    header_nav_open: string;
    nav: string;
    nav_btn: string;
    nav_left: string;
    nav_link: string;
    nav_link__icon: string;
    nav_link__line: string;
    nav_open: string;
    nav_right: string;
  }
}

declare const NavBarModuleScssModule: NavBarModuleScssNamespace.INavBarModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NavBarModuleScssNamespace.INavBarModuleScss;
};

export = NavBarModuleScssModule;
