Feature: Show/Hide Event Details
 Scenario: An event element is collapsed by default
  Given that the event element does not show without user interaction
  When the user first open the app
  Then the event element remains hidden
 Scenario: User can expand an event to see details
  Given that details of an event are collapsed by default
  When the user interacts with the event field
  Then the user can view details of the event
 Scenario: User can collapse an event to hide details
  Given that the user has opened the event details
  When the user decides to hide the event details
  Then the event details should be collapsed