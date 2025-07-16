// client/src/components/MedicineRecommendation/MedicineRecommendation.js
import React, { useState } from 'react';
import { Container, Card, Nav, Tab, Alert } from 'react-bootstrap';
import SymptomForm from './SymptomForm';
import RecommendedMedicines from './RecommendedMedicines';
import axios from 'axios';

const MedicineRecommendation = () => {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState(null);
  const [error, setError] = useState(null);
  const [activeMode, setActiveMode] = useState('advanced'); // 'advanced' or 'basic'

  const handleSubmit = async (symptoms) => {
    setLoading(true);
    setError(null);
    
    try {
      const endpoint = activeMode === 'advanced' 
        ? '/api/v1/medicines/recommend/advanced' 
        : '/api/v1/medicines/recommend';
      
      const { data } = await axios.post(endpoint, { symptoms });
      setRecommendations(data.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to get recommendations');
      setRecommendations(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">Medicine Recommendation</h2>
      
      <Tab.Container activeKey={activeMode} onSelect={(k) => setActiveMode(k)}>
        <Nav variant="tabs" className="mb-3">
          <Nav.Item>
            <Nav.Link eventKey="advanced">Advanced (ML-based)</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="basic">Basic</Nav.Link>
          </Nav.Item>
        </Nav>
        
        <Tab.Content>
          <Tab.Pane eventKey="advanced">
            <Alert variant="info" className="mt-3">
              This recommendation uses machine learning to analyze your symptoms and medical history.
            </Alert>
          </Tab.Pane>
          <Tab.Pane eventKey="basic">
            <Alert variant="info" className="mt-3">
              This recommendation uses a simple rule-based system to suggest medicines.
            </Alert>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      
      <Card className="mb-4">
        <Card.Body>
          <SymptomForm onSubmit={handleSubmit} loading={loading} />
        </Card.Body>
      </Card>
      
      {error && (
        <div className="alert alert-danger">{error}</div>
      )}
      
      {recommendations && (
        <Card>
          <Card.Header>
            <h3>Recommended Medicines</h3>
            <small className="text-muted">
              {activeMode === 'advanced' ? 'ML-based recommendations' : 'Rule-based recommendations'}
            </small>
          </Card.Header>
          <Card.Body>
            <RecommendedMedicines recommendations={recommendations} />
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default MedicineRecommendation;