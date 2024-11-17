const cron = require('node-cron');
const fetch = require('node-fetch');

const scheduleCronJobs = () => {
  cron.schedule('*/10 * * * *', async () => {
    try {
      console.log('Cron job running...');
      await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await fetch('http://localhost:3000/api/infoPages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await fetch('http://localhost:3000/api/tags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await fetch('http://localhost:3000/api/affiliations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      //   await fetch('http://localhost:3000/api/tags');
      //   await fetch('http://localhost:3000/api/affiliations');
      console.log('Collections fetched and cached successfully.');
    } catch (error) {
      console.error('Error in cron job:', error);
    }
  });
};

module.exports = scheduleCronJobs;
