# COCO Calculator

This is a simple web-based calculator to determine your attendance percentage and eligibility for examinations based on your lecture, tutorial, practical, and skill attendance.

## Features

* **Attendance Calculation:** Calculates the average attendance percentage based on the provided inputs.
* **Eligibility Check:** Determines your eligibility for examinations based on the calculated attendance percentage.
* **Color-Coded Percentage:** Displays the attendance percentage in different colors based on the following ranges:
    * Less than 75%: Red (#ff3333)
    * 75% to 85%: Yellow (#fff500)
    * More than 85%: Teal (#50e3c2)
* **User-Friendly Interface:** Clean and intuitive design with clear instructions.
* **Input Validation:** Ensures that at least two attendance fields are filled before enabling the calculation.
* **Disabled Text Selection:** Prevents users from selecting text on the page.
* **Context Menu and Developer Tools Prevention:** Disables the context menu and prevents access to developer tools (F12, Ctrl+Shift+I).
* **Automatic Refresh:** Refreshes the page 10 seconds after the calculation.
* **Responsive Design:** Works well on various screen sizes.
* **Zoom Disable on mobile devices:** Prevents automatic zoom on small devices when the input is selected.

## How to Use

1.  Open the `index.html` file in your web browser.
2.  Enter your attendance percentages for lecture, tutorial, practical, and skill.
3.  Click the "Calculate" button.
4.  The calculator will display your total attendance percentage and eligibility status.
5.  The page will automatically refresh after 10 seconds.

## Technologies Used

* HTML
* CSS
* JavaScript

## Customization

* You can modify the CSS styles in the `<style>` tag to customize the appearance of the calculator.
* You can change the attendance percentage thresholds and eligibility messages in the JavaScript code.

## Preventing Usage of developer tools and context menu.

This application prevents the usage of developer tools and context menu by using the following javascript.

```javascript
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if(e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});
