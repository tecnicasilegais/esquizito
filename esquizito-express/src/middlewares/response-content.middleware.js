export function contentTypeJson(req, res, next) {
  res.contentType('application/json; charset=utf-8');
  next();
}
