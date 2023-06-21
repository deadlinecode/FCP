export default {
  sleep: (ms: number) => new Promise((r) => setTimeout(r, ms)),
  c: (...classes: any[]) => classes.filter(Boolean).join(" "),
};
