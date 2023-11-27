[Deploy Link](https://main--melodic-arithmetic-a5e74d.netlify.app/)
👍👍👍👍👍👍👍👍

Project requirements

The project was built as React. Only the chart.js library was used. It was written with Custom CSS. It was deployed on Netlify.


Basic Requirements:
Operation of Two Channels:

There will be two channels, each generating a random number between 0 and 10.
✏✏✏✏✏✔✔✔✔ > 

By default there are 2 channels and it generates random numbers between 0 and 10.
There will be "Start" and "Stop" buttons. The "Start" button starts and runs the generators, while the "Stop" button terminates them.
✏✏✏✏✏✏✏✏✏✏>

There are start, stop, save and load buttons in the control component, and the project is managed with these.
Graphic Representation:

Each channel can be found in a separate bar chart, overlapping each other vertically in the developed profile.
✔✔✔✔✔✔✔✔✔✔✔✔✔>

Each channel is in a separate bar chart
Each new number will be a new bar extending to the right of the previous ones.
✒✒✒✒✒✒✒✒✒✒✒>
It will correspond to the number produced by the bar.
👍👍👍👍👍👍👍👍👍>

each new number is a superimposed bar in the same channel
Optional Requirements:
Adjustable Time Range and Number Range:
👍👍👍👍👍👍👍👍>

Input was created for the time range and number range and the inputs sent from appjs were added to the function.
The generation time interval and number range can be changed at any time.
"Save" and "Load" Functions:

All numbers produced from each channel can be saved and loaded.
✏✏✏✏✏✏✏✏✏>

Numbers generated from the channel are saved to localstroge with setitem and loaded with getitem.

When the new "Start" is run after installation, the new numbers must be added to the previous ones.
Saving and loading should be done using file versioning.
Channel Colors, Number Indicators, Horizontal Scrolling and Vertical Scaling:

Unique colors for each channel.
✔✔✔✔✔✔✔✔✔✔
There are unique colors for the number arrays produced at each Chanell.
![soncase](https://github.com/ozkan4186/AsencoCase_Study/assets/109352349/331d2773-1ab0-4ea2-a771-4077cfd5b222)

Horizontal scrolling and vertical scaling should be added to better visualize the number indicator and bars.
👍👍👍👍👍👍👍👍Horizontal and vertical images were created by loading the Chart.js library.
Adjustable Number of Channels:

The number of channels must be specified as a parameter before the startup interrupt.
👍👍👍👍👍👍👍The number of channels is specified as 2 by default.
