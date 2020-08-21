let a = ["hello"];
let b = ["world"];

function commonSubstring(a, b) {
  // Write your code here

  let shortString;
  let longString;

  if (a.length <= b.length) {
    shortString = a;
    longString = b;
  } else {
    shortString = b;
    longString = a;
  }

  for (let i = 0; i < shortString.length; i++) {
    let longResult = longString[i].split("");
    console.log("Longresult", longResult);
    let shortResult = shortString[i].split("");
    console.log("shortResult", shortResult);

    if (longResult.includes(shortResult[i])) {
      console.log("Yes");
    } else {
      console.log("NO");
    }
  }
}
