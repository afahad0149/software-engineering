
// Returns a stringified version of input,
// behaving in exactly the same way as JSON.stringify()
function stringifier (input) {

  if (input === undefined) {
    return undefined;
  } else if (input === null) {
    return 'null';
  } else if (typeof input === 'string' ) {
    return `"${input}"`;
  } else if (typeof input === 'number' || typeof input === 'boolean') {
    return String(input);
  }

  if (Array.isArray(input)) {
    let newArray = '[';
    for (let i = 0; i < input.length; i++) {
      if (input[i] === undefined || typeof input[i] === 'function') {
        newArray += 'null,';
      } else
        newArray += `${stringifier(input[i])},`;
    }
    newArray = `${newArray.slice(0,-1)}]`;
    return newArray;
  }

  if (typeof input === 'object') {
    let newObj = '{';
    for (let key of Object.keys(input)) {
      if (input[key] === undefined || typeof input[key] === 'function') {
        continue;
      } else
        newObj += `"${key}":${stringifier(input[key])},`;
    }
    newObj = `${newObj.slice(0,-1)}}`;
    return newObj;
  }

}

// Allow tests to run on the server (leave at the bottom)
if (typeof window === 'undefined') {
  module.exports = stringifier;
}
