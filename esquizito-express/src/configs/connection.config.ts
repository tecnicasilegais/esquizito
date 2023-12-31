import mongoose from 'mongoose';

import config from 'configs/db.config';

export async function connectToDatabase(): Promise<void> {
  const uri = `mongodb+srv://${config.user}:${config.password}@${config.host}/${config.database}`;
  await mongoose.connect(uri).then(() => console.log('Connected to MongoDB'));

  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
  });
}
