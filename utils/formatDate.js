function formatDate(date) {
  const parsedDate = new Intl.DateTimeFormat("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return parsedDate;
}

module.exports = { formatDate };
