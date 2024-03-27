// PDFDocument.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  value: {
    marginBottom: 10,
  },
});

const PDFDocument = ({ formData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Personal Information</Text>
        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.value}>{formData.firstname}</Text>
        {/* Add other fields */}
      </View>
      {/* Add other sections */}
    </Page>
  </Document>
);

export default PDFDocument;
