function check(date_string) {
  let output = {
    unix: '',
    utc: '',
  }

  let date
  if (isNaN(date_string)) {
    date = new Date(date_string)
    if (date == 'Invalid Date') {
      output = { error: 'Invalid Date' }
    } else {
      output.unix = date.getTime()
      output.utc = date.toUTCString()
    }
  } else {
    date = new Date(+date_string)
    if (date == 'Invalid Date') {
      output = { error: 'Invalid Date' }
    } else {
      output.unix = new Date(+date_string).getTime()
      output.utc = new Date(+date_string).toUTCString()
    }
  }
  //   let date = new Date(date_string)
  //   console.log(typeof date)
  //   console.log(date)
  //   if (date == 'Invalid Date') {
  //     output = { error: 'Invalid Date' }
  //   } else {
  //     if (isNaN(date_string)) {
  //       //2015-12-25
  //       output.unix = date.getTime()
  //       output.utc = date.toUTCString()
  //     } else {
  //       //1451001600000
  //       output.unix = date_string
  //       output.utc = date.toUTCString()
  //     }
  //   }
  return output
}
console.log(check('2015-12-25'))
console.log(check('145100160000099999999999'))
