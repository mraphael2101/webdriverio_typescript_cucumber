
/** In this context, the never keyword is intended to communicate that this
 * function is intended to never return anything and to crash your script
 */
function generateError(message: string, errCode: number) : never {
    throw { message: message, errorCode: errCode };
}

generateError('This is a fictitious error!', 500);