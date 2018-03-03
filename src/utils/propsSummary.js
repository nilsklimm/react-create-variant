/**
 * @param {string} value
 */
function displayValue(value) {
  const type = value.constructor.name;
  switch (type) {
    case 'Boolean':
    case 'Number':
      return value;
    case 'String':
      return `"${value}"`;
    default:
      return `[${type}]`;
  }
}

/**
 * @param {Object} obj
 * @param {number} [limit]
 */
export default function propsSummary(obj, limit = 3) {
  const keys = Object.keys(obj);
  const limitedKeys = keys.slice(0, limit + 1);

  const result = limitedKeys.reduce(
    (acc, key) => {
      const value = displayValue(obj[key]);
      return [...acc, `${key}=${value}`];
    },
    [],
  );

  if (keys.length > limit) {
    result.push('...');
  }

  return result.join(' ');
}
