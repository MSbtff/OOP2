class Tooltip {}

class ProjectItem {
  constructor(id) {
    this.id = id;
    this.connectMoreInfoButton();
    this.connectSwitchButton();
  }
  connetmoreInfoButton() {}

  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn.addEventListener('click');
  }
}

class ProjectList {
  projects = []; // field

  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id));
    }
    console.log(this.projects);
  }
  addProject() {}

  switchProject(projectId) {
    const projectIndex = this.projects.findIndex((p) => p.id === projectId);
    this.projects.splice(projectIndex, 1);
  }
}

class App {
  static init() {
    // static method
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
  }
}

App.init(); // call static method 한 번만 사용할 것
