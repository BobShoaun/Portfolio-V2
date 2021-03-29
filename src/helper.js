export async function copyToClipboard(text) {
  await navigator.clipboard.writeText(text);
  alert(`copied ${text} to clipboard!`);
}