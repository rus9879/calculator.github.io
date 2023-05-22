document.getElementById('calculate-btn').addEventListener('click', function() {
  var birthdate = new Date(document.getElementById('date').value);
  var today = new Date();

  var years = today.getFullYear() - birthdate.getFullYear();
  var months = today.getMonth() - birthdate.getMonth();
  var days = today.getDate() - birthdate.getDate();

  if (today.getMonth() < birthdate.getMonth() || (today.getMonth() == birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
    years--;
    if (months < 0) {
      months += 12;
    }
  }

  if (days < 0) {
    months--;
    var daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += daysInLastMonth;
  }

  document.getElementById('result').textContent = 'Ваш возраст: ' + years + ' лет, ' + months + ' месяцев, ' + days + ' дней';

  if (years < 18) {
    document.body.style.backgroundImage = 'url("/1.jpg")';
  } else if (years >= 18 && years < 50) {
    document.body.style.backgroundImage = 'url("/2.jpg")';
  } else {
    document.body.style.backgroundImage = 'url("/3.jpg")';
  }
});


