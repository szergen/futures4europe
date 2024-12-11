const cron = require('node-cron');
const fetch = require('node-fetch');

const scheduleCronJobs = () => {
  cron.schedule('*/20 * * * *', async () => {
    try {
      console.log('Cron job running...');
      await fetch('/api/posts', {
        method: 'POST',
      });
      await fetch('/api/infoPages', {
        method: 'POST',
      });
      await fetch('/api/tags', {
        method: 'POST',
      });
      //   await fetch('http://localhost:3000/api/affiliations', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   });
      //   await fetch('http://localhost:3000/api/tags');
      //   await fetch('http://localhost:3000/api/affiliations');
      console.log('Collections fetched and cached successfully.');
    } catch (error) {
      console.error('Error in cron job:', error);
    }
  });
};

module.exports = scheduleCronJobs;
