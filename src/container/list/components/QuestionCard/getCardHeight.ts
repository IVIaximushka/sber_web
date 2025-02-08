export function getHeight(input: string): number {
    const length = input.length;
    let height = 350;
    if (length > 100) {
        height = 400;
    }
    if (length > 140) {
        height = 475;
    }
    if (length > 240) {
        height = 550;
    }
    return height;
}
