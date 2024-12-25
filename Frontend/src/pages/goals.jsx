/* eslint-disable no-unused-vars */
import React from 'react';

function GoalsPage() {
  return (
    <div style={{ padding: '40px', backgroundColor: '#000', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#FFC107', textAlign: 'center', marginBottom: '30px', fontSize: '3rem', fontWeight: 'bold' }}>
        Our Sustainability Goals
      </h1>
      
      {/* Main container box for sustainability goals */}
      <div style={{
        backgroundColor: '#000',
        padding: '40px',
        borderRadius: '10px',
        border: '2px solid #FFC107',
        margin: '0 auto',
        width: '80%',
        boxSizing: 'border-box',
        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.7)',
      }}>
        {/* Title for the list of goals */}
        <h2 style={{ color: '#FFC107', textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', fontWeight: 'bold' }}>
          Key Sustainability Goals
        </h2>
        
        {/* List of sustainability goals */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',  // Three columns for large screens
          gap: '20px',
          padding: '0 10px'
        }}>
          
          {/* Goal 1 - Planting 3 Million Trees */}
          <div style={{
            backgroundColor: '#000', 
            color: '#FFC107', 
            padding: '20px', 
            borderRadius: '8px', 
            border: '2px solid #FFC107', 
            textAlign: 'center',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            fontFamily: '"Roboto", sans-serif'
          }}>
            <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.5rem' }}>Planting 3 Million Trees by 2030</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>We are committed to planting 3 million trees by 2030 to combat climate change and reduce carbon emissions.</p>
          </div>

          {/* Goal 2 - Beach Cleaning */}
          <div style={{
            backgroundColor: '#000', 
            color: '#FFC107', 
            padding: '20px', 
            borderRadius: '8px', 
            border: '2px solid #FFC107', 
            textAlign: 'center',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            fontFamily: '"Roboto", sans-serif'
          }}>
            <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.5rem' }}>Cleaning Beaches and Waterways</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>We organize community-driven beach cleanups to help reduce plastic waste and restore our oceans.</p>
          </div>

          {/* Goal 3 - Carbon Neutrality by 2050 */}
          <div style={{
            backgroundColor: '#000', 
            color: '#FFC107', 
            padding: '20px', 
            borderRadius: '8px', 
            border: '2px solid #FFC107', 
            textAlign: 'center',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            fontFamily: '"Roboto", sans-serif'
          }}>
            <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.5rem' }}>Achieving Carbon Neutrality by 2050</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>Our aim is to achieve carbon neutrality through renewable energy, electric vehicle adoption, and sustainable practices.</p>
          </div>

          {/* Goal 4 - Waste Diversion */}
          <div style={{
            backgroundColor: '#000', 
            color: '#FFC107', 
            padding: '20px', 
            borderRadius: '8px', 
            border: '2px solid #FFC107', 
            textAlign: 'center',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            fontFamily: '"Roboto", sans-serif'
          }}>
            <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.5rem' }}>Zero-Waste Goal</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>Our goal is to divert 75% of waste from landfills through recycling, composting, and sustainable materials.</p>
          </div>

          {/* Goal 5 - Sustainable Packaging */}
          <div style={{
            backgroundColor: '#000', 
            color: '#FFC107', 
            padding: '20px', 
            borderRadius: '8px', 
            border: '2px solid #FFC107', 
            textAlign: 'center',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            fontFamily: '"Roboto", sans-serif'
          }}>
            <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.5rem' }}>100% Sustainable Packaging by 2030</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>We aim to make all packaging recyclable, biodegradable, or compostable by 2030 to minimize waste.</p>
          </div>

          {/* Goal 6 - Energy Efficiency */}
          <div style={{
            backgroundColor: '#000', 
            color: '#FFC107', 
            padding: '20px', 
            borderRadius: '8px', 
            border: '2px solid #FFC107', 
            textAlign: 'center',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            fontFamily: '"Roboto", sans-serif'
          }}>
            <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.5rem' }}>Achieving Energy Efficiency</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>We plan to reduce energy consumption in operations by 30% using advanced energy-efficient technologies.</p>
          </div>
        </div>
      </div>

      {/* Achieved Goals Section */}
      <div style={{
        backgroundColor: '#000',
        padding: '40px',
        borderRadius: '10px',
        border: '2px solid #FFC107',
        marginTop: '40px',
        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.7)',
      }}>
        <h2 style={{ color: '#FFC107', textAlign: 'center', marginBottom: '30px', fontSize: '2.5rem', fontWeight: 'bold' }}>
          Achieved Sustainability Goals
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          padding: '0 10px'
        }}>
          {/* Achieved Goal 1 */}
          <div style={{
            backgroundColor: '#000', 
            color: '#FFC107', 
            padding: '20px', 
            borderRadius: '8px', 
            border: '2px solid #FFC107', 
            textAlign: 'center',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)'
          }}>
            <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.5rem' }}>1 Million Trees Planted in 2023</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>We exceeded our planting goal by planting 1 million trees in 2023.</p>
          </div>

          {/* Achieved Goal 2 */}
          <div style={{
            backgroundColor: '#000', 
            color: '#FFC107', 
            padding: '20px', 
            borderRadius: '8px', 
            border: '2px solid #FFC107', 
            textAlign: 'center',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)'
          }}>
            <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.5rem' }}>Achieved 70% Waste Diversion</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>Diverted 70% of waste from landfills by enhancing recycling and composting efforts.</p>
          </div>

          {/* Achieved Goal 3 */}
          <div style={{
            backgroundColor: '#000', 
            color: '#FFC107', 
            padding: '20px', 
            borderRadius: '8px', 
            border: '2px solid #FFC107', 
            textAlign: 'center',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)'
          }}>
            <h3 style={{ color: '#fff', marginBottom: '15px', fontSize: '1.5rem' }}>100% Solar-Powered Operations</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>Transitioned all offices and warehouses to solar power in 2023.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalsPage;