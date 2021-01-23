function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2); //converts a number into a string, rounding to a specified number of decimals
  }
  return x.trim(); // removes whitespace from both sides
}

console.log(strip(22.234232));

// instanceOf
class MyResponse {
  header = 'response header';
  result = 'response result';
}

class MyError {
  header = 'error header';
  message = 'error message';
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: 'instanceOf = ' + res.header + '  ' + res.result
    };
  } else {
    return {
      info: 'instanceOf = ' + res.header + '  ' + res.message
    };
  }
}

console.log(handle(new MyError()));

// type
type AlertType = 'success' | 'danger' | 'warning';
function setAlertType(type: AlertType) {}
setAlertType('success');
setAlertType('warning');
// setAlertType('default'); // Error in argument
