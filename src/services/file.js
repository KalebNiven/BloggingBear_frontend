import axios from "axios";

export async function fetchSpreadsheetData(sheetUrl, callback, errorCallback) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/get-spreadsheet-data`, { sheet_url: sheetUrl });

        // Update your state or do something with the data
        callback(response.data.data)
    } catch (error) {
        errorCallback("Error fetching spreadsheet. Please contact administrator");
        console.error('Error fetching spreadsheet data:', error);
    }
}

export async function generateContent(payload, errorCallback) {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/generate-content`, payload);
        return response.data
        // Update your state or do something with the data
    } catch (error) {
        if (error && error.response && error.response.data) {
            errorCallback(error.response.data.error);
        }
        console.error('Error generating report:', error);
    }
}

export async function getTaskStatus(taskId, errorCallback) {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/results/${taskId}`);
        // Update your state or do something with the data
        let temp = {};
        if (typeof response.data === 'string') {
            const parsedData = JSON.parse(response.data);
            if (parsedData) {
                temp = parsedData;
            }
        } else {
            temp = response.data;
        }
        return {
            error: false,
            data: temp
        }
    } catch (error) {
        console.log(error)
        return {
            error: true,
            errorText: error.response.data.error
        }
    }
}