setInterval(function() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours < 12 ? 'AM' : 'PM';
  hours = hours % 12 || 12;

  // convert hours and minutes to string with double digit format
  hours = hours.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');

  $('#time').html(hours + ':' + minutes + ' ' + ampm);
}, 1000);

