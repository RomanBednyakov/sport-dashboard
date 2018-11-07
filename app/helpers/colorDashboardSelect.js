class AddColorButtons {
  colorButtons = response => {
    const arrButtons = [];
    Object.keys(response.data).forEach(item => {
      const str = item
        .replace(/Count/g, "")
        .replace(/([A-Z]+)/g, " $1")
        .replace(/([A-Z][a-z])/g, "$1");
      switch (item) {
        case "groupCount":
          arrButtons.push({
            name: str.charAt(0).toUpperCase() + str.slice(1),
            color: "#f4c400",
            count: response.data[item],
            activeFlag: false
          });
          break;
        case "playerCount":
          arrButtons.push({
            name: str.charAt(0).toUpperCase() + str.slice(1),
            color: "#8bd681",
            count: response.data[item],
            activeFlag: false
          });
          break;
        case "parentCount":
          arrButtons.push({
            name: str.charAt(0).toUpperCase() + str.slice(1),
            color: "#ff6d4a",
            count: response.data[item],
            activeFlag: false
          });
          break;
        case "dailyEvalCount":
          arrButtons.push({
            name: str.charAt(0).toUpperCase() + str.slice(1),
            color: "#9f7cd5",
            count: response.data[item],
            activeFlag: false
          });
          break;
        case "fitnessTestCount":
          arrButtons.push({
            name: str.charAt(0).toUpperCase() + str.slice(1),
            color: "#989898",
            count: response.data[item],
            activeFlag: false
          });
          break;
        case "singlesPMCount":
          arrButtons.push({
            name: str.charAt(0).toUpperCase() + str.slice(1),
            color: "#6a7785",
            count: response.data[item],
            activeFlag: false
          });
          break;
        case "doublesPMCount":
          arrButtons.push({
            name: str.charAt(0).toUpperCase() + str.slice(1),
            color: "#44d5c4",
            count: response.data[item],
            activeFlag: false
          });
          break;
        case "goalsCount":
          arrButtons.push({
            name: str.charAt(0).toUpperCase() + str.slice(1),
            color: "#65b2ff",
            count: response.data[item],
            activeFlag: false
          });
          break;
        case "eventsCount":
          arrButtons.push({
            name: str.charAt(0).toUpperCase() + str.slice(1),
            color: "#ff5b79",
            count: response.data[item],
            activeFlag: false
          });
          break;
        case "attendanceCount":
          arrButtons.push({
            name: str.charAt(0).toUpperCase() + str.slice(1),
            color: "#624096",
            count: response.data[item],
            activeFlag: false
          });
          break;
        case "tournamentCount":
          arrButtons.push({
            name: str.charAt(0).toUpperCase() + str.slice(1),
            color: "#ba3d54",
            count: response.data[item],
            activeFlag: false
          });
          break;
        case "courtsCount":
          arrButtons.push({
            name: str.charAt(0).toUpperCase() + str.slice(1),
            color: "#34ba22",
            count: response.data[item],
            activeFlag: false
          });
          break;
        case "pushNotificationCount":
          arrButtons.push({
            name: str.charAt(0).toUpperCase() + str.slice(1),
            color: "#d3d3d3",
            count: response.data[item],
            activeFlag: false
          });
          break;
        case "coachesCount":
          arrButtons.push({
            name: str.charAt(0).toUpperCase() + str.slice(1),
            color: "#93cf1d",
            count: response.data[item],
            activeFlag: false
          });
          break;
        default:
          console.log("new button need add color!!!");
      }
    });
    response.data = arrButtons;
    return response;
  };
}

const addColorButtons = new AddColorButtons();
export default addColorButtons;
