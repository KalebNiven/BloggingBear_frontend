# BloggingBear

This project is a React-based content generator that facilitates the automatic creation of content documents using data from Google spreadsheets.

Check this document for a full description of the project: [Project Description](https://docs.google.com/document/d/1Isr1CaC8qrSv0FvksPztpuwEmDrFfpKHrMAcm5ciVRc/edit#heading=h.9dqkxxxh98nt)

Here is the spreadsheet data: [Spreadsheet Data](https://docs.google.com/spreadsheets/d/1-ClO6AKnuK1Sb_l648FsUHxAjxdzXoJphI3OYGhZC9g/edit#gid=550946814)

## Features

- **Google Authentication**: Users can authenticate using Google.
- **Spreadsheet Input**: Users can select a Google Sheet from Google Drive or input a custom URL.
- **Spreadsheet Display**: Displays the data fetched from the spreadsheet.
- **Content Generation**: Users can generate content based on selected spreadsheet rows.
- **Progress Tracking**: Indicates the progress of various processes.
- **Error Handling**: Displays errors and issues that occur.

## Setting Up

1. Clone the repository.
2. Navigate to the project root directory in your terminal.
3. Run `npm install`.
4. Create a `.env` file in the root directory with:
    ```
    REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here
    ```
5. Replace with your actual Google Client ID.

## Running

To start, use:

```bash
npm start
```

This initiates the development server, and the application should launch in your browser at `http://localhost:3000`.

## Code Overview

### FileSelection Component

- **Drive Picker Integration**: Users select spreadsheets from Google Drive.
- **File & URL Input**: Choose a Google Sheet or use a custom URL.
- **Spreadsheet Data Retrieval**: Fetches spreadsheet data.
- **Progress Tracking**: Shows completion status.
- **Error Handling**: Displays errors during processes.

### App Component

- **Google OAuth Login**: Users can authenticate using their Google accounts.
- **Spreadsheet Input and Selection**: Users input and parse spreadsheet data.
- **Content Generation**: Orchestrates the content generation process.
- **Progress Tracking**: Shows users the completion status.

## Contributing

To contribute, fork the repository and submit your pull requests for review.

## Project Structure

- Frontend: Includes components like `FileSelection` and `App`.
- [`backend/`:](https://github.com/KalebNiven/BloggingBear_backend) Contains the backend, with the Flask server (`App.py`) and utility functions.

