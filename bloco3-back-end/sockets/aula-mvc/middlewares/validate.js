module.exports = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) return res.render('error', { error });

  return next();
}