Feature: add notes and delete notes
  As a user
  I want to add notes and delete them

  Background:
    Given the user has browsed to the homepage

  Scenario: user adds note
    When the user adds note "Shopping"
    Then notes "Shopping" should be displayed on the webUI
