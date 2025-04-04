const fetchLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {},
      options: {
        limit: 10,
        sort: {
          flight_number: "asc"
        }
      }
    })
  });
  const { docs: launches } = await res.json();
  return launches;
};
const fetchLaunchBy = async ({ id }) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = await res.json();
  return launch;
};

export { fetchLaunches as a, fetchLaunchBy as f };
