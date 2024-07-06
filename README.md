# Toast Notification Component

Welcome to the **Toast Notification Component** project! This project was a challenge aimed at creating a highly functional and visually appealing toast notification system using plain JavaScript. Below, you'll find a detailed overview of the component's features and the tasks completed to meet the challenge requirements.

## Features

- **Notification Types**: Supports success, warning, error, and information messages.
- **Default Position**: Notifications display in the top-left corner of the page by default.
- **Customizable Position**: Provides an option to customize the position of the notifications.
- **Auto-Disappear**: Notifications automatically disappear after 4 seconds.
- **Progress Bar**: Displays a progress bar to show the remaining time.
- **Pause on Hover**: The auto-dismiss timer pauses when the user hovers over the toast notification and resumes when the user moves the cursor away.
- **Dismiss Button**: Each notification includes a dismiss button for manual closure.
- **Stack Handling**: Capable of handling multiple notifications simultaneously, displaying them in a stack with the latest on top.
- **Smooth Animations**: Notifications appear and disappear with a subtle animation for a smooth user experience.
- **Hover State**: All elements have a clearly defined hover state.
- **Responsiveness**: The component is responsive and displays correctly on various screen sizes.

## Getting Started

To integrate the Toast Notification component into your project, follow these steps:

1. **Download the Component**:
   Download the JavaScript and CSS files for the Toast Notification component.

2. **Include in Your Project**:
   Include the JavaScript and CSS files in your HTML file.

   ```html
   <link rel="stylesheet" href="toast-notification.css" />
   <script src="toast-notification.js"></script>
   ```

3. **Initialize the Component**:
   Initialize the component and create notifications.

   ```javascript
   // Initialize the toast notifications
   const toast = new ToastNotification(position, timeout);

   // Show a notification
   toast.render('success', 'This is a success notification!');
   ```

## Conclusion

This Toast Notification component is a powerful and flexible tool for displaying notifications in your application. It combines a variety of features to ensure that notifications are not only functional but also visually appealing and user-friendly.

We hope you find this component useful and easy to integrate into your projects. If you have any questions or feedback, please don't hesitate to reach out.

Happy coding! 🚀
