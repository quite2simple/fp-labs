export function setupButton(element: HTMLButtonElement, onclick: () => void) {
    element.addEventListener('click', onclick);
}
