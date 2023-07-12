declare namespace FooterModuleScssNamespace {
  export interface IFooterModuleScss {
    footer: string;
    footer_icon: string;
    footer_link: string;
    footer_span: string;
    footer_text: string;
    'icon-resize': string;
  }
}

declare const FooterModuleScssModule: FooterModuleScssNamespace.IFooterModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FooterModuleScssNamespace.IFooterModuleScss;
};

export = FooterModuleScssModule;
