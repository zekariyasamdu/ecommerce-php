import { StorageService } from "../store/local-storage-service.js";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const TOKEN_KEY = "token";

export const TokenStore = {
  get: () => StorageService.get(TOKEN_KEY),
  set: (token) => StorageService.save(TOKEN_KEY, token),
  clear: () => StorageService.remove(TOKEN_KEY),
};

/**
 * Thrown for any non-2xx response. `errors` carries Laravel's 422 validation
 * bag so forms can show messages per field.
 */
export class ApiError extends Error {
  constructor(message, status, errors) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.errors = errors || {};
  }
}

async function request(path, { method = "GET", body, auth = true } = {}) {
  const headers = { Accept: "application/json" };

  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  const token = TokenStore.get();
  if (auth && token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  if (response.status === 204) {
    return null;
  }

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    // A dead token should not leave the app in a half-signed-in state.
    if (response.status === 401) {
      TokenStore.clear();
    }
    throw new ApiError(
      payload?.message || `Request failed with status ${response.status}`,
      response.status,
      payload?.errors,
    );
  }

  return payload;
}

export const api = {
  get: (path, options) => request(path, { ...options, method: "GET" }),
  post: (path, body, options) => request(path, { ...options, method: "POST", body }),
  patch: (path, body, options) => request(path, { ...options, method: "PATCH", body }),
  delete: (path, options) => request(path, { ...options, method: "DELETE" }),
};
