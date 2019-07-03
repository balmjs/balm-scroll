// Ref https://github.com/WICG/EventListenerOptions/pull/30
function isPassive() {
  let supportsPassiveOption = false;

  try {
    addEventListener(
      'test',
      null,
      Object.defineProperty({}, 'passive', {
        get: function() {
          supportsPassiveOption = true;
        }
      })
    );
  } catch (e) {}

  return supportsPassiveOption;
}

export default isPassive;
