// 「残り○日」を10→0日にカウントダウン
for (let i = 10; i >= 0; i--) {
  console.log('あと' + i + '日');
}

// 3の倍数はFizz、5の倍数はBuzz、15の倍数はFizzBuzz
for (let i = 1; i <= 100000; i++) {
  if (i % 15 === 0) {
    document.write('FizzBuzz ');
  } else if (i % 5 === 0) {
    document.write ('Buzz ');
  } else if (i % 3 === 0) {
    document.write('Fizz ');
  } else {
    document.write(i + ' ');
  }
}