import React, { useState } from 'react';

function YourComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = students.filter((student) => {
      const regexPattern = new RegExp(query, 'i');
      return Object.values(student).some((value) => regexPattern.test(value));
    });

    setFilteredStudents(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />

      <table>
        <tbody>
          {filteredStudents.map((stu, index) => (
            <tr key={index}>
              <td className="p-0 text-left">{stu.student_code}</td>
              <td className="text-left">
                <h6 className="text-truncate font-size-13">{stu.student_name}</h6>
              </td>
              <td className="p-0">
                <div className="d-flex align-items-center justify-content-center">
                  <label className="custom-switch pr-2">
                    <input
                      type="checkbox"
                      className="custom-switch-input"
                      name="status"
                      checked={stu.is_present}
                      onChange={() => handleCheckboxChange(stu.student_id)}
                    />
                    <span className="custom-switch-indicator"></span>
                  </label>
                  {stu.is_present ? <b>Yes</b> : <b>No</b>}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default YourComponent;
