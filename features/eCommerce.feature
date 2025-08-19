@ecommerce @logged-in
Feature: eCommerce site validations
  Verify the functionality of the eCommerce site

  Scenario Outline: Place order for first item in category
    When I add product "<productName>" under category "<category>" to cart
    Then I verify product "<productName>" added successfully to final checkout cart

    Examples:
      | category  | productName                      |
      | Books     | Allegiant by Veronica Roth       |
      | Fragrance | Secret Obsession Perfume         |
      | Makeup    | Tropiques Minerale Loose Bronzer |
