import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Check if connection string is defined
    if (!process.env.MONGO_URI) {
      throw new Error('MongoDB connection string is not defined');
    }

    // Attempt to connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Remove deprecated options
    });

    // Log successful connection
    console.log(`MongoDB connected successfully: ${conn.connection.host}`);
    
    // Optional: Add event listeners for connection monitoring
    mongoose.connection.on('error', (err) => {
      console.error('Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('Lost MongoDB connection');
    });

  } catch (error) {
    // Comprehensive error handling
    console.error('Failed to connect to MongoDB:');
    console.error('Error Name:', error.name);
    console.error('Error Message:', error.message);
    
    // Provide more specific guidance based on error type
    if (error.name === 'MongoNetworkError') {
      console.error('Network issue detected. Check your internet connection and MongoDB Atlas network settings.');
    } else if (error.name === 'MongoError') {
      console.error('Authentication or configuration problem. Verify your credentials and connection string.');
    }

    // Optional: Implement connection retry logic
    console.error('Exiting process due to MongoDB connection failure');
    process.exit(1);
  }
};

export default connectDB;