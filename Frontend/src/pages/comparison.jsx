import React from "react";

const data = {
  "Food and Beverages": [
    { product: "Canned Goods", normal: 1.5, reduction: "10%", secure: 1.35 },
    { product: "Dry Food", normal: 2.5, reduction: "12%", secure: 2.2 },
    { product: "Beverages", normal: 3.5, reduction: "15%", secure: 2.975 },
  ],
  "Accessories and Clothing": [
    { product: "Clothing", normal: 4, reduction: "20%", secure: 3.2 },
    { product: "Footwear", normal: 7, reduction: "18%", secure: 5.74 },
    { product: "Jewelry", normal: 2, reduction: "12%", secure: 1.76 },
  ],
  Electronics: [
    { product: "Mobile", normal: 6, reduction: "15%", secure: 5.1 },
    { product: "Laptop", normal: 25, reduction: "20%", secure: 20 },
    { product: "Tablet", normal: 12, reduction: "18%", secure: 9.84 },
    { product: "Other Electronics", normal: 10, reduction: "12%", secure: 8.8 },
  ],
};

const Table = ({ title, rows }) => (
  <div style={{ marginBottom: "30px" }}>
    <h2 style={styles.title}>{title}</h2>
    <div style={styles.tableContainer}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Product</th>
            <th style={styles.th}>Normal Packaging (kg CO₂ per unit)</th>
            <th style={styles.th}>Secure Packaging Reduction (%)</th>
            <th style={styles.th}>Secure Packaging (kg CO₂ per unit)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td style={styles.td}>{row.product}</td>
              <td style={styles.td}>{row.normal}</td>
              <td style={styles.td}>{row.reduction}</td>
              <td style={styles.td}>{row.secure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const BlackYellowTables = ({ tableData = data }) => (
  <div style={styles.container}>
    {Object.entries(tableData).map(([category, rows], index) => (
      <Table key={index} title={category} rows={rows} />
    ))}
  </div>
);

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#121212",
    minHeight: "100vh",
    fontFamily: "'Roboto', sans-serif",
    overflowX: "auto", // Allow horizontal scroll if needed
  },
  title: {
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "15px",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  tableContainer: {
    maxWidth: "100%",
    overflowX: "auto", // Allow horizontal scrolling for large tables
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    color: "white",
    backgroundColor: "#1a1a1a",
    borderRadius: "8px",
    overflow: "hidden",
  },
  th: {
    border: "1px solid #FFD700",
    padding: "12px",
    textAlign: "left",
    color: "#FFD700",
    fontWeight: "bold",
    backgroundColor: "#333",
    letterSpacing: "1px",
    width: "25%", // Ensure consistent column width
  },
  td: {
    border: "1px solid #FFD700",
    padding: "12px",
    textAlign: "left",
    width: "25%", // Ensure consistent column width
  },
  evenRow: {
    backgroundColor: "#2a2a2a",
  },
  oddRow: {
    backgroundColor: "#3a3a3a",
  },
};

export default BlackYellowTables;