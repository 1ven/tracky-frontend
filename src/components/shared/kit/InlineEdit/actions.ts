export const SHOW = "shared/kit/inlineEdit/show/";
export const HIDE = "shared/kit/inlineEdit/hide/";

export const show = name => ({
  type: SHOW + name
});

export const hide = name => ({
  type: HIDE + name
});
