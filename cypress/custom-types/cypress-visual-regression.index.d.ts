// for cypress-visual-regression
declare namespace Cypress {
  interface Chainable<Subject> {
    compareSnapshot(name: string, threashold?: number): void;
  }
}
