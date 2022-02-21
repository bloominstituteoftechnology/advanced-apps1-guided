// STEP 2 👈
// Think what types of actions can happen
// that might cause a new state to be computed

// frontend only
export const TOGGLE_DISPLAY_COMPLETEDS = 'TOGGLE_DISPLAY_COMPLETEDS'
export const INPUT_CHANGE = 'INPUT_CHANGE'

// there are network requests involved
export const ADD_NEW_TODO = 'ADD_NEW_TODO' // an action of this type will fire after axios.post().then() <---
export const ADD_PATCHED_TODO = 'ADD_PATCHED_TODO' // action of this type will fire after axios.patch().then() <--
export const ADD_ALL_TODOS = 'ADD_ALL_TODOS' // action of this type will fire after axios.get().then() <--
