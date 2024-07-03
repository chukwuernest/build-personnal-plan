function updateTime() {
  const now = new Date()
  const utcDate = now.toISOString().replace('T', ' ').substring(0, 19)
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const day = dayNames[now.getUTCDay()]

  document.getElementById('time').innerText = `Date and Time: ${utcDate}`
  document.getElementById('day').innerText = `Day of the Week: ${day}`
}

updateTime()
setInterval(updateTime, 1000)
