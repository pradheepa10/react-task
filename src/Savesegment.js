import React, { useState } from 'react';
import '../src/Savesegment.css'
;
const Savesegment = () => {
  const [segmentName, setSegmentName] = useState('');
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [availableSchemas, setAvailableSchemas] = useState([
    { label: 'First Name', value: 'first_name' },
    { label: 'Last Name', value: 'last_name' },
    { label: 'Gender', value: 'gender' },
    { label: 'Age', value: 'age' },
    { label: 'Account Name', value: 'account_name' },
    { label: 'City', value: 'city' },
    { label: 'State', value: 'state' },
  ]);

  const handleSaveSegment = () => {
    const dataToSend = {
      segmentName: segmentName,
      selectedSchemas: selectedSchemas,
    };
    console.log('Data to send:', dataToSend);
  };

  const handleAddNewSchema = () => {
    
    const remainingSchemas = availableSchemas.filter(schema => !selectedSchemas.includes(schema.value));
    if (remainingSchemas.length > 0) {
      const newSchemaToAdd = remainingSchemas[0];
      setSelectedSchemas([...selectedSchemas, newSchemaToAdd]);
      setAvailableSchemas(remainingSchemas.slice(1));
    }
  };

  const handleSchemaChange = (index, newValue) => {
    const updatedSchemas = [...selectedSchemas];
    updatedSchemas[index] = newValue;
    setSelectedSchemas(updatedSchemas);

  };

  return (
    <div className="segment-creator">
      <h1>Create Segment</h1>
      <button onClick={() => alert('Show Popup for Segment Name Input and Schema Selection')}>Save Segment</button>
      <div className="popup">
        <h2>Save Segment</h2>
        <input
          type="text"
          placeholder="Enter Segment Name"
          value={segmentName}
          onChange={(e) => setSegmentName(e.target.value)}
        />
        <select>
          <option>Add schema to segment</option>
          {availableSchemas.map((schema, index) => (
            <option key={index} value={schema.value}>{schema.label}</option>
          ))}
        </select>
        <button onClick={handleAddNewSchema}>+ Add new schema</button>

        <div className="blue-box">
          {selectedSchemas.map((schema, index) => (
            <select key={index} value={schema.value} onChange={(e) => handleSchemaChange(index, e.target.value)}>
              <option disabled>Select Schema</option>
              {availableSchemas.map((option, idx) => (
                <option key={idx} value={option.value}>{option.label}</option>
              ))}
            </select>
          ))}
        </div>

        <button onClick={handleSaveSegment}>Save the Segment</button>
      </div>
    </div>
  );
};

export default Savesegment;
