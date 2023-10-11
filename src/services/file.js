import axios from "axios";

export async function fetchSpreadsheetData(sheetUrl, callback, errorCallback) {
    try {
        // Replace 'https://localhost:5000' with your Flask app's URL
        const response = await axios.post(`${process.env.REACT_APP_API_KEY}/get-spreadsheet-data`, { sheet_url: sheetUrl });

        // Update your state or do something with the data
        callback(response.data.data)
    } catch (error) {
        errorCallback("Error fetching spreadsheet. Please contact administrator");
        console.error('Error fetching spreadsheet data:', error);
    }
}

export async function generateContent(payload, callback, errorCallback) {
    try {
        // Replace 'https://localhost:5000' with your Flask app's URL
        const response = await axios.post(`${process.env.REACT_APP_API_KEY}/generate-content`, payload);

        // Update your state or do something with the data
        callback(response.data.data)
    } catch (error) {
        if (error && error.response && error.response.data) {
            errorCallback(error.response.data.error);
        }
        console.error('Error generating report:', error);
    }
}