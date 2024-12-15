const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../mocks/db.json');

const getAllCreatives = async () => {
  try {
    const data = await fs.promises.readFile(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading from DB:', error);
    throw error;
  }
};

// Implement other DB service methods (e.g., write to DB)

module.exports = {
  getAllCreatives,
  // ... other methods
};
