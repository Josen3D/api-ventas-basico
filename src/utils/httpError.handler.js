// handle the errors that ocurrs on http methods
export const handleHttpError = (
  res,
  message = "Somethig went wrong",
  code = 403
) => {
  res.status(code);
  res.send({ error: message });
};
