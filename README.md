# Meet
Meet is an serverless, progressive web application (PWA) that displays current events in  
the area of your choice with the help of the Google Calender API. Meet was developed using  
a test-driven development (TDD) approach, via Jest and React Testing Libaray. Meet contains several  
features, from filtering events by city to using the application while offline.


## User Stories: ##
**Feature 1: Filter Events By City**  
As a user, I should be able to filter events by city, so that I can see a list of events taking place in that city.  

**Feature 2: Show/Hide Event Details**  
As a user, I should be able to see details of an event and collapse the details of that given event, so I can gain a better understanding of what the event entails.  

**Feature 3: Specify Number of Events**   
As a user, I should be able to choose the number of events that are presented to me, so I can better focus on a few events at a time.  

**Feature 4: Use the App When Offline**  
As a user, I should be able to view my last search details while I'm offline, so that I can still get information about events while I do not have a stable internet connection.  

**Feature 5: Add an App Shortcut to the Home Screen**   
As a user, I should be able to access the app easily on my home screen, so I can quickly check for event details.    

**Feature 6: Display Charts Visualizing Event Details**   
As a user, I should be able to visualize how many events are taking place in each city, so I can quickly get an understanding of which city currently offers the most event choices.   



## Scenarios for each user story ##  
***Feature 1: Filter Events By City***   
**Scenario 1**: When user hasn’t searched for a city, show upcoming events from all cities.  
-Given user hasn’t searched for any city   
-When the user opens the app    
-Then the user should see a list of upcoming events    

**Scenario 2:** User should see a list of suggestions when they search for a city.  
-Given the main page is open  
-When user starts typing in the city textbox  
-Then the user should receive a list of cities (suggestions) that match what they’ve typed  

**Scenario 3**: User can select a city from the suggested list.   
-Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing  
-When the user selects a city (e.g., “Berlin, Germany”) from the list  
-Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city  


***Feature 2: Show/Hide Event Details***    
**Scenario 1**: An event element is collapsed by default  
-Given that the event element does not show without user  interaction  
-When the user first open the app  
-Then the event element remains hidden  

**Scenario 2**: User can expand an event to see details.  
-Given that details of an event are collapsed by default  
-When the user interacts with the event field    
-Then the user can view details of the event   

**Scenario 3**: User can collapse an event to hide details.  
-Given that the user has opened the event details  
-When the user decides to hide the event details  
-Then the event details should be collapsed     


***Feature 3: Specify Number of Events***  
**Scenario 1**: When user hasn’t specified a number, 32 events are shown by default.   
-Given that the user has not specified the number of events  
-When the user does not input a number in the event field  
-Then 32 events will be displayed automatically   

**Scenario 2**: User can change the number of events displayed.   
-Given that the user wants to see a specific number of events  
-When the user inputs a number in the event field  
-Then events displayed will correspond to the input value  


***Feature 4: Use the App When Offline***  
**Scenario 1**: Show cached data when there’s no internet connection.  
-Given that the user has  no internet connection  
-When the user interacts with the app offline  
-Then the user will see information corresponding to their cached data  

**Scenario 2**: Show error when user changes search settings (city, number of events).  
-Given that the user has no internet connection  
-When the user changes search settings  
-Then the user will receive an error explaining their request is not possible without a stable internet connection    


***Feature 5: Add an App Shortcut to the Home Screen***   
**Scenario 1**: User can install the meet app as a shortcut on their device home screen.  
-Given that the user wants quick access to the meet app  
-When the user views the home screen on their device  
-Then they will have access to the meet app through their home screen   

***Feature 6: Display Charts Visualizing Event Details***  
**Scenario 1**: Show a chart with the number of upcoming events in each city.  
-Given that the user wants a visual representation of the number of events in various cities  
-When the user clicks event visualization  
-Then the user will be shown a chart detailing the quantity of events in various cities   

## Use of Serverless Functions: ##
Meet makes use of serverless functions for multiple features. From helping to properly access the Google Calender API,  
via auhtorization, to live data-processing for displaying information of events to a user for a given city.  
Through serverless functions, backend processes become streamlined, therefore limiting source code and improving maintainability,  
all while ensuring users have a good experience while using the app. 

## Technologies Used ##
React, React Testing Libaray, Jest, Puppeteer, AWS Lambda, git, Recharts, Google Calender API.
