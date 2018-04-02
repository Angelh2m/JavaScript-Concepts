function projection() {
  var newReleases = [
    {
      id: 70111470,
      title: "Die Hard",
      rating: [4.0]
    },
    {
      id: 654356453,
      title: "Bad Boys",
      rating: [5.0]
    },
    {
      id: 65432445,
      title: "The Chamber",
      rating: [4.0]
    },
    {
      id: 675465,
      title: "Fracture",
      rating: [5.0]
    }
  ];

  return newReleases.map(release => ({
    id: release["id"],
    title: release["title"]
  }));
}

console.log(projection());
