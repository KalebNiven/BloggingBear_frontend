import React from 'react'

function SpreadsheetDisplay({ selectedRows, selectedRowsDetails, ideaArray }) {

    const getProgress = (index) => {
        if (selectedRowsDetails[index] && selectedRowsDetails[index]['progress']) {
            return selectedRowsDetails[index]['progress']
        }
        return 0
    }

    const getValues = (key, index) => {
        if (ideaArray[index] && ideaArray[index][key]) {
            return ideaArray[index][key]
        }
        return ''
    }


    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <b>Selected Rows</b>
                </div>
                <div className="card-body">
                    <div className='sheet-display-div table-responsive'>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th className='text-center' scope="col">#</th>
                                    <th className='text-start' scope="col">Blog Title</th>
                                    <th className='text-start' scope="col">Progress</th>
                                    <th className='text-start' scope="col">Doc Link</th>
                                    <th className='text-start' scope="col">Error</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedRows.map((row, index) => {

                                    const progress = getProgress(index);
                                    const error = getValues('error', index);
                                    const docurl = getValues('docurl', index);

                                    return <tr className='text-center' key={`key-${index.toString()}`}>
                                        <th scope="row">{index + 1}</th>
                                        <td className='text-start'>{row['Blog Title']}</td>
                                        <td className='text-start'>
                                            <div className="progress">
                                                <div className={`progress-bar ${error ? 'bg-danger' : docurl ? 'bg-success' : 'bg-info'}`} role="progressbar" style={{ width: `${error || docurl ? 100 : progress && progress > 25 ? progress : 25}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{docurl ? 'Completed' : error ? 'Failed' : `${progress}%`}</div>
                                            </div>
                                        </td>
                                        <td className='text-start'>{docurl ? <a className='btn btn-sm btn-link' href={docurl} target='_blank='>Document</a> : ''}  </td>
                                        <td scope="row" className='text-danger text-start'>{error ? error : 'N/A'}  </td>
                                    </tr>
                                }

                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpreadsheetDisplay
