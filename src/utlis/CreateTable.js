import React from 'react';

function CreateTable({ object }) {
    const tableMap = object.map(({ subject, subject_desc, subject_info }) => (
        <tr key={subject} className="table">
            <td className="subject">{subject}</td>
            <td className="subject_desc">{subject_desc}</td>
            <td className="subject_info">{subject_info}</td>
        </tr>
    ));
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>{tableMap}</tbody>
        </table>
    )
}

export default CreateTable;