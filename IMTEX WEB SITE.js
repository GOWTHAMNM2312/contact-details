const form = document.getElementById('customerForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const companyName = document.getElementById('companyName').value;
    const personalName = document.getElementById('personalName').value;
    const companyAddress = document.getElementById('companyAddress').value;
    const customerEmail = document.getElementById('customerEmail').value;

    // Replace 'your_email@example.com' with your actual email address
    const senderEmail = 'iam.gowthamnm123@gmail.com
';

    // Replace 'your_pdf_url' with the actual URL of your PDF
    const pdfUrl = 'https://drive.google.com/file/d/1MQwl-RGZ0WbvmTvl66TNge2Wh6vs4KzK/view?usp=sharing';

    // Create email body
    const emailBody = `
        Dear ${personalName},

        Thank you for your interest in our services.

        Here are your details:
        - Company Name: ${companyName}
        - Company Address: ${companyAddress}

        Please find the attached PDF for more information.

        Best regards,
        Your Company Name
    `;

    // Send email using a suitable email library or service (e.g., Nodemailer, SendGrid)
    sendEmail(senderEmail, customerEmail, 'Customer Data', emailBody, pdfUrl)
        .then(() => {
            console.log('Email sent successfully!');
            // Store data in a spreadsheet or database (e.g., Google Sheets API, Firebase)
            storeData(companyName, personalName, companyAddress, customerEmail);
            alert('Form submitted successfully! Please check your email.');
            form.reset();
        })
        .catch(error => {
            console.error('Error sending email:', error);
            alert('An error occurred. Please try again later.');
        });
});

// Function to send email (implementation depends on chosen library/service)
function sendEmail(senderEmail, recipientEmail, subject, body, pdfUrl) {
    // ... implementation details ...
}

// Function to store data (implementation depends on chosen storage method)
function storeData(companyName, personalName, companyAddress, customerEmail) {
    // ... implementation details ...
}