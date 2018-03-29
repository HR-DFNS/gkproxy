module.exports = (title, body, scripts) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
    <link rel="stylesheet" href="/styles.css"> 
      <meta charset="UTF-8">
      <title>${title}</title>
    </head>
    <body>
    ${body}
    </body>
    ${scripts}
  </html>
`;