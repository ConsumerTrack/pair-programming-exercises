const dbService = require('./dbService');
const awsService = require('./awsService'); 

const getAllCreatives = async () => {
  try {
    const creatives = await dbService.getAllCreatives();
    return creatives;
  } catch (error) {
    console.error('Error fetching creatives:', error);
    throw error; 
  }
};

// Implement other service methods (getCreativeById, createCreative, etc.)

module.exports = {
  getAllCreatives,
  // ... other methods
};
