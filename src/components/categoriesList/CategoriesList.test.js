import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Categorys from "./CategoriesList";
import "@testing-library/jest-dom/extend-expect";

describe("Category Component", () => {
  it("renders the catrgories with the provided label", () => {
    const { getByTestId } = render(
      <Router>
        <Categorys />
      </Router>,

    );
    const category = getByTestId("categories");
    expect(category).toBeInTheDocument();
  });
});


test("renders category items", () => {
  render(
    <Router>
      <Categorys />
    </Router>,
  );

  const donateCategory = screen.getByText("Донати на ЗСУ");
  const auctionCategory = screen.getByText("Лоти аукціону доброчинності");
  const clothingCategory = screen.getByText("Продаж військового одягу");

  expect(donateCategory).toBeTruthy();
  expect(auctionCategory).toBeTruthy();
  expect(clothingCategory).toBeTruthy();
});

test("renders the 'Переглянути всі' button", () => {
  render(
    <Router>
      <Categorys />
    </Router>,
  );

  const viewAllButton = screen.getByText("Переглянути всі");
  expect(viewAllButton).toBeTruthy();
});

test("button links to the correct category page", () => {
  render(
    <Router>
      <Categorys />
    </Router>,
  );

  const viewAllButton = screen.getByText("Переглянути всі");
  expect(viewAllButton.getAttribute("toPage", "/categories"));
});
