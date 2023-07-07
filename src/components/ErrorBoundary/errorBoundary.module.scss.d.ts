declare namespace ErrorBoundaryModuleScssNamespace {
  export interface IErrorBoundaryModuleScss {
    error_message: string;
    error_page: string;
  }
}

declare const ErrorBoundaryModuleScssModule: ErrorBoundaryModuleScssNamespace.IErrorBoundaryModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ErrorBoundaryModuleScssNamespace.IErrorBoundaryModuleScss;
};

export = ErrorBoundaryModuleScssModule;
