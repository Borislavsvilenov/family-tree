const socket = io(`http://${window.location.hostname}:8081`);

socket.on("message", (data) => {
  console.log(data);
});
