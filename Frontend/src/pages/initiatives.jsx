/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

function InitiativesPage() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#212121', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#FFC107', textAlign: 'center' }}>Our Initiatives to Reduce Carbon Footprint</h1>
      <p style={{ textAlign: 'center', marginBottom: '40px' }}>
        We are committed to minimizing our environmental impact through various initiatives aimed at reducing our carbon footprint.
      </p>

      {/* Button for sustainable goals */}
      <Link to="/goals" style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        backgroundColor: '#FFC107',
        color: '#000',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        textDecoration: 'none',
        zIndex: '1000'
      }}>
        Our Sustainable Goals
      </Link>

      {/* Grid container for the five boxes */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',  // 3 columns for large screens, adjust as needed
        gap: '20px',
        padding: '0 10px'
      }}>
        {/* Box 1 */}
        <div style={{
          backgroundColor: '#333', 
          padding: '20px', 
          borderRadius: '8px', 
          border: '1px solid #FFC107', 
          textAlign: 'center'
        }}>
          <img src="recycle.jpg" alt="Recyclable Materials" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '15px' }} />
          <strong>Recyclable Materials:</strong>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', color: '#FFC107' }}>
            <li>• We utilize advanced recyclable materials like aluminum, glass, and PET plastics to significantly cut waste and conserve resources.</li>
            <li>• Our ambition is to achieve 100% recyclable packaging across all product lines by 2025, leveraging state-of-the-art recycling technologies.</li>
          </ul>
        </div>

        {/* Box 2 */}
        <div style={{
          backgroundColor: '#333', 
          padding: '20px', 
          borderRadius: '8px', 
          border: '1px solid #FFC107', 
          textAlign: 'center'
        }}>
          <img src="biodeg.jpg" alt="Biodegradable Options" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '15px' }} />
          <strong>Biodegradable Options:</strong>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', color: '#FFC107' }}>
            <li>• Employing biodegradable alternatives such as PLA and PHA plastics that naturally break down in 6-12 months.</li>
            <li>• These materials ensure eco-friendly disposal, leaving minimal residual environmental impact.</li>
          </ul>
        </div>

        {/* Box 3 */}
        <div style={{
          backgroundColor: '#333', 
          padding: '20px', 
          borderRadius: '8px', 
          border: '1px solid #FFC107', 
          textAlign: 'center'
        }}>
          <img src="reducedplast.jpg" alt="Reduced-Use Plastics" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '15px' }} />
          <strong>Reduced-Use Plastics:</strong>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', color: '#FFC107' }}>
            <li>• Transitioning from single-use plastics to durable, recyclable alternatives like paper, glass, and aluminum packaging.</li>
            <li>• Recycling aluminum consumes 95% less energy compared to producing new materials, aligning with sustainable practices.</li>
          </ul>
        </div>

        {/* Box 4 */}
        <div style={{
          backgroundColor: '#333', 
          padding: '20px', 
          borderRadius: '8px', 
          border: '1px solid #FFC107', 
          textAlign: 'center'
        }}>
          <img src="energy.jpg" alt="Energy-Efficient Manufacturing" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '15px' }} />
          <strong>Energy-Efficient Manufacturing:</strong>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', color: '#FFC107' }}>
            <li>• Utilizing renewable energy sources, such as solar and wind, which account for 40% of our total energy needs.</li>
            <li>• Implementing advanced energy management systems to reduce annual energy consumption by up to 30%.</li>
          </ul>
        </div>

        {/* Box 5 */}
        <div style={{
          backgroundColor: '#333', 
          padding: '20px', 
          borderRadius: '8px', 
          border: '1px solid #FFC107', 
          textAlign: 'center'
        }}>
          <img src="eco.jpg" alt="Eco-Friendly Inks" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '15px' }} />
          <strong>Eco-Friendly Inks:</strong>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', color: '#FFC107' }}>
            <li>• Adoption of water-based inks to lower volatile organic compound (VOC) emissions, ensuring safer production environments.</li>
            <li>• These inks naturally decompose, providing a sustainable alternative to traditional solvent-based options.</li>
          </ul>
        </div>

        {/* Box 6 - New Category */}
        <div style={{
          backgroundColor: '#333', 
          padding: '20px', 
          borderRadius: '8px', 
          border: '1px solid #FFC107', 
          textAlign: 'center'
        }}>
          <img src="sustainable.jpg" alt="Sustainable Sourcing" style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '15px' }} />
          <strong>Sustainable Sourcing:</strong>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', color: '#FFC107' }}>
            <li>• Procuring materials from FSC-certified sources and utilizing recycled metals to minimize the demand for virgin resources.</li>
            <li>• Ethical sourcing practices are critical in reducing deforestation and lowering the carbon footprint of raw material production by up to 40%.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InitiativesPage;