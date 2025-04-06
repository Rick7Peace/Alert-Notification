export const handler = async (event) => {
  try {
    for (const record of event.Records) {
      try {
        console.log(record.body);
        //need to send record.body to slack url using axios
        const slackWebhookUrl = 'https://hooks.slack.com/services/T01JZK2Q6M3/B01JZK2Q6M3/8LjH6s5s3fBQr3F2p5tH2Z0';  // Replace with your actual Slack webhook URL

        // Create the payload to send to Slack
        const slackMessage = {
          text: record.body, // You can adjust this to include specific fields from record.body if needed
        };

        // Send the message to Slack
        const response = await fetch(slackWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(slackMessage),
        });

        if (!response.ok){
          throw new Error('Error sending message to slack: ' + response.statusText);
         }
        console.log('Message sent to Slack successfully');
      } catch (e) {
        console.error(e)
        throw e;
      }
    }
    } catch(e) {
      console.error(e)
      throw e;
    }
  }

