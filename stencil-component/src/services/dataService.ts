/**
 * Fetch data from the given API endpoint. If the request fails, return the provided fallback.
 *
 * @param url - API endpoint URL
 * @param fallback - Fallback data to use if the fetch fails
 * @returns Fetched data or fallback
 */
export async function fetchWithFallback<T>(url: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`API responded with status ${res.status}`);
    const json = await res.json();
    return json?.data ?? fallback;
  } catch (err) {
    console.warn(`Fetch failed for ${url}. Using fallback data.`, err);
    return fallback;
  }
}
