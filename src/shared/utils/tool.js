/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */

export const JSONParse = text => {
  if (text) {
    try {
      return JSON.parse(text);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error.toString());
    }
  }
};
