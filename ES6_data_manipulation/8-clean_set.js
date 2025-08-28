export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const parts = [];
  for (const value of set) {
    if (value && value.startsWith(startString)) {
      parts.push(value.substring(startString.length));
    }
  }
  return parts.join('-');
}
