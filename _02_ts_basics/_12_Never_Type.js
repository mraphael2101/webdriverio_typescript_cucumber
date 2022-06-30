"use strict";
/** In this context, the never keyword is intended to communicate that this
 * function is intended to never return anything and to crash your script
 */
function generateError(message, errCode) {
    throw { message: message, errorCode: errCode };
}
generateError('This is namespace_features fictitious error!', 500);
