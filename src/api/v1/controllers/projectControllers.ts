import { Request, Response } from "express";
import { getAllProjects, createProject } from "../services/projectServices";

export function getProjectsController(req: Request, res: Response) {
    const projects = getAllProjects();

    res.json({
        success: true,
        data: projects,
        timestamp: new Date().toISOString(),
    });
}

export function createProjectController(req: Request, res: Response) {
    const { name, status } = req.body;

    if (!name || !status) {
        res.status(400).json({
            success: false,
            error: {
                message: "Name and status are required",
                code: "VALIDATION_ERROR",
            },
            timestamp: new Date().toISOString(),
        });
    }

    const newProject = createProject(name, status);

    res.status(201).json({
        success: true,
        data: newProject,
        timestamp: new Date().toISOString(),
    });
    return;
}