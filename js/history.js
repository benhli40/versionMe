// history.js

const STORAGE_KEY = 'versionme-history';

export function saveVersionLog(entry) {
  const history = loadVersionHistory();
  history.unshift(entry); // latest entry first
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function loadVersionHistory() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function clearVersionHistory() {
  localStorage.removeItem(STORAGE_KEY);
}