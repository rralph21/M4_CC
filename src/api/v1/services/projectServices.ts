import { projects } from "../data/projectData";
import { Project } from "../models/projectModels";

export function getAllProjects(): Project[] {
  return projects;
}

export function createProject(name: string, status: string): Project {
  const newProject: Project = {
    id: projects.length + 1,
    name,
    status,
    createdAt: new Date().toISOString(),
  };

  projects.push(newProject);

  return newProject;
}