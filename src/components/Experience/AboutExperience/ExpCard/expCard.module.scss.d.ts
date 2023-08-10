declare namespace ExpCardModuleScssNamespace {
  export interface IExpCardModuleScss {
    slider_card: string;
    slider_date: string;
    slider_text: string;
  }
}

declare const ExpCardModuleScssModule: ExpCardModuleScssNamespace.IExpCardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ExpCardModuleScssNamespace.IExpCardModuleScss;
};

export = ExpCardModuleScssModule;
