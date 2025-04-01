// script.js

import { generateVersionLog } from './versioner.js';
import { saveVersionLog, loadVersionHistory, clearVersionHistory } from './history.js';

// DOM elements
const generateBtn = document.getElementById('generate-btn');
const currentDisplay = document.getElementById('current-version');
const historyList = document.getElementById('version-history');
const clearBtn = document.getElementById('clear-history');

// Generate and display a new version entry
function handleGenerate() {
  const log = generateVersionLog();

  // Display current
  currentDisplay.textContent = `${log.version} – ${log.message}`;

  // Save + re-render history
  saveVersionLog(log);
  renderHistory();
}

// Render all past entries
function renderHistory() {
  const history = loadVersionHistory();

  historyList.innerHTML = ''; // Clear existing

  history.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `${entry.version} – ${entry.message}`;
    historyList.appendChild(li);
  });
}

// Clear button
clearBtn.addEventListener('click', () => {
  clearVersionHistory();
  currentDisplay.textContent = '';
  renderHistory();
});

// Generate on click
generateBtn.addEventListener('click', handleGenerate);

// Load previous entries on start
window.addEventListener('DOMContentLoaded', () => {
  renderHistory();
});