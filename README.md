![idlepageGIT](https://github.com/SiymX/IdlePage/assets/63435885/910bb240-99f0-4898-a94d-3fb7de5ff745)


# IdlePage
This program is a HTML page that will display elapsed time (Stopwatch Timer) in hours, minutes, seconds, and milliseconds. The `setInterval()` method is used to update the timer every 10 milliseconds.
The timer will get updated by setting the `innerHTML` property of the `timer` element with a strong of HTML code that includes the time values and labels for each unit of time. 
This program also uses `BroadcastChannel` API to send and recieve messages between pages that have the same channel name or provides a way for multiple pages to communicate with each other in real time
without needing a server as an intermediary.



# Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)




# Features
- **Real-Time Timer**: The application starts tracking the time as soon as the page loads and continuously displays the elapsed time.
- **Persistent Timer**: The elapsed time is stored in the browser's `localStorage`, allowing it to persist even if the page is refreshed.
- **Broadcast Channel**: The application also uses the `BroadcastChannel` API to communicate the timer data with other instances of the same application running in different browser tabs.



# Installation
This Task Manager is a web-based (HTML) application and will not require any installation. Just clone the repository to your machine, and then open the `index.html` file in yur browser.
```
git clone https://github.com/SiymX/IdlePage.git
```



# Usage
The elapsed time will be displayed on the page in real-time, showing hours, minutes, seconds, and milliseconds. The timer will also continue to run even if the page gets refereshed. 

