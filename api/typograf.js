const Typograf = require('typograf');

module.exports = (req, res) => {
  const tp = new Typograf({
    locale: ['ru', 'en-US'],
  });

  const result = tp.execute(req.body.text || '');

  res.status(200).json({
    result
  });
};
