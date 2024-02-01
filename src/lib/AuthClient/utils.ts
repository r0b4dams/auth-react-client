export function generateState(): string {
  const array = new Uint32Array(10);
  window.crypto.getRandomValues(array);
  return Array.from(array, dec2hex).join("");
}

function dec2hex(d: number) {
  return d.toString(16).padStart(2, "0");
}
