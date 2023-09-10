export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count?: number | null) => {
    counter = count ?? 0;
    window.localStorage.setItem("counter", counter.toString());
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  const existingCounter = window.localStorage.getItem("counter");
  setCounter(existingCounter ? parseInt(existingCounter) : null);
}
