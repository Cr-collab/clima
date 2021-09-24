export function translateFahrenheit(celsius, f) {
  return f ? `${celsius * 1.8 + 32}°f` : `${celsius}°c`
}
