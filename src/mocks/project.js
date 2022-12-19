export const projects = {
  "project-123": {
    id: "project-123",
    samples: [
      {
        id: "sample-123",
      },
    ],
  },
  "project-456": {
    id: "project-456",
    samples: [
      {
        id: "sample-123",
      },
    ],
  },
  "project-789": {
    id: "project-789",
    samples: [
      {
        id: "sample-123",
      },
    ],
    loci: 3,
    inserts: 2,
    instructions: "some instructions",
  },
};

export const fetchProject = (id) => {
  return new Promise((res) => {
    console.log(localStorage.getItem(id));
    if (localStorage.getItem(id)) {
      return res(JSON.parse(localStorage.getItem(id)));
    } else {
      return res(projects[id]);
    }
  }).then((data) => {
    const keys = Object.keys(data);
    data["configured"] = keys.includes("loci") && keys.includes("inserts");
    return data;
  });
};
