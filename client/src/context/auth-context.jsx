import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { api, TokenStore } from "../services/api.js";
import { StorageService } from "../store/local-storage-service.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Seed from localStorage so a refresh doesn't flash the signed-out UI while
  // we revalidate the token against the API.
  const [user, setUser] = useState(() => StorageService.get("user") || null);
  const [ready, setReady] = useState(() => !TokenStore.get());

  useEffect(() => {
    if (!TokenStore.get()) {
      setReady(true);
      return;
    }

    let active = true;
    api
      .get("/user")
      .then((data) => {
        if (!active) return;
        setUser(data.user);
        StorageService.save("user", data.user);
      })
      .catch(() => {
        if (!active) return;
        setUser(null);
        StorageService.remove("user");
        TokenStore.clear();
      })
      .finally(() => {
        if (active) setReady(true);
      });

    return () => {
      active = false;
    };
  }, []);

  const persist = useCallback(({ user: nextUser, token }) => {
    TokenStore.set(token);
    StorageService.save("user", nextUser);
    setUser(nextUser);
  }, []);

  const signin = useCallback(
    async (email, password) => {
      persist(await api.post("/login", { email, password }, { auth: false }));
    },
    [persist],
  );

  const signup = useCallback(
    async (name, email, password) => {
      persist(await api.post("/register", { name, email, password }, { auth: false }));
    },
    [persist],
  );

  const signOut = useCallback(async () => {
    try {
      await api.post("/logout");
    } catch {
      // An already-invalid token still means the local session is over.
    }
    TokenStore.clear();
    StorageService.remove("user");
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, isLoggedIn: user !== null, ready, signin, signup, signOut }),
    [user, ready, signin, signup, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
