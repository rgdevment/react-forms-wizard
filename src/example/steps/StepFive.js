import React from 'react';

const StepFive =() => {
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Day</th>
                    <th scope="col">Article Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">Word Count</th>
                    <th scope="col">Shares</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>MarioDevment and Starter Template</td>
                    <td>Cristina</td>
                    <td>913</td>
                    <td>2.846</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>MarioDevment Tutorial and Examples</td>
                    <td>Cristina</td>
                    <td>1.434</td>
                    <td>3.417</td>
                </tr>

                <tr>
                    <th scope="row">3</th>
                    <td>MarioDevment Tutorial and Examples</td>
                    <td>Cristina</td>
                    <td>1.877</td>
                    <td>1.234</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

StepFive.propTypes = {};

export default StepFive;