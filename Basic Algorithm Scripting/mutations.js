function mutation(arr) {
  let state = true;

  for (let i = 0; i < arr[1].length; i++) {
    let main = arr[0].toLowerCase();
    if (main.includes(arr[1][i].toLowerCase())) {
      continue;
    } else {
      state = false;
    }
  }
  console.log(state);
  return state;
}

mutation(["hello", "Hello"]);
