declare namespace AnimationCardModuleScssNamespace {
  export interface IAnimationCardModuleScss {
    card: string;
    card_bottom__enter: string;
    card_bottom__enterActive: string;
    card_bottom__exit: string;
    card_bottom__exitActive: string;
    card_down__enter: string;
    card_down__enterActive: string;
    card_down__exit: string;
    card_down__exitActive: string;
    card_left__enter: string;
    card_left__enterActive: string;
    card_left__exit: string;
    card_left__exitActive: string;
    card_opacity__enter: string;
    card_opacity__enterActive: string;
    card_opacity__exit: string;
    card_opacity__exitActive: string;
    card_right__enter: string;
    card_right__enterActive: string;
    card_right__exit: string;
    card_right__exitActive: string;
    card_top__enter: string;
    card_top__enterActive: string;
    card_top__exit: string;
    card_top__exitActive: string;
    card_up__enter: string;
    card_up__enterActive: string;
    card_up__exit: string;
    card_up__exitActive: string;
  }
}

declare const AnimationCardModuleScssModule: AnimationCardModuleScssNamespace.IAnimationCardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AnimationCardModuleScssNamespace.IAnimationCardModuleScss;
};

export = AnimationCardModuleScssModule;
