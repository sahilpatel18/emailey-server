module.exports = (survey) => {
  return `
  <html>

  <body>
    <div stype='text-align: center;'>
      <h3>I'd like your input!</h3>
      <p>Please answer the followoing question:</p>
      <p>${survey.body}</p>
      <div>
        <a href='http://localhost:3000'>Yes</a>
      </div>
      <div>
        <a href='http://localhost:3000'>No</a>
      </div>
    </div>
  </body>
</html>;

`;
};
