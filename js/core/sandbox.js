// Shared contract every sandbox engine must implement.
// Each engine exports: mount(container, step) -> returns API { destroy, check }

export const SandboxRegistry = {
  word: null,
  excel: null,
  ppt: null,
  register(track, engine) { this[track] = engine; },
  get(track) { return this[track]; }
};