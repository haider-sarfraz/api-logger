const logDecorator = (fn) => {
  return async (...params) => {
    try {
      if(params.length !== fn.length) {
        throw new Error('Invalid number of arguments passed');
      }
      console.log(`[${fn.name}][API_REQUEST] params -> `,params);
      const result = await fn(...params);
      console.log(`[${fn.name}][API_RESPONSE] - `, result);
      return result;
    } catch (error) {
      console.error(`[${fn.name}][API_ERROR] - `, error);
      return;
    }
  };
};

export default logDecorator;