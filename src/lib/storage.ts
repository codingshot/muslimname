/**
 * Safe localStorage wrapper with quota protection, validation, and fallback.
 * Prevents crashes from: quota exceeded, private browsing, corrupted data, disabled storage.
 */

const QUOTA_WARNING_KEY = "__storage_quota_check";

/** Check if localStorage is available */
function isAvailable(): boolean {
  try {
    const t = QUOTA_WARNING_KEY;
    localStorage.setItem(t, "1");
    localStorage.removeItem(t);
    return true;
  } catch {
    return false;
  }
}

/** In-memory fallback when localStorage is unavailable */
const memoryStore = new Map<string, string>();

export function safeGetItem(key: string): string | null {
  try {
    if (isAvailable()) {
      return localStorage.getItem(key);
    }
    return memoryStore.get(key) ?? null;
  } catch {
    return memoryStore.get(key) ?? null;
  }
}

export function safeSetItem(key: string, value: string): boolean {
  try {
    if (isAvailable()) {
      localStorage.setItem(key, value);
      return true;
    }
    memoryStore.set(key, value);
    return true;
  } catch (e) {
    // QuotaExceededError — try to free space
    if (e instanceof DOMException && (e.name === "QuotaExceededError" || e.code === 22)) {
      console.warn("[Storage] Quota exceeded — falling back to memory");
      memoryStore.set(key, value);
      return true;
    }
    memoryStore.set(key, value);
    return false;
  }
}

export function safeRemoveItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {}
  memoryStore.delete(key);
}

/** Parse JSON safely with schema validation */
export function safeParseJSON<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    const parsed = JSON.parse(raw);
    if (parsed === null || parsed === undefined) return fallback;
    if (typeof fallback === "object" && !Array.isArray(fallback) && typeof parsed !== "object") return fallback;
    return parsed as T;
  } catch {
    return fallback;
  }
}

/** Get estimated storage usage (bytes) */
export function getStorageUsage(): { used: number; keys: number } {
  try {
    let used = 0;
    const keys = localStorage.length;
    for (let i = 0; i < keys; i++) {
      const key = localStorage.key(i);
      if (key) {
        used += key.length + (localStorage.getItem(key)?.length ?? 0);
      }
    }
    return { used: used * 2, keys }; // UTF-16 = 2 bytes per char
  } catch {
    return { used: 0, keys: 0 };
  }
}
