import { Request, Response } from 'express'

export interface Controller {
    create: (req: Request, res: Response) => Promise<any>;

    list: (req: Request, res: Response) => Promise<any>;

    find: (req: Request, res: Response) => Promise<any>;
}
