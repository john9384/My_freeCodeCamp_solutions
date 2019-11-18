function rot13(str) {
  function ceaserCipher(str) {
    //Deciphered reference letters
    let cipher = {
      a: "n",
      b: "o",
      c: "p",
      d: "q",
      e: "r",
      f: "s",
      g: "t",
      h: "u",
      i: "v",
      j: "w",
      k: "x",
      l: "y",
      m: "z",
      n: "a",
      o: "b",
      p: "c",
      q: "d",
      r: "e",
      s: "f",
      t: "g",
      u: "h",
      v: "i",
      w: "j",
      x: "k",
      y: "l",
      z: "m"
    };

    str = str.toLowerCase();
    let decipher = "";
    for (let i = 0; i < str.length; i++) {
      decipher += cipher[str[i]];
    }
    return decipher.toUpperCase();
  }

  function rot13(str) {
    function ceaserCipher(str) {
      //Deciphered reference letters
      let cipher = {
        a: "n",
        b: "o",
        c: "p",
        d: "q",
        e: "r",
        f: "s",
        g: "t",
        h: "u",
        i: "v",
        j: "w",
        k: "x",
        l: "y",
        m: "z",
        n: "a",
        o: "b",
        p: "c",
        q: "d",
        r: "e",
        s: "f",
        t: "g",
        u: "h",
        v: "i",
        w: "j",
        x: "k",
        y: "l",
        z: "m"
      };

      str = str.toLowerCase();
      let decipher = "";
      for (let i = 0; i < str.length; i++) {
        decipher += cipher[str[i]];
      }
      return decipher.toUpperCase();
    }

    function decoder(str) {
      let charExp = /[,!@#$%^&*()]/g;
      if (charExp.test(str) == true) {
        let char = str.match(charExp);
        str = str.replace(char[0], "");
        let ciphered_String = str
          .split(" ")
          .map(x => {
            return ceaserCipher(x);
          })
          .join(" ");
        str = ciphered_String + char[0];
        return str;
      } else {
        let ciphered_String = str
          .split(" ")
          .map(x => {
            return ceaserCipher(x);
          })
          .join(" ");
        str = ciphered_String;
        return str;
      }
    }
    str = decoder(str);
    return str;
  }

  console.log(rot13("Hello mr!"));

  function decoder(str) {
    let charExp = /[,!@#$%^&*()]/g;
    if (charExp.test(str) == true) {
      let char = str.match(charExp);
      str = str.replace(char[0], "");
      let ciphered_String = str
        .split(" ")
        .map(x => {
          return ceaserCipher(x);
        })
        .join(" ");
      str = ciphered_String + char[0];
      return str;
    } else {
      let ciphered_String = str
        .split(" ")
        .map(x => {
          return ceaserCipher(x);
        })
        .join(" ");
      str = ciphered_String;
      return str;
    }
  }
  str = decoder(str);
  return str;
}

console.log(rot13("Hello mr!"));
