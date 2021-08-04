export function transitionStyleTo(elem, style, value, duration) {
  let oldValue = elem.style[style];
  elem.style[style] = value;
  elem.animate({ [style]: oldValue, offset: 0 }, duration || 200);
}
