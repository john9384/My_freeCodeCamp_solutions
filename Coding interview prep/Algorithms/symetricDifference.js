const symPair = (first, second) => {
  const a = new Set(first);
  const b = new Set(second);

  return [
    ...first.filter((x) => !b.has(x)),
    ...second.filter((x) => !a.has(x)),
  ];
};

function sym(args) {
  let symArr = [];
  for (let i = 0; i < arguments.length; i++) {
    symArr = symPair(symArr, arguments[i]);
  }
  const symSet = new Set(symArr);
  args = Array.from(symSet).sort();
  return args;
}
sym([1, 2, 3, 3], [5, 2, 1, 4]);
