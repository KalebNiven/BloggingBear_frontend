# BloggingBear

This project is a React-based content generator that facilitates the automatic creation of content documents using data from Google spreadsheets. Below is a guide to setting up, using, and understanding the structure of this project.

Check this document for a full description of the project: https://docs.google.com/document/d/1Isr1CaC8qrSv0FvksPztpuwEmDrFfpKHrMAcm5ciVRc/edit#heading=h.9dqkxxxh98nt

Here is the spreadsheet data: https://docs.google.com/spreadsheets/d/1-ClO6AKnuK1Sb_l648FsUHxAjxdzXoJphI3OYGhZC9g/edit#gid=550946814

## Contributing

To contribute to this project, please fork the repository and submit your pull requests for review.

### Project Structure

The project is divided into two main folders:

- This project contains all the frontend code.
- [`backend/`: ](https://github.com/KalebNiven/BloggingBear_backend)
    - Contains all the backend code including the Flask server (`App.py`) and utility functions.

## Setting Up

Before you begin, make sure to have Node.js and npm installed. Follow the next steps to set up the project:

1. Clone the repository to your local environment.
2. Navigate to the project root directory in your terminal.
3. Run `npm install` to install all necessary dependencies.
4. Create a `.env` file in the root directory and add the following environment variable:
    ```
    REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here
    ```
5. Replace `your_google_client_id_here` with your actual Google Client ID.

## Running the Application

To run the application, execute the following command in the terminal:

```bash
npm start
```

This will start the development server and the application should open in your default browser at `http://localhost:3000`.

## Features

### Google Authentication

Users can authenticate using Google to enable the application to create Google docs on their behalf. The authentication status is displayed at the top of the page.

### Spreadsheet Input

This feature allows users to input data through two methods:

1. **Upload a Spreadsheet:** Users can upload a local spreadsheet file.
2. **Google Spreadsheet URL:** Users can provide a Google Spreadsheet URL to fetch data from.

### Spreadsheet Display

Displays the data fetched from the spreadsheet. Users can select rows that will be used in the content generation.

### Max Tokens Input

Allows users to set the maximum number of tokens to be used in content generation. This effectively sets a limit on the length of the generated content.

### Content Generation

Users can generate content by clicking the "Generate Content" button. The process involves several stages and the progress is displayed in a progress bar.

Generated content will be used to create Google Docs, and the URL of each document will be displayed upon successful creation.

### Error Handling

Displays errors and issues that occur during various processes, helping users troubleshoot problems effectively.

## Components Breakdown

- `App.js`: The main component that houses the state and logic of the application.
- `SpreadsheetInput.js`: Component to handle the spreadsheet input section.
- `SpreadsheetDisplay.js`: Component to display the fetched spreadsheet data.
- `MaxTokensInput.js`: Component to input the max tokens for content generation.
- `Utilities.js`: A utility file where helper functions are housed.

## Key Functions

Below are some of the key functions defined in the `App.js`:

FileSelection Component
The FileSelection component in the project provides an interface for users to select files from Google Drive, specifically Google Sheets. The core functionalities and components embedded in this component are:

Features:
Drive Picker Integration: The component uses react-google-drive-picker to integrate Google Drive's file and folder picker, allowing users to select spreadsheets directly from their Google Drive and also choose a destination folder for the generated content.

File and URL Input: Users can either select a Google Sheet from their Drive or input a custom URL.

Spreadsheet Data Retrieval: Upon selecting a file or providing a custom URL, the component fetches the data from the spreadsheet using the fetchSpreadsheetData service.

Progress Tracking: The component provides a progress bar that calculates the percentage of tasks completed in the process.

Error Handling: Errors during the various stages, from file selection to content generation, are captured and displayed to the user.

Content Generation: After selecting rows from the fetched spreadsheet data, users can generate content, which is then saved to a Google Doc in the chosen destination folder.

Components Breakdown:
Loadable: A wrapper component to show a loading spinner while async operations are being performed.
FileURLInput: Component for users to input a custom Google Sheets URL.
SpreadsheetActions: Provides action buttons for row selection and content generation.
SpreadsheetDisplay: Displays the selected rows from the fetched spreadsheet data.
Notable Functions:
handleGenerateContentFromCustom: Fetches spreadsheet data from the provided custom URL.
handleSheetPicker & handleFolderPicker: Initiates the Google Drive picker for files and folders, respectively.
handleDeleteFile & handleDeleteDestination: Deletes the selected file and destination, respectively.
resetError: Clears any displayed errors.
handleGenerateContent: Orchestrates the content generation process based on selected rows and destination folder.
generateContentSuccessCallback: Actions to perform upon successful content generation.


## Development

### Environment Variables

- `REACT_APP_GOOGLE_CLIENT_ID`: Your Google OAuth 2.0 Client ID.

### Dependencies

- `react`: For building the UI of the application.
- `axios`: For making HTTP requests.
- `react-google-login`: For handling Google OAuth authentication.
"# BloggingBear_frontend" 
