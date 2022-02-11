function is(y, m, d) {
  debugger;
  if (m >= 1 && m <= 12) {
    if (m == 2) {
      if ((y % 100 != 0 && y % 4 == 0) || y % 400 == 0) {
        if (1 <= d <= 29) {
          console.log("YES");
        } else {
          console.log("NO");
        }
      } else if (1 <= d <= 28) {
        console.log("YSE");
      } else {
        console.log("NO");
      }
    } else if (
      (y == 1 || y == 3 || y == 5 || y == 7 || y == 8 || y == 10 || y == 12) &&
      1 <= d <= 31
    ) {
      console.log("YES");
    } else if (1 <= d <= 30) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  } else {
    console.log("NO");
  }
}

is(1900, 2, 29);
