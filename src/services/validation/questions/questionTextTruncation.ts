export function truncateText(input: string, length: number = 78): string {
    if (input.length > length) {
        // Обрезаем строку и добавляем '...'
        return input.substring(0, length) + '...';
    }
    return input;
}
