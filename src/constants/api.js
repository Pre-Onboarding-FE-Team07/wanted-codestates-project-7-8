const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
export const API_URL = `${PROXY}`;
