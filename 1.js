function is(y, m, d) {
  debugger;
  if (m >= 1 && m <= 12) {
    if (m == 2) {
      if ((y % 100 != 0 && y % 4 == 0) || y % 400 == 0) {
        if (1 <= d <= 29) {
          console.log("YES1");
        } else {
          console.log("NO1");
        }
      } else if (d >= 1 && d <= 28) {
        console.log("YSE2");
      } else {
        console.log("NO2");
      }
    } else if (
      (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) &&
      1 <= d <= 31
    ) {
      console.log("YES3");
    } else if (d >= 1 && d <= 30) {
      console.log("YES4");
    } else {
      console.log("NO3");
    }
  } else {
    console.log("NO4");
  }
}

is(2020, 12, 31);
