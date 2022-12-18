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
    id: "project-345",
    samples: [
      {
        id: "sample-123",
      },
    ],
  },
  "project-789": {
    id: "project-678",
    samples: [
      {
        id: "sample-123",
      },
    ],
    loci: 2,
    inserts: 2,
    instructions: "some instructions",
  },
};

export const fetchProject = (id) => {
  return new Promise((res) => {
    return setTimeout(() => res(projects[id]), 1000);
  }).then((data) => {
    data["configured"] = Object.keys(data).includes("loci");
    return data;
  });
};
