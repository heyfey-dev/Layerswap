export function timeStringToSeconds(timeString) {
  const [hours, minutes, seconds] = timeString.split(":");
  const totalSeconds =
    parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseFloat(seconds);

  return totalSeconds;
}
