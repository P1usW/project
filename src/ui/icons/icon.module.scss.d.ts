declare namespace IconModuleScssNamespace {
  export interface IIconModuleScss {
    link_icon: string;
  }
}

declare const IconModuleScssModule: IconModuleScssNamespace.IIconModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IconModuleScssNamespace.IIconModuleScss;
};

export = IconModuleScssModule;
