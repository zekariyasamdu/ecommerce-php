import { StorageService } from "./local-storage-service.js";

class Store {
  constructor() {
    this._events = {};

    const initialState = {
      user: StorageService.get("user") || null,
    };

    this.state = new Proxy(initialState, {
      set: (target, key, value) => {
        target[key] = value;
        StorageService.save(key, value);
        this._publish(key, value);
        return true;
      },
    });
  }

  _publish(key, data) {
    (this._events[key] || []).forEach((cb) => cb(data));
  }

  subscribe(key, callback) {
    if (!this._events[key]) this._events[key] = [];
    this._events[key].push(callback);

    return () => {
      this._events[key] = this._events[key].filter((cb) => cb !== callback);
    };
  }
}

export const store = new Store();
