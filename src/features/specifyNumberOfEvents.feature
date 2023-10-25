Feature: Specify Number of Events
 Scenario: When user hasn’t specified a number, 32 events are shown by default
  Given that the user has not specified the number of events
  When the user does not input a number in the event field
  Then 32 events will be displayed automatically
 Scenario: User can change the number of events displayed
  Given that the user wants to see a specific number of events
  When the user inputs a number in the event field
  Then events displayed will correspond to the input value


 