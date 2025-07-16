// client/src/components/MedicineRecommendation/SymptomForm.js
import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';

const SymptomForm = ({ onSubmit, loading }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [customSymptom, setCustomSymptom] = useState('');
  const [availableSymptoms, setAvailableSymptoms] = useState([]);
  const [loadingSymptoms, setLoadingSymptoms] = useState(false);

  useEffect(() => {
    const fetchSymptoms = async () => {
      setLoadingSymptoms(true);
      try {
        const { data } = await axios.get('/api/v1/medicines/symptoms');
        setAvailableSymptoms(data.data);
      } catch (error) {
        console.error('Error fetching symptoms:', error);
      } finally {
        setLoadingSymptoms(false);
      }
    };

    fetchSymptoms();
  }, []);

  const handleCheckboxChange = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleAddCustomSymptom = () => {
    if (customSymptom && !selectedSymptoms.includes(customSymptom)) {
      setSelectedSymptoms([...selectedSymptoms, customSymptom]);
      setCustomSymptom('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedSymptoms);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h4>Select Your Symptoms</h4>
      
      {loadingSymptoms ? (
        <div className="text-center my-4">
          <Spinner animation="border" />
          <p>Loading symptoms...</p>
        </div>
      ) : (
        <Row>
          {availableSymptoms || [].map((symptom, index) => (
            <Col md={4} key={index}>
              <Form.Check
                type="checkbox"
                id={`symptom-${index}`}
                label={symptom}
                checked={selectedSymptoms.includes(symptom)}
                onChange={() => handleCheckboxChange(symptom)}
                className="mb-2"
              />
            </Col>
          ))}
        </Row>
      )}
      
      <Row className="mt-3">
        <Col md={8}>
          <Form.Group>
            <Form.Label>Add Another Symptom</Form.Label>
            <Form.Control
              type="text"
              value={customSymptom}
              onChange={(e) => setCustomSymptom(e.target.value)}
              placeholder="Enter other symptom"
            />
          </Form.Group>
        </Col>
        <Col md={4} className="d-flex align-items-end">
          <Button 
            variant="secondary" 
            onClick={handleAddCustomSymptom}
            disabled={!customSymptom}
          >
            Add
          </Button>
        </Col>
      </Row>
      
      {selectedSymptoms.length > 0 && (
        <div className="mt-3">
          <h5>Selected Symptoms:</h5>
          <ul className="list-unstyled">
            {selectedSymptoms.map((symptom, index) => (
              <li key={index} className="mb-1">
                <span className="badge bg-primary me-2">{symptom}</span>
                <Button 
                  variant="outline-danger" 
                  size="sm"
                  onClick={() => handleCheckboxChange(symptom)}
                >
                  ✕
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <Button 
        type="submit" 
        variant="primary" 
        className="mt-3"
        disabled={selectedSymptoms.length === 0 || loading}
      >
        {loading ? 'Getting Recommendations...' : 'Get Medicine Recommendations'}
      </Button>
    </Form>
  );
};

export default SymptomForm;