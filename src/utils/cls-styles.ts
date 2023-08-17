export const cls = (input: string): string =>
  input
    .replace(/\s+/gm, ' ')
    .replace(/false|undefined/gm, '')
    .split(' ')
    .filter(style => typeof style === 'string')
    .join(' ')
    .trim()
