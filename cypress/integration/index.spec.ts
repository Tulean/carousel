import { index } from "../pageSelectors/index";

describe("CarouselHW", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("carousels should be able to move with arrows", () => {
    cy.get(index.collectionCarouselNextBtn).click();
    cy.get(index.collectionCarouselDotsActive).contains(2);
    cy.get(index.collectionCarouselPrevBtn).click();
    cy.get(index.collectionCarouselDotsActive).contains(1);
    cy.get(index.storiesCarouselPrevBtn).click();
    cy.get(index.storiesCarouselDotsActive).contains(20);
    cy.wait(300);
    cy.get(index.storiesCarouselNextBtn).click();
    cy.get(index.storiesCarouselDotsActive).contains(1);
  });

  it("carousels should be able to navigate with dots", () => {
    cy.get(index.collectionCarouselDots).eq(4).click();
    cy.get(index.collectionCarouselDotsActive).contains(5);
    cy.get(index.storiesCarouselDots).eq(10).click();
    cy.get(index.storiesCarouselDotsActive).contains(11);
  });
});
