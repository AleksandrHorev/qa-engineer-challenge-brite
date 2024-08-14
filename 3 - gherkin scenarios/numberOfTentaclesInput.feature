
# The task:

# Implement the following manual test:
# - Given the following form:
# <label for="tentacles">Number of tentacles (10-100):</label>
# <input type="number" id="tentacles" name="tentacles"
# min="10" max="100">
# <button>Send</button>
# Write all necessary test cases using Gherkin language to make sure the input field is
# working as expected; valid values will lead to a "Success" message, and invalid to an "Error"
# message.

# Solution:


Feature: Validation “Number of tentacles” input field 

  Scenario: Enter a valid value
    Given the user is on the form page
    When the user enters “49” in the "Number of tentacles" input field
    And the user clicks the "Send" button
    Then the user should see a "Success" message

  Scenario: Enter a value below the minimum boundary
    Given the user is on the form page
    When the user enters "9" in the "Number of tentacles" input field
    And the user clicks the "Send" button
    Then the user should see an "Error" message

  Scenario: Enter a value above the maximum boundary
    Given the user is on the form page
    When the user enters "101" in the "Number of tentacles" input field
    And the user clicks the "Send" button
    Then the user should see an "Error" message

  # I assume that decimal number is an incorrect value but would double check with the business analytic/product manager
  Scenario: Enter a decimal number
    Given the user is on the form page
    When the user enters "10.5" in the "Number of tentacles" input field
    And the user clicks the "Send" button
    Then the user should see an "Error" message

  Scenario: Enter a negative number
    Given the user is on the form page
    When the user enters "-5" in the "Number of tentacles" input field
    And the user clicks the "Send" button
    Then the user should see an "Error" message

  Scenario: Leave the input field empty
    Given the user is on the form page
    When the user clicks the "Send" button
    Then the user should see an "Error" message

  #   The field in html has “Input” type and it’s not allow to enter letters.
  #   Would add a such test only if there is chance the field may change the type
  #  Scenario: Enter letters as a  value
  #    Given the user is on the form page
  #    When the user enters "abc" in the "Number of tentacles" input field
  #    And the user clicks the "Send" button
  #    Then the user should see an "Error" message