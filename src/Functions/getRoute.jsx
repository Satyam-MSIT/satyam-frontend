const getRoute = (role) => {
  if (role === "author" || role === "reviewer") return `/${role}`;
  if (role.startsWith("satyam")) return "/satyam";
  return "/";
};

export default getRoute;
