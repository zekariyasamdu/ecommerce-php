export function parseRequestURL() {
  const url = window.location.hash.toLowerCase();
  const request = url.split("/");

  return {
    resource: request[1],
    id: request[2],
  };
}

export function getCurrentRoute(request) {
  return (
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "")
  );
}

export async function simulateDelay(ms = 1000) {
  await new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
}

export function reloadRoute() {
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}
