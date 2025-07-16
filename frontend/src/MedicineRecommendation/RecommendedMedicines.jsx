// client/src/components/MedicineRecommendation/RecommendedMedicines.js
import React from 'react';
import { Card, Row, Col, Badge, Alert, ProgressBar } from 'react-bootstrap';

const RecommendedMedicines = ({ recommendations }) => {
  if (!recommendations || recommendations.length === 0) {
    return (
      <Alert variant="info">
        No medicine recommendations available based on the provided symptoms.
      </Alert>
    );
  }

  return (
    <div>
      <Alert variant="warning">
        <strong>Important:</strong> These recommendations are for reference only. 
        Please consult with your doctor before taking any medication.
      </Alert>
      
      <Row>
        {recommendations.map((medicine, index) => (
          <Col md={6} key={index} className="mb-3">
            <Card>
              <Card.Header>
                <h5>{medicine.name}</h5>
                <small className="text-muted">{medicine.genericName}</small>
                
                {medicine.mlConfidence && (
                  <div className="mt-2">
                    <small>ML Confidence:</small>
                    <ProgressBar 
                      now={medicine.mlConfidence * 100} 
                      label={`${(medicine.mlConfidence * 100).toFixed(1)}%`}
                      variant={medicine.mlConfidence > 0.7 ? "success" : medicine.mlConfidence > 0.4 ? "warning" : "danger"}
                    />
                  </div>
                )}
              </Card.Header>
              <Card.Body>
                <p>{medicine.description}</p>
                
                <div className="mb-2">
                  <strong>Used For:</strong>
                  {medicine.usedFor?.map((condition, i) => (
                    <Badge bg="info" className="me-1 ms-1" key={i}>
                      {condition}
                    </Badge>
                  ))}
                </div>
                
                <div className="mb-2">
                  <strong>Form:</strong> {medicine.dosageForm}, {medicine.strength}
                </div>
                
                <div className="mb-2">
                  <strong>Category:</strong> <Badge bg="secondary">{medicine.category}</Badge>
                </div>
                
                <div className="small text-muted mt-2">
                  <strong>Side Effects:</strong> {medicine.sideEffects?.join(', ')}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RecommendedMedicines;