export function validateText(input: string): string {
    const parts: string[] = input.split(' ');

    const filteredParts: string[] = parts.filter(part => !/[()\[<{]/.test(part));

    if (filteredParts.length < parts.length) {
        filteredParts[0] = filteredParts[0].charAt(0).toUpperCase() + filteredParts[0].slice(1);
    }
    return filteredParts.join(' ');
}