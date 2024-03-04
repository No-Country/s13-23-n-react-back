import { Router } from 'express';

import teamRequestController from '../controllers/team_request_controller.js';

const router = Router();

router.get('/getAll', teamRequestController.getAllTeamRequests);
router.get('/:id', teamRequestController.getTeamRequestById);
router.post('/create', teamRequestController.createTeamRequest);

export default router;
