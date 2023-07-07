declare namespace LazyImageModuleScssNamespace {
  export interface ILazyImageModuleScss {
    container: string;
    containerLoaded: string;
    image: string;
    imageLoaded: string;
    load: string;
  }
}

declare const LazyImageModuleScssModule: LazyImageModuleScssNamespace.ILazyImageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LazyImageModuleScssNamespace.ILazyImageModuleScss;
};

export = LazyImageModuleScssModule;
